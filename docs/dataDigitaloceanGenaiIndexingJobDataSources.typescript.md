# `dataDigitaloceanGenaiIndexingJobDataSources` Submodule <a name="`dataDigitaloceanGenaiIndexingJobDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJobDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources digitalocean_genai_indexing_job_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources(scope: Construct, id: string, config: DataDigitaloceanGenaiIndexingJobDataSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig">DataDigitaloceanGenaiIndexingJobDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig">DataDigitaloceanGenaiIndexingJobDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJobDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiIndexingJobDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJobDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources">indexedDataSources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput">indexingJobUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid">indexingJobUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `indexedDataSources`<sup>Required</sup> <a name="indexedDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources"></a>

```typescript
public readonly indexedDataSources: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexingJobUuidInput`<sup>Optional</sup> <a name="indexingJobUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput"></a>

```typescript
public readonly indexingJobUuidInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexingJobUuid`<sup>Required</sup> <a name="indexingJobUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid"></a>

```typescript
public readonly indexingJobUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesConfig <a name="DataDigitaloceanGenaiIndexingJobDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiIndexingJobDataSourcesConfig: dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid">indexingJobUuid</a></code> | <code>string</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexingJobUuid`<sup>Required</sup> <a name="indexingJobUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid"></a>

```typescript
public readonly indexingJobUuid: string;
```

- *Type:* string

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#indexing_job_uuid DataDigitaloceanGenaiIndexingJobDataSources#indexing_job_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources: dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJobDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt">completedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid">dataSourceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails">errorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg">errorMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount">failedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount">indexedFileCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount">indexedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount">removedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount">skippedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes">totalBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed">totalBytesIndexed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount">totalFileCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedAt`<sup>Required</sup> <a name="completedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt"></a>

```typescript
public readonly completedAt: string;
```

- *Type:* string

---

##### `dataSourceUuid`<sup>Required</sup> <a name="dataSourceUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid"></a>

```typescript
public readonly dataSourceUuid: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails"></a>

```typescript
public readonly errorDetails: string;
```

- *Type:* string

---

##### `errorMsg`<sup>Required</sup> <a name="errorMsg" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg"></a>

```typescript
public readonly errorMsg: string;
```

- *Type:* string

---

##### `failedItemCount`<sup>Required</sup> <a name="failedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount"></a>

```typescript
public readonly failedItemCount: string;
```

- *Type:* string

---

##### `indexedFileCount`<sup>Required</sup> <a name="indexedFileCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount"></a>

```typescript
public readonly indexedFileCount: string;
```

- *Type:* string

---

##### `indexedItemCount`<sup>Required</sup> <a name="indexedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount"></a>

```typescript
public readonly indexedItemCount: string;
```

- *Type:* string

---

##### `removedItemCount`<sup>Required</sup> <a name="removedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount"></a>

```typescript
public readonly removedItemCount: string;
```

- *Type:* string

---

##### `skippedItemCount`<sup>Required</sup> <a name="skippedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount"></a>

```typescript
public readonly skippedItemCount: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `totalBytes`<sup>Required</sup> <a name="totalBytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes"></a>

```typescript
public readonly totalBytes: string;
```

- *Type:* string

---

##### `totalBytesIndexed`<sup>Required</sup> <a name="totalBytesIndexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed"></a>

```typescript
public readonly totalBytesIndexed: string;
```

- *Type:* string

---

##### `totalFileCount`<sup>Required</sup> <a name="totalFileCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount"></a>

```typescript
public readonly totalFileCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a>

---



