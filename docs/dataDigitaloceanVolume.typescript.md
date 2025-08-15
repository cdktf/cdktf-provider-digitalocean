# `dataDigitaloceanVolume` Submodule <a name="`dataDigitaloceanVolume` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanVolume <a name="DataDigitaloceanVolume" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume digitalocean_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVolume.DataDigitaloceanVolume(scope: Construct, id: string, config: DataDigitaloceanVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig">DataDigitaloceanVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig">DataDigitaloceanVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isConstruct"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

dataDigitaloceanVolume.DataDigitaloceanVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformElement"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.filesystemLabel">filesystemLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.filesystemType">filesystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

---

##### `filesystemLabel`<sup>Required</sup> <a name="filesystemLabel" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.filesystemLabel"></a>

```typescript
public readonly filesystemLabel: string;
```

- *Type:* string

---

##### `filesystemType`<sup>Required</sup> <a name="filesystemType" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.filesystemType"></a>

```typescript
public readonly filesystemType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanVolumeConfig <a name="DataDigitaloceanVolumeConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.Initializer"></a>

```typescript
import { dataDigitaloceanVolume } from '@cdktf/provider-digitalocean'

const dataDigitaloceanVolumeConfig: dataDigitaloceanVolume.DataDigitaloceanVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.name">name</a></code> | <code>string</code> | name of the volume. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.description">description</a></code> | <code>string</code> | volume description. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#id DataDigitaloceanVolume#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.region">region</a></code> | <code>string</code> | the region that the volume is provisioned in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#name DataDigitaloceanVolume#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

volume description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#description DataDigitaloceanVolume#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#id DataDigitaloceanVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVolume.DataDigitaloceanVolumeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

the region that the volume is provisioned in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/volume#region DataDigitaloceanVolume#region}

---



