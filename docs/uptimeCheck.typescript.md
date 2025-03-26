# `uptimeCheck` Submodule <a name="`uptimeCheck` Submodule" id="@cdktf/provider-digitalocean.uptimeCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UptimeCheck <a name="UptimeCheck" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check digitalocean_uptime_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

new uptimeCheck.UptimeCheck(scope: Construct, id: string, config: UptimeCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig">UptimeCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig">UptimeCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UptimeCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isConstruct"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

uptimeCheck.UptimeCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformElement"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

uptimeCheck.UptimeCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformResource"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

uptimeCheck.UptimeCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

uptimeCheck.UptimeCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UptimeCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UptimeCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UptimeCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UptimeCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UptimeCheckConfig <a name="UptimeCheckConfig" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.Initializer"></a>

```typescript
import { uptimeCheck } from '@cdktf/provider-digitalocean'

const uptimeCheckConfig: uptimeCheck.UptimeCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.name">name</a></code> | <code>string</code> | A human-friendly display name for the check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.target">target</a></code> | <code>string</code> | The endpoint to perform healthchecks on. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean value indicating whether the check is enabled/disabled. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.regions">regions</a></code> | <code>string[]</code> | An array containing the selected regions to perform healthchecks from. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.type">type</a></code> | <code>string</code> | The type of health check to perform. Enum: 'ping' 'http' 'https'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-friendly display name for the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#name UptimeCheck#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The endpoint to perform healthchecks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#target UptimeCheck#target}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean value indicating whether the check is enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#enabled UptimeCheck#enabled}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

An array containing the selected regions to perform healthchecks from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#regions UptimeCheck#regions}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeCheck.UptimeCheckConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of health check to perform. Enum: 'ping' 'http' 'https'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/uptime_check#type UptimeCheck#type}

---



