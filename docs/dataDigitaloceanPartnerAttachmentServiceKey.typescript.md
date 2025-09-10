# `dataDigitaloceanPartnerAttachmentServiceKey` Submodule <a name="`dataDigitaloceanPartnerAttachmentServiceKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachmentServiceKey <a name="DataDigitaloceanPartnerAttachmentServiceKey" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment_service_key digitalocean_partner_attachment_service_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey(scope: Construct, id: string, config: DataDigitaloceanPartnerAttachmentServiceKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig">DataDigitaloceanPartnerAttachmentServiceKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig">DataDigitaloceanPartnerAttachmentServiceKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanPartnerAttachmentServiceKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanPartnerAttachmentServiceKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment_service_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachmentServiceKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput">attachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `attachmentIdInput`<sup>Optional</sup> <a name="attachmentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput"></a>

```typescript
public readonly attachmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentServiceKeyConfig <a name="DataDigitaloceanPartnerAttachmentServiceKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.Initializer"></a>

```typescript
import { dataDigitaloceanPartnerAttachmentServiceKey } from '@cdktf/provider-digitalocean'

const dataDigitaloceanPartnerAttachmentServiceKeyConfig: dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId">attachmentId</a></code> | <code>string</code> | The ID of the Partner Attachment for which to retrieve the service key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

The ID of the Partner Attachment for which to retrieve the service key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment_service_key#attachment_id DataDigitaloceanPartnerAttachmentServiceKey#attachment_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



