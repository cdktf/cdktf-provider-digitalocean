# `cdn` Submodule <a name="`cdn` Submodule" id="@cdktf/provider-digitalocean.cdn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cdn <a name="Cdn" id="@cdktf/provider-digitalocean.cdn.Cdn"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn digitalocean_cdn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.cdn.Cdn.Initializer"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

new cdn.Cdn(scope: Construct, id: string, config: CdnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig">CdnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.cdn.Cdn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.cdn.CdnConfig">CdnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.cdn.Cdn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.cdn.Cdn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.cdn.Cdn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.cdn.Cdn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.cdn.Cdn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.cdn.Cdn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.cdn.Cdn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.cdn.Cdn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.cdn.Cdn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.cdn.Cdn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.cdn.Cdn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.cdn.Cdn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.cdn.Cdn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.cdn.Cdn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.Cdn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.cdn.Cdn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.cdn.Cdn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.cdn.Cdn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.Cdn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.cdn.Cdn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.cdn.Cdn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.cdn.Cdn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.cdn.Cdn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.Cdn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-digitalocean.cdn.Cdn.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-digitalocean.cdn.Cdn.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-digitalocean.cdn.Cdn.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.cdn.Cdn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-digitalocean.cdn.Cdn.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cdn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.cdn.Cdn.isConstruct"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

cdn.Cdn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.cdn.Cdn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.cdn.Cdn.isTerraformElement"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

cdn.Cdn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.cdn.Cdn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.cdn.Cdn.isTerraformResource"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

cdn.Cdn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.cdn.Cdn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

cdn.Cdn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Cdn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cdn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cdn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.cdn.Cdn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cdn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.customDomainInput">customDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.cdn.Cdn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.cdn.Cdn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.cdn.Cdn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.cdn.Cdn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.cdn.Cdn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.cdn.Cdn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.cdn.Cdn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.cdn.Cdn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.cdn.Cdn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.cdn.Cdn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.cdn.Cdn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.cdn.Cdn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.cdn.Cdn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.cdn.Cdn.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.cdn.Cdn.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.cdn.Cdn.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-digitalocean.cdn.Cdn.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.cdn.Cdn.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.cdn.Cdn.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-digitalocean.cdn.Cdn.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.Cdn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-digitalocean.cdn.Cdn.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-digitalocean.cdn.Cdn.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.Cdn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.cdn.Cdn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnConfig <a name="CdnConfig" id="@cdktf/provider-digitalocean.cdn.CdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.cdn.CdnConfig.Initializer"></a>

```typescript
import { cdn } from '@cdktf/provider-digitalocean'

const cdnConfig: cdn.CdnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.origin">origin</a></code> | <code>string</code> | fully qualified domain name (FQDN) for the origin server. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.certificateId">certificateId</a></code> | <code>string</code> | ID of a DigitalOcean managed TLS certificate for use with custom domains. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#certificate_name Cdn#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.customDomain">customDomain</a></code> | <code>string</code> | fully qualified domain name (FQDN) for custom subdomain, (requires certificate_id). |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#id Cdn#id}. |
| <code><a href="#@cdktf/provider-digitalocean.cdn.CdnConfig.property.ttl">ttl</a></code> | <code>number</code> | The amount of time the content is cached in the CDN. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

fully qualified domain name (FQDN) for the origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#origin Cdn#origin}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

ID of a DigitalOcean managed TLS certificate for use with custom domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#certificate_id Cdn#certificate_id}

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#certificate_name Cdn#certificate_name}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

fully qualified domain name (FQDN) for custom subdomain, (requires certificate_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#custom_domain Cdn#custom_domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#id Cdn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-digitalocean.cdn.CdnConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The amount of time the content is cached in the CDN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/cdn#ttl Cdn#ttl}

---



