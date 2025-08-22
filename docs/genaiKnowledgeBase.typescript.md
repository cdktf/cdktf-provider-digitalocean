# `genaiKnowledgeBase` Submodule <a name="`genaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBase <a name="GenaiKnowledgeBase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBase(scope: Construct, id: string, config: GenaiKnowledgeBaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources">putDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt">resetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasources` <a name="putDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources"></a>

```typescript
public putDatasources(value: IResolvable | GenaiKnowledgeBaseDatasources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob"></a>

```typescript
public putLastIndexingJob(value: IResolvable | GenaiKnowledgeBaseLastIndexingJob[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `resetAddedToAgentAt` <a name="resetAddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt"></a>

```typescript
public resetAddedToAgentAt(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob"></a>

```typescript
public resetLastIndexingJob(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid"></a>

```typescript
public resetVpcUuid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput">addedToAgentAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput">datasourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput">embeddingModelUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput">vpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt">addedToAgentAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources"></a>

```typescript
public readonly datasources: GenaiKnowledgeBaseDatasourcesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a>

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: GenaiKnowledgeBaseLastIndexingJobList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `addedToAgentAtInput`<sup>Optional</sup> <a name="addedToAgentAtInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```typescript
public readonly addedToAgentAtInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `datasourcesInput`<sup>Optional</sup> <a name="datasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput"></a>

```typescript
public readonly datasourcesInput: IResolvable | GenaiKnowledgeBaseDatasources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---

##### `embeddingModelUuidInput`<sup>Optional</sup> <a name="embeddingModelUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```typescript
public readonly embeddingModelUuidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```typescript
public readonly lastIndexingJobInput: IResolvable | GenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput"></a>

```typescript
public readonly vpcUuidInput: string;
```

- *Type:* string

---

##### `addedToAgentAt`<sup>Required</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt"></a>

```typescript
public readonly addedToAgentAt: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid"></a>

```typescript
public readonly embeddingModelUuid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseConfig <a name="GenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseConfig: genaiKnowledgeBase.GenaiKnowledgeBaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources">datasources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>string</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>string</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId">projectId</a></code> | <code>string</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt">addedToAgentAt</a></code> | <code>string</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId">databaseId</a></code> | <code>string</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob">lastIndexingJob</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources"></a>

```typescript
public readonly datasources: IResolvable | GenaiKnowledgeBaseDatasources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```typescript
public readonly embeddingModelUuid: string;
```

- *Type:* string

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```typescript
public readonly addedToAgentAt: string;
```

- *Type:* string

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: IResolvable | GenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

### GenaiKnowledgeBaseDatasources <a name="GenaiKnowledgeBaseDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDatasources: genaiKnowledgeBase.GenaiKnowledgeBaseDatasources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource">fileUploadDataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | file_upload_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob">lastIndexingJob</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource">spacesDataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid">uuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | web_crawler_data_source block. |

---

##### `fileUploadDataSource`<sup>Optional</sup> <a name="fileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource"></a>

```typescript
public readonly fileUploadDataSource: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

file_upload_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `spacesDataSource`<sup>Optional</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource"></a>

```typescript
public readonly spacesDataSource: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

##### `webCrawlerDataSource`<sup>Optional</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource"></a>

```typescript
public readonly webCrawlerDataSource: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}

---

### GenaiKnowledgeBaseDatasourcesFileUploadDataSource <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDatasourcesFileUploadDataSource: genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName">originalFileName</a></code> | <code>string</code> | The original name of the uploaded file. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | The size of the file in bytes. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey">storedObjectKey</a></code> | <code>string</code> | The stored object key for the file. |

---

##### `originalFileName`<sup>Optional</sup> <a name="originalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName"></a>

```typescript
public readonly originalFileName: string;
```

- *Type:* string

The original name of the uploaded file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}

---

##### `sizeInBytes`<sup>Optional</sup> <a name="sizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

The size of the file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}

---

##### `storedObjectKey`<sup>Optional</sup> <a name="storedObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey"></a>

```typescript
public readonly storedObjectKey: string;
```

- *Type:* string

The stored object key for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}

---

### GenaiKnowledgeBaseDatasourcesLastIndexingJob <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDatasourcesLastIndexingJob: genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase">phase</a></code> | <code>string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens">tokens</a></code> | <code>number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid">uuid</a></code> | <code>string</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

### GenaiKnowledgeBaseDatasourcesSpacesDataSource <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDatasourcesSpacesDataSource: genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath">itemPath</a></code> | <code>string</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region">region</a></code> | <code>string</code> | The region of the Spaces bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}

---

##### `itemPath`<sup>Optional</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath"></a>

```typescript
public readonly itemPath: string;
```

- *Type:* string

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}

---

### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDatasourcesWebCrawlerDataSource: genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption">crawlingOption</a></code> | <code>string</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia">embedMedia</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}

---

##### `crawlingOption`<sup>Optional</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption"></a>

```typescript
public readonly crawlingOption: string;
```

- *Type:* string

Options for specifying how URLs found on pages should be handled.

UNKNOWN: Default unknown value
- SCOPED: Only include the base URL.
- PATH: Crawl the base URL and linked pages within the URL path.
- DOMAIN: Crawl the base URL and linked pages within the same domain.
- SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}

---

##### `embedMedia`<sup>Optional</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia"></a>

```typescript
public readonly embedMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}

---

### GenaiKnowledgeBaseLastIndexingJob <a name="GenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseLastIndexingJob: genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>string</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName">resetOriginalFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes">resetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey">resetStoredObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOriginalFileName` <a name="resetOriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName"></a>

```typescript
public resetOriginalFileName(): void
```

##### `resetSizeInBytes` <a name="resetSizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes"></a>

```typescript
public resetSizeInBytes(): void
```

##### `resetStoredObjectKey` <a name="resetStoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey"></a>

```typescript
public resetStoredObjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput">originalFileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput">sizeInBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput">storedObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">originalFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">storedObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originalFileNameInput`<sup>Optional</sup> <a name="originalFileNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput"></a>

```typescript
public readonly originalFileNameInput: string;
```

- *Type:* string

---

##### `sizeInBytesInput`<sup>Optional</sup> <a name="sizeInBytesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput"></a>

```typescript
public readonly sizeInBytesInput: string;
```

- *Type:* string

---

##### `storedObjectKeyInput`<sup>Optional</sup> <a name="storedObjectKeyInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput"></a>

```typescript
public readonly storedObjectKeyInput: string;
```

- *Type:* string

---

##### `originalFileName`<sup>Required</sup> <a name="originalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```typescript
public readonly originalFileName: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `storedObjectKey`<sup>Required</sup> <a name="storedObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```typescript
public readonly storedObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobList <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```typescript
public resetCompletedDatasources(): void
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```typescript
public resetDataSourceUuids(): void
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase"></a>

```typescript
public resetPhase(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources"></a>

```typescript
public resetTotalDatasources(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```typescript
public readonly completedDatasourcesInput: number;
```

- *Type:* number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```typescript
public readonly dataSourceUuidsInput: string[];
```

- *Type:* string[]

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput"></a>

```typescript
public readonly phaseInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```typescript
public readonly totalDatasourcesInput: number;
```

- *Type:* number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>

---


### GenaiKnowledgeBaseDatasourcesList <a name="GenaiKnowledgeBaseDatasourcesList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---


### GenaiKnowledgeBaseDatasourcesOutputReference <a name="GenaiKnowledgeBaseDatasourcesOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource">putFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource">putSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource">putWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource">resetFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource">resetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource">resetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileUploadDataSource` <a name="putFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource"></a>

```typescript
public putFileUploadDataSource(value: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob"></a>

```typescript
public putLastIndexingJob(value: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---

##### `putSpacesDataSource` <a name="putSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource"></a>

```typescript
public putSpacesDataSource(value: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---

##### `putWebCrawlerDataSource` <a name="putWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource"></a>

```typescript
public putWebCrawlerDataSource(value: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---

##### `resetFileUploadDataSource` <a name="resetFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource"></a>

```typescript
public resetFileUploadDataSource(): void
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob"></a>

```typescript
public resetLastIndexingJob(): void
```

##### `resetSpacesDataSource` <a name="resetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource"></a>

```typescript
public resetSpacesDataSource(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```

##### `resetWebCrawlerDataSource` <a name="resetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource"></a>

```typescript
public resetWebCrawlerDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource">fileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput">fileUploadDataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput">spacesDataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput">webCrawlerDataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fileUploadDataSource`<sup>Required</sup> <a name="fileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource"></a>

```typescript
public readonly fileUploadDataSource: GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a>

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: GenaiKnowledgeBaseDatasourcesLastIndexingJobList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a>

---

##### `spacesDataSource`<sup>Required</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource"></a>

```typescript
public readonly spacesDataSource: GenaiKnowledgeBaseDatasourcesSpacesDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `webCrawlerDataSource`<sup>Required</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```typescript
public readonly webCrawlerDataSource: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a>

---

##### `fileUploadDataSourceInput`<sup>Optional</sup> <a name="fileUploadDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput"></a>

```typescript
public readonly fileUploadDataSourceInput: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput"></a>

```typescript
public readonly lastIndexingJobInput: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---

##### `spacesDataSourceInput`<sup>Optional</sup> <a name="spacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput"></a>

```typescript
public readonly spacesDataSourceInput: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `webCrawlerDataSourceInput`<sup>Optional</sup> <a name="webCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput"></a>

```typescript
public readonly webCrawlerDataSourceInput: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceList <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath">resetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetItemPath` <a name="resetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath"></a>

```typescript
public resetItemPath(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput">itemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath">itemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `itemPathInput`<sup>Optional</sup> <a name="itemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput"></a>

```typescript
public readonly itemPathInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `itemPath`<sup>Required</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```typescript
public readonly itemPath: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption">resetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia">resetEmbedMedia</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetCrawlingOption` <a name="resetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```typescript
public resetCrawlingOption(): void
```

##### `resetEmbedMedia` <a name="resetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```typescript
public resetEmbedMedia(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawlingOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput">embedMediaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">crawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">embedMedia</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `crawlingOptionInput`<sup>Optional</sup> <a name="crawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```typescript
public readonly crawlingOptionInput: string;
```

- *Type:* string

---

##### `embedMediaInput`<sup>Optional</sup> <a name="embedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```typescript
public readonly embedMediaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `crawlingOption`<sup>Required</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```typescript
public readonly crawlingOption: string;
```

- *Type:* string

---

##### `embedMedia`<sup>Required</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```typescript
public readonly embedMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>

---


### GenaiKnowledgeBaseLastIndexingJobList <a name="GenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get"></a>

```typescript
public get(index: number): GenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---


### GenaiKnowledgeBaseLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```typescript
public resetCompletedDatasources(): void
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```typescript
public resetDataSourceUuids(): void
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```typescript
public resetPhase(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```typescript
public resetTotalDatasources(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```typescript
public readonly completedDatasourcesInput: number;
```

- *Type:* number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```typescript
public readonly dataSourceUuidsInput: string[];
```

- *Type:* string[]

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```typescript
public readonly phaseInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```typescript
public readonly totalDatasourcesInput: number;
```

- *Type:* number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiKnowledgeBaseLastIndexingJob;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>

---



