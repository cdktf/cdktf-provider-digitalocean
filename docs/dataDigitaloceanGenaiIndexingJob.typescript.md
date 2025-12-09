# `dataDigitaloceanGenaiIndexingJob` Submodule <a name="`dataDigitaloceanGenaiIndexingJob` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJob <a name="DataDigitaloceanGenaiIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job digitalocean_genai_indexing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob(scope: Construct, id: string, config: DataDigitaloceanGenaiIndexingJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiIndexingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed">totalItemsFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed">totalItemsIndexed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped">totalItemsSkipped</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `totalItemsFailed`<sup>Required</sup> <a name="totalItemsFailed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed"></a>

```typescript
public readonly totalItemsFailed: string;
```

- *Type:* string

---

##### `totalItemsIndexed`<sup>Required</sup> <a name="totalItemsIndexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed"></a>

```typescript
public readonly totalItemsIndexed: string;
```

- *Type:* string

---

##### `totalItemsSkipped`<sup>Required</sup> <a name="totalItemsSkipped" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped"></a>

```typescript
public readonly totalItemsSkipped: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobConfig <a name="DataDigitaloceanGenaiIndexingJobConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiIndexingJob } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiIndexingJobConfig: dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid">uuid</a></code> | <code>string</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#uuid DataDigitaloceanGenaiIndexingJob#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



