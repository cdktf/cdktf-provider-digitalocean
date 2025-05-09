# `containerRegistryDockerCredentials` Submodule <a name="`containerRegistryDockerCredentials` Submodule" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryDockerCredentials <a name="ContainerRegistryDockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials digitalocean_container_registry_docker_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

new containerRegistryDockerCredentials.ContainerRegistryDockerCredentials(scope: Construct, id: string, config: ContainerRegistryDockerCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig">ContainerRegistryDockerCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig">ContainerRegistryDockerCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetExpirySeconds">resetExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetWrite">resetWrite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExpirySeconds` <a name="resetExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetExpirySeconds"></a>

```typescript
public resetExpirySeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetWrite` <a name="resetWrite" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetWrite"></a>

```typescript
public resetWrite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryDockerCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerRegistryDockerCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryDockerCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryDockerCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryDockerCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime">credentialExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials">dockerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput">expirySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput">writeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds">expirySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialExpirationTime`<sup>Required</sup> <a name="credentialExpirationTime" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime"></a>

```typescript
public readonly credentialExpirationTime: string;
```

- *Type:* string

---

##### `dockerCredentials`<sup>Required</sup> <a name="dockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials"></a>

```typescript
public readonly dockerCredentials: string;
```

- *Type:* string

---

##### `expirySecondsInput`<sup>Optional</sup> <a name="expirySecondsInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput"></a>

```typescript
public readonly expirySecondsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput"></a>

```typescript
public readonly writeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirySeconds`<sup>Required</sup> <a name="expirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds"></a>

```typescript
public readonly expirySeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryDockerCredentialsConfig <a name="ContainerRegistryDockerCredentialsConfig" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.Initializer"></a>

```typescript
import { containerRegistryDockerCredentials } from '@cdktf/provider-digitalocean'

const containerRegistryDockerCredentialsConfig: containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName">registryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds">expirySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}.

---

##### `expirySeconds`<sup>Optional</sup> <a name="expirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds"></a>

```typescript
public readonly expirySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `write`<sup>Optional</sup> <a name="write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}.

---



