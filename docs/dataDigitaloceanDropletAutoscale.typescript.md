# `dataDigitaloceanDropletAutoscale` Submodule <a name="`dataDigitaloceanDropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDropletAutoscale <a name="DataDigitaloceanDropletAutoscale" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale(scope: Construct, id: string, config?: DataDigitaloceanDropletAutoscaleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDropletAutoscale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization">currentUtilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate">dropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config"></a>

```typescript
public readonly config: DataDigitaloceanDropletAutoscaleConfigAList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `currentUtilization`<sup>Required</sup> <a name="currentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization"></a>

```typescript
public readonly currentUtilization: DataDigitaloceanDropletAutoscaleCurrentUtilizationList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a>

---

##### `dropletTemplate`<sup>Required</sup> <a name="dropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate"></a>

```typescript
public readonly dropletTemplate: DataDigitaloceanDropletAutoscaleDropletTemplateList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletAutoscaleConfig <a name="DataDigitaloceanDropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDropletAutoscaleConfig: dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id">id</a></code> | <code>string</code> | ID of the Droplet autoscale pool. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name">name</a></code> | <code>string</code> | Name of the Droplet autoscale pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/droplet_autoscale#id DataDigitaloceanDropletAutoscale#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/droplet_autoscale#name DataDigitaloceanDropletAutoscale#name}

---

### DataDigitaloceanDropletAutoscaleConfigA <a name="DataDigitaloceanDropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDropletAutoscaleConfigA: dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA = { ... }
```


### DataDigitaloceanDropletAutoscaleCurrentUtilization <a name="DataDigitaloceanDropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDropletAutoscaleCurrentUtilization: dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization = { ... }
```


### DataDigitaloceanDropletAutoscaleDropletTemplate <a name="DataDigitaloceanDropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDropletAutoscaleDropletTemplate: dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDropletAutoscaleConfigAList <a name="DataDigitaloceanDropletAutoscaleConfigAList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get"></a>

```typescript
public get(index: number): DataDigitaloceanDropletAutoscaleConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleConfigAOutputReference <a name="DataDigitaloceanDropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes">cooldownMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">targetMemoryUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances">targetNumberInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownMinutes`<sup>Required</sup> <a name="cooldownMinutes" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```typescript
public readonly cooldownMinutes: number;
```

- *Type:* number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `targetCpuUtilization`<sup>Required</sup> <a name="targetCpuUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

---

##### `targetMemoryUtilization`<sup>Required</sup> <a name="targetMemoryUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```typescript
public readonly targetMemoryUtilization: number;
```

- *Type:* number

---

##### `targetNumberInstances`<sup>Required</sup> <a name="targetNumberInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```typescript
public readonly targetNumberInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanDropletAutoscaleConfigA;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a>

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationList <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get"></a>

```typescript
public get(index: number): DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanDropletAutoscaleCurrentUtilization;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a>

---


### DataDigitaloceanDropletAutoscaleDropletTemplateList <a name="DataDigitaloceanDropletAutoscaleDropletTemplateList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get"></a>

```typescript
public get(index: number): DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference <a name="DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanDropletAutoscale } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6">ipv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">withDropletAgent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

##### `withDropletAgent`<sup>Required</sup> <a name="withDropletAgent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```typescript
public readonly withDropletAgent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanDropletAutoscaleDropletTemplate;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a>

---



