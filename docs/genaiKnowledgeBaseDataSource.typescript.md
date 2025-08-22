# `genaiKnowledgeBaseDataSource` Submodule <a name="`genaiKnowledgeBaseDataSource` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBaseDataSource <a name="GenaiKnowledgeBaseDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource(scope: Construct, id: string, config: GenaiKnowledgeBaseDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig">GenaiKnowledgeBaseDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig">GenaiKnowledgeBaseDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource">putSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource">putWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource">resetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource">resetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSpacesDataSource` <a name="putSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource"></a>

```typescript
public putSpacesDataSource(value: GenaiKnowledgeBaseDataSourceSpacesDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `putWebCrawlerDataSource` <a name="putWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource"></a>

```typescript
public putWebCrawlerDataSource(value: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpacesDataSource` <a name="resetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource"></a>

```typescript
public resetSpacesDataSource(): void
```

##### `resetWebCrawlerDataSource` <a name="resetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource"></a>

```typescript
public resetWebCrawlerDataSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiKnowledgeBaseDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiKnowledgeBaseDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBaseDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput">knowledgeBaseUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput">spacesDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput">webCrawlerDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `spacesDataSource`<sup>Required</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource"></a>

```typescript
public readonly spacesDataSource: GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a>

---

##### `webCrawlerDataSource`<sup>Required</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource"></a>

```typescript
public readonly webCrawlerDataSource: GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `knowledgeBaseUuidInput`<sup>Optional</sup> <a name="knowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput"></a>

```typescript
public readonly knowledgeBaseUuidInput: string;
```

- *Type:* string

---

##### `spacesDataSourceInput`<sup>Optional</sup> <a name="spacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput"></a>

```typescript
public readonly spacesDataSourceInput: GenaiKnowledgeBaseDataSourceSpacesDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `webCrawlerDataSourceInput`<sup>Optional</sup> <a name="webCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput"></a>

```typescript
public readonly webCrawlerDataSourceInput: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseDataSourceConfig <a name="GenaiKnowledgeBaseDataSourceConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDataSourceConfig: genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spacesDataSource`<sup>Optional</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource"></a>

```typescript
public readonly spacesDataSource: GenaiKnowledgeBaseDataSourceSpacesDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `webCrawlerDataSource`<sup>Optional</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource"></a>

```typescript
public readonly webCrawlerDataSource: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

### GenaiKnowledgeBaseDataSourceSpacesDataSource <a name="GenaiKnowledgeBaseDataSourceSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDataSourceSpacesDataSource: genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath">itemPath</a></code> | <code>string</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region">region</a></code> | <code>string</code> | The region of the Spaces bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}

---

##### `itemPath`<sup>Optional</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath"></a>

```typescript
public readonly itemPath: string;
```

- *Type:* string

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}

---

### GenaiKnowledgeBaseDataSourceWebCrawlerDataSource <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

const genaiKnowledgeBaseDataSourceWebCrawlerDataSource: genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption">crawlingOption</a></code> | <code>string</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia">embedMedia</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}

---

##### `crawlingOption`<sup>Optional</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}

---

##### `embedMedia`<sup>Optional</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia"></a>

```typescript
public readonly embedMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath">resetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetItemPath` <a name="resetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath"></a>

```typescript
public resetItemPath(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput">itemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath">itemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `itemPathInput`<sup>Optional</sup> <a name="itemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput"></a>

```typescript
public readonly itemPathInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `itemPath`<sup>Required</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath"></a>

```typescript
public readonly itemPath: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenaiKnowledgeBaseDataSourceSpacesDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---


### GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer"></a>

```typescript
import { genaiKnowledgeBaseDataSource } from '@cdktf/provider-digitalocean'

new genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption">resetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia">resetEmbedMedia</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetCrawlingOption` <a name="resetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```typescript
public resetCrawlingOption(): void
```

##### `resetEmbedMedia` <a name="resetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```typescript
public resetEmbedMedia(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawlingOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput">embedMediaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption">crawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia">embedMedia</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `crawlingOptionInput`<sup>Optional</sup> <a name="crawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```typescript
public readonly crawlingOptionInput: string;
```

- *Type:* string

---

##### `embedMediaInput`<sup>Optional</sup> <a name="embedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```typescript
public readonly embedMediaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `crawlingOption`<sup>Required</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```typescript
public readonly crawlingOption: string;
```

- *Type:* string

---

##### `embedMedia`<sup>Required</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```typescript
public readonly embedMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---



