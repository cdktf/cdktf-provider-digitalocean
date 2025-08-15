# `genaiOpenaiApiKey` Submodule <a name="`genaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiOpenaiApiKey <a name="GenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKey(scope: Construct, id: string, config: GenaiOpenaiApiKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel">putModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel">resetModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putModel` <a name="putModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel"></a>

```typescript
public putModel(value: IResolvable | GenaiOpenaiApiKeyModel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModel` <a name="resetModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel"></a>

```typescript
public resetModel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiOpenaiApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model">model</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput">modelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model"></a>

```typescript
public readonly model: GenaiOpenaiApiKeyModelList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput"></a>

```typescript
public readonly modelInput: IResolvable | GenaiOpenaiApiKeyModel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiOpenaiApiKeyConfig <a name="GenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const genaiOpenaiApiKeyConfig: genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey">apiKey</a></code> | <code>string</code> | The OpenAI API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name">name</a></code> | <code>string</code> | A name for the API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model">model</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | model block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The OpenAI API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model"></a>

```typescript
public readonly model: IResolvable | GenaiOpenaiApiKeyModel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}

---

### GenaiOpenaiApiKeyModel <a name="GenaiOpenaiApiKeyModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const genaiOpenaiApiKeyModel: genaiOpenaiApiKey.GenaiOpenaiApiKeyModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement">agreement</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | agreement block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName">inferenceName</a></code> | <code>string</code> | Inference name of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion">inferenceVersion</a></code> | <code>string</code> | Infernce version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational">isFoundational</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the Model Base is foundational. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name">name</a></code> | <code>string</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid">parentUuid</a></code> | <code>string</code> | Parent UUID of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider">provider</a></code> | <code>string</code> | Provider of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete">uploadComplete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the Model upload is complete. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url">url</a></code> | <code>string</code> | URL of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases">usecases</a></code> | <code>string[]</code> | List of Usecases for the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions">versions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | versions block. |

---

##### `agreement`<sup>Optional</sup> <a name="agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement"></a>

```typescript
public readonly agreement: IResolvable | GenaiOpenaiApiKeyModelAgreement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

agreement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#agreement GenaiOpenaiApiKey#agreement}

---

##### `inferenceName`<sup>Optional</sup> <a name="inferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName"></a>

```typescript
public readonly inferenceName: string;
```

- *Type:* string

Inference name of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#inference_name GenaiOpenaiApiKey#inference_name}

---

##### `inferenceVersion`<sup>Optional</sup> <a name="inferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion"></a>

```typescript
public readonly inferenceVersion: string;
```

- *Type:* string

Infernce version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#inference_version GenaiOpenaiApiKey#inference_version}

---

##### `isFoundational`<sup>Optional</sup> <a name="isFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational"></a>

```typescript
public readonly isFoundational: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the Model Base is foundational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#is_foundational GenaiOpenaiApiKey#is_foundational}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `parentUuid`<sup>Optional</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

Parent UUID of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#parent_uuid GenaiOpenaiApiKey#parent_uuid}

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Provider of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#provider GenaiOpenaiApiKey#provider}

---

##### `uploadComplete`<sup>Optional</sup> <a name="uploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete"></a>

```typescript
public readonly uploadComplete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the Model upload is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#upload_complete GenaiOpenaiApiKey#upload_complete}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `usecases`<sup>Optional</sup> <a name="usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases"></a>

```typescript
public readonly usecases: string[];
```

- *Type:* string[]

List of Usecases for the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#usecases GenaiOpenaiApiKey#usecases}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions"></a>

```typescript
public readonly versions: IResolvable | GenaiOpenaiApiKeyModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#versions GenaiOpenaiApiKey#versions}

---

### GenaiOpenaiApiKeyModelAgreement <a name="GenaiOpenaiApiKeyModelAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const genaiOpenaiApiKeyModelAgreement: genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description">description</a></code> | <code>string</code> | Description of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name">name</a></code> | <code>string</code> | Name of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url">url</a></code> | <code>string</code> | URL of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid">uuid</a></code> | <code>string</code> | UUID of the agreement. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#description GenaiOpenaiApiKey#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#uuid GenaiOpenaiApiKey#uuid}

---

### GenaiOpenaiApiKeyModelVersions <a name="GenaiOpenaiApiKeyModelVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const genaiOpenaiApiKeyModelVersions: genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major">major</a></code> | <code>number</code> | Major version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor">minor</a></code> | <code>number</code> | Minor version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch">patch</a></code> | <code>number</code> | Patch version of the model. |

---

##### `major`<sup>Optional</sup> <a name="major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major"></a>

```typescript
public readonly major: number;
```

- *Type:* number

Major version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#major GenaiOpenaiApiKey#major}

---

##### `minor`<sup>Optional</sup> <a name="minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor"></a>

```typescript
public readonly minor: number;
```

- *Type:* number

Minor version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#minor GenaiOpenaiApiKey#minor}

---

##### `patch`<sup>Optional</sup> <a name="patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch"></a>

```typescript
public readonly patch: number;
```

- *Type:* number

Patch version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_openai_api_key#patch GenaiOpenaiApiKey#patch}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiOpenaiApiKeyModelAgreementList <a name="GenaiOpenaiApiKeyModelAgreementList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get"></a>

```typescript
public get(index: number): GenaiOpenaiApiKeyModelAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModelAgreement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---


### GenaiOpenaiApiKeyModelAgreementOutputReference <a name="GenaiOpenaiApiKeyModelAgreementOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModelAgreement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>

---


### GenaiOpenaiApiKeyModelList <a name="GenaiOpenaiApiKeyModelList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get"></a>

```typescript
public get(index: number): GenaiOpenaiApiKeyModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---


### GenaiOpenaiApiKeyModelOutputReference <a name="GenaiOpenaiApiKeyModelOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement">putAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement">resetAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName">resetInferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion">resetInferenceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational">resetIsFoundational</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid">resetParentUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider">resetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete">resetUploadComplete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases">resetUsecases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgreement` <a name="putAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement"></a>

```typescript
public putAgreement(value: IResolvable | GenaiOpenaiApiKeyModelAgreement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---

##### `putVersions` <a name="putVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions"></a>

```typescript
public putVersions(value: IResolvable | GenaiOpenaiApiKeyModelVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---

##### `resetAgreement` <a name="resetAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement"></a>

```typescript
public resetAgreement(): void
```

##### `resetInferenceName` <a name="resetInferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName"></a>

```typescript
public resetInferenceName(): void
```

##### `resetInferenceVersion` <a name="resetInferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion"></a>

```typescript
public resetInferenceVersion(): void
```

##### `resetIsFoundational` <a name="resetIsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational"></a>

```typescript
public resetIsFoundational(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentUuid` <a name="resetParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid"></a>

```typescript
public resetParentUuid(): void
```

##### `resetProvider` <a name="resetProvider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider"></a>

```typescript
public resetProvider(): void
```

##### `resetUploadComplete` <a name="resetUploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete"></a>

```typescript
public resetUploadComplete(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUsecases` <a name="resetUsecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases"></a>

```typescript
public resetUsecases(): void
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions"></a>

```typescript
public resetVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput">agreementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput">inferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput">inferenceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput">isFoundationalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput">parentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput">uploadCompleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput">usecasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput">versionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName">inferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion">inferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational">isFoundational</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid">parentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete">uploadComplete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases">usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement"></a>

```typescript
public readonly agreement: GenaiOpenaiApiKeyModelAgreementList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions"></a>

```typescript
public readonly versions: GenaiOpenaiApiKeyModelVersionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a>

---

##### `agreementInput`<sup>Optional</sup> <a name="agreementInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput"></a>

```typescript
public readonly agreementInput: IResolvable | GenaiOpenaiApiKeyModelAgreement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---

##### `inferenceNameInput`<sup>Optional</sup> <a name="inferenceNameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput"></a>

```typescript
public readonly inferenceNameInput: string;
```

- *Type:* string

---

##### `inferenceVersionInput`<sup>Optional</sup> <a name="inferenceVersionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput"></a>

```typescript
public readonly inferenceVersionInput: string;
```

- *Type:* string

---

##### `isFoundationalInput`<sup>Optional</sup> <a name="isFoundationalInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput"></a>

```typescript
public readonly isFoundationalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentUuidInput`<sup>Optional</sup> <a name="parentUuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput"></a>

```typescript
public readonly parentUuidInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `uploadCompleteInput`<sup>Optional</sup> <a name="uploadCompleteInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput"></a>

```typescript
public readonly uploadCompleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usecasesInput`<sup>Optional</sup> <a name="usecasesInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput"></a>

```typescript
public readonly usecasesInput: string[];
```

- *Type:* string[]

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput"></a>

```typescript
public readonly versionsInput: IResolvable | GenaiOpenaiApiKeyModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---

##### `inferenceName`<sup>Required</sup> <a name="inferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName"></a>

```typescript
public readonly inferenceName: string;
```

- *Type:* string

---

##### `inferenceVersion`<sup>Required</sup> <a name="inferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion"></a>

```typescript
public readonly inferenceVersion: string;
```

- *Type:* string

---

##### `isFoundational`<sup>Required</sup> <a name="isFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational"></a>

```typescript
public readonly isFoundational: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentUuid`<sup>Required</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `uploadComplete`<sup>Required</sup> <a name="uploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete"></a>

```typescript
public readonly uploadComplete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases"></a>

```typescript
public readonly usecases: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>

---


### GenaiOpenaiApiKeyModelVersionsList <a name="GenaiOpenaiApiKeyModelVersionsList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get"></a>

```typescript
public get(index: number): GenaiOpenaiApiKeyModelVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---


### GenaiOpenaiApiKeyModelVersionsOutputReference <a name="GenaiOpenaiApiKeyModelVersionsOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer"></a>

```typescript
import { genaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor">resetMajor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor">resetMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch">resetPatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMajor` <a name="resetMajor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor"></a>

```typescript
public resetMajor(): void
```

##### `resetMinor` <a name="resetMinor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor"></a>

```typescript
public resetMinor(): void
```

##### `resetPatch` <a name="resetPatch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch"></a>

```typescript
public resetPatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput">majorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput">minorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput">patchInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major">major</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor">minor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch">patch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `majorInput`<sup>Optional</sup> <a name="majorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput"></a>

```typescript
public readonly majorInput: number;
```

- *Type:* number

---

##### `minorInput`<sup>Optional</sup> <a name="minorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput"></a>

```typescript
public readonly minorInput: number;
```

- *Type:* number

---

##### `patchInput`<sup>Optional</sup> <a name="patchInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput"></a>

```typescript
public readonly patchInput: number;
```

- *Type:* number

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major"></a>

```typescript
public readonly major: number;
```

- *Type:* number

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor"></a>

```typescript
public readonly minor: number;
```

- *Type:* number

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch"></a>

```typescript
public readonly patch: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenaiOpenaiApiKeyModelVersions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>

---



