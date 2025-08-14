# `partnerAttachment` Submodule <a name="`partnerAttachment` Submodule" id="@cdktf/provider-digitalocean.partnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PartnerAttachment <a name="PartnerAttachment" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

new partnerAttachment.PartnerAttachment(scope: Construct, id: string, config: PartnerAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig">PartnerAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig">PartnerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid">resetParentUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone">resetRedundancyZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgp` <a name="putBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp"></a>

```typescript
public putBgp(value: PartnerAttachmentBgp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: PartnerAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `resetBgp` <a name="resetBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp"></a>

```typescript
public resetBgp(): void
```

##### `resetParentUuid` <a name="resetParentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid"></a>

```typescript
public resetParentUuid(): void
```

##### `resetRedundancyZone` <a name="resetRedundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone"></a>

```typescript
public resetRedundancyZone(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

partnerAttachment.PartnerAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

partnerAttachment.PartnerAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

partnerAttachment.PartnerAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

partnerAttachment.PartnerAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PartnerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children">children</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput">bgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput">connectionBandwidthInMbpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput">naasProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput">parentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput">redundancyZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput">vpcIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider">naasProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid">parentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone">redundancyZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds">vpcIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp"></a>

```typescript
public readonly bgp: PartnerAttachmentBgpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a>

---

##### `children`<sup>Required</sup> <a name="children" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children"></a>

```typescript
public readonly children: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: PartnerAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a>

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput"></a>

```typescript
public readonly bgpInput: PartnerAttachmentBgp;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `connectionBandwidthInMbpsInput`<sup>Optional</sup> <a name="connectionBandwidthInMbpsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput"></a>

```typescript
public readonly connectionBandwidthInMbpsInput: number;
```

- *Type:* number

---

##### `naasProviderInput`<sup>Optional</sup> <a name="naasProviderInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput"></a>

```typescript
public readonly naasProviderInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentUuidInput`<sup>Optional</sup> <a name="parentUuidInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput"></a>

```typescript
public readonly parentUuidInput: string;
```

- *Type:* string

---

##### `redundancyZoneInput`<sup>Optional</sup> <a name="redundancyZoneInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput"></a>

```typescript
public readonly redundancyZoneInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PartnerAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `vpcIdsInput`<sup>Optional</sup> <a name="vpcIdsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput"></a>

```typescript
public readonly vpcIdsInput: string[];
```

- *Type:* string[]

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps"></a>

```typescript
public readonly connectionBandwidthInMbps: number;
```

- *Type:* number

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider"></a>

```typescript
public readonly naasProvider: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentUuid`<sup>Required</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

---

##### `redundancyZone`<sup>Required</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone"></a>

```typescript
public readonly redundancyZone: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds"></a>

```typescript
public readonly vpcIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PartnerAttachmentBgp <a name="PartnerAttachmentBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

const partnerAttachmentBgp: partnerAttachment.PartnerAttachmentBgp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey">authKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp">localRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn">peerRouterAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp">peerRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}. |

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}.

---

##### `localRouterIp`<sup>Optional</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp"></a>

```typescript
public readonly localRouterIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}.

---

##### `peerRouterAsn`<sup>Optional</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn"></a>

```typescript
public readonly peerRouterAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}.

---

##### `peerRouterIp`<sup>Optional</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp"></a>

```typescript
public readonly peerRouterIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}.

---

### PartnerAttachmentConfig <a name="PartnerAttachmentConfig" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

const partnerAttachmentConfig: partnerAttachment.PartnerAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>number</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider">naasProvider</a></code> | <code>string</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name">name</a></code> | <code>string</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region">region</a></code> | <code>string</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds">vpcIds</a></code> | <code>string[]</code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid">parentUuid</a></code> | <code>string</code> | The UUID of the Parent Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone">redundancyZone</a></code> | <code>string</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps"></a>

```typescript
public readonly connectionBandwidthInMbps: number;
```

- *Type:* number

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider"></a>

```typescript
public readonly naasProvider: string;
```

- *Type:* string

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds"></a>

```typescript
public readonly vpcIds: string[];
```

- *Type:* string[]

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp"></a>

```typescript
public readonly bgp: PartnerAttachmentBgp;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `parentUuid`<sup>Optional</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

The UUID of the Parent Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#parent_uuid PartnerAttachment#parent_uuid}

---

##### `redundancyZone`<sup>Optional</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone"></a>

```typescript
public readonly redundancyZone: string;
```

- *Type:* string

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PartnerAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

### PartnerAttachmentTimeouts <a name="PartnerAttachmentTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

const partnerAttachmentTimeouts: partnerAttachment.PartnerAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#create PartnerAttachment#create}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#create PartnerAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PartnerAttachmentBgpOutputReference <a name="PartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

new partnerAttachment.PartnerAttachmentBgpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp">resetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn">resetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp">resetPeerRouterIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey"></a>

```typescript
public resetAuthKey(): void
```

##### `resetLocalRouterIp` <a name="resetLocalRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```typescript
public resetLocalRouterIp(): void
```

##### `resetPeerRouterAsn` <a name="resetPeerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```typescript
public resetPeerRouterAsn(): void
```

##### `resetPeerRouterIp` <a name="resetPeerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```typescript
public resetPeerRouterIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput">localRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">peerRouterAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput">peerRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey">authKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp">localRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn">peerRouterAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp">peerRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput"></a>

```typescript
public readonly authKeyInput: string;
```

- *Type:* string

---

##### `localRouterIpInput`<sup>Optional</sup> <a name="localRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```typescript
public readonly localRouterIpInput: string;
```

- *Type:* string

---

##### `peerRouterAsnInput`<sup>Optional</sup> <a name="peerRouterAsnInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```typescript
public readonly peerRouterAsnInput: number;
```

- *Type:* number

---

##### `peerRouterIpInput`<sup>Optional</sup> <a name="peerRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```typescript
public readonly peerRouterIpInput: string;
```

- *Type:* string

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

---

##### `localRouterIp`<sup>Required</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```typescript
public readonly localRouterIp: string;
```

- *Type:* string

---

##### `peerRouterAsn`<sup>Required</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```typescript
public readonly peerRouterAsn: number;
```

- *Type:* number

---

##### `peerRouterIp`<sup>Required</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```typescript
public readonly peerRouterIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PartnerAttachmentBgp;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---


### PartnerAttachmentTimeoutsOutputReference <a name="PartnerAttachmentTimeoutsOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { partnerAttachment } from '@cdktf/provider-digitalocean'

new partnerAttachment.PartnerAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PartnerAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---



