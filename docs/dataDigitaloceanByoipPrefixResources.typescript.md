# `dataDigitaloceanByoipPrefixResources` Submodule <a name="`dataDigitaloceanByoipPrefixResources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanByoipPrefixResources <a name="DataDigitaloceanByoipPrefixResources" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources digitalocean_byoip_prefix_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources(scope: Construct, id: string, config: DataDigitaloceanByoipPrefixResourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig">DataDigitaloceanByoipPrefixResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig">DataDigitaloceanByoipPrefixResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanByoipPrefixResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanByoipPrefixResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanByoipPrefixResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput">byoipPrefixUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid">byoipPrefixUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses"></a>

```typescript
public readonly addresses: DataDigitaloceanByoipPrefixResourcesAddressesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a>

---

##### `byoipPrefixUuidInput`<sup>Optional</sup> <a name="byoipPrefixUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput"></a>

```typescript
public readonly byoipPrefixUuidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `byoipPrefixUuid`<sup>Required</sup> <a name="byoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid"></a>

```typescript
public readonly byoipPrefixUuid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanByoipPrefixResourcesAddresses <a name="DataDigitaloceanByoipPrefixResourcesAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses.Initializer"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanByoipPrefixResourcesAddresses: dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses = { ... }
```


### DataDigitaloceanByoipPrefixResourcesConfig <a name="DataDigitaloceanByoipPrefixResourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.Initializer"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanByoipPrefixResourcesConfig: dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid">byoipPrefixUuid</a></code> | <code>string</code> | UUID of the BYOIP prefix to list assigned addresses from. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byoipPrefixUuid`<sup>Required</sup> <a name="byoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid"></a>

```typescript
public readonly byoipPrefixUuid: string;
```

- *Type:* string

UUID of the BYOIP prefix to list assigned addresses from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#byoip_prefix_uuid DataDigitaloceanByoipPrefixResources#byoip_prefix_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanByoipPrefixResourcesAddressesList <a name="DataDigitaloceanByoipPrefixResourcesAddressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanByoipPrefixResourcesAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanByoipPrefixResourcesAddressesOutputReference <a name="DataDigitaloceanByoipPrefixResourcesAddressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanByoipPrefixResources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt">assignedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignedAt`<sup>Required</sup> <a name="assignedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt"></a>

```typescript
public readonly assignedAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanByoipPrefixResourcesAddresses;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a>

---



