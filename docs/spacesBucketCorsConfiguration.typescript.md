# `spacesBucketCorsConfiguration` Submodule <a name="`spacesBucketCorsConfiguration` Submodule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketCorsConfiguration <a name="SpacesBucketCorsConfiguration" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration digitalocean_spaces_bucket_cors_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

new spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration(scope: Construct, id: string, config: SpacesBucketCorsConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig">SpacesBucketCorsConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig">SpacesBucketCorsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | SpacesBucketCorsConfigurationCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpacesBucketCorsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpacesBucketCorsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpacesBucketCorsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule"></a>

```typescript
public readonly corsRule: SpacesBucketCorsConfigurationCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | SpacesBucketCorsConfigurationCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketCorsConfigurationConfig <a name="SpacesBucketCorsConfigurationConfig" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.Initializer"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

const spacesBucketCorsConfigurationConfig: spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket">bucket</a></code> | <code>string</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | SpacesBucketCorsConfigurationCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SpacesBucketCorsConfigurationCorsRule <a name="SpacesBucketCorsConfigurationCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.Initializer"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

const spacesBucketCorsConfigurationCorsRule: spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpacesBucketCorsConfigurationCorsRuleList <a name="SpacesBucketCorsConfigurationCorsRuleList" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

new spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get"></a>

```typescript
public get(index: number): SpacesBucketCorsConfigurationCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpacesBucketCorsConfigurationCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---


### SpacesBucketCorsConfigurationCorsRuleOutputReference <a name="SpacesBucketCorsConfigurationCorsRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer"></a>

```typescript
import { spacesBucketCorsConfiguration } from '@cdktf/provider-digitalocean'

new spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpacesBucketCorsConfigurationCorsRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>

---



