# `dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_knowledge_base_data_sources digitalocean_genai_knowledge_base_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources(scope: Construct, id: string, config: DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiKnowledgeBaseDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_knowledge_base_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput">knowledgeBaseUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources"></a>

```typescript
public readonly datasources: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `knowledgeBaseUuidInput`<sup>Optional</sup> <a name="knowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput"></a>

```typescript
public readonly knowledgeBaseUuidInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_knowledge_base_data_sources#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseDataSources#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources = { ... }
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource = { ... }
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob = { ... }
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource = { ... }
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource: dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">originalFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">storedObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originalFileName`<sup>Required</sup> <a name="originalFileName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```typescript
public readonly originalFileName: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `storedObjectKey`<sup>Required</sup> <a name="storedObjectKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```typescript
public readonly storedObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource">fileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fileUploadDataSource`<sup>Required</sup> <a name="fileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource"></a>

```typescript
public readonly fileUploadDataSource: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a>

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a>

---

##### `spacesDataSource`<sup>Required</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource"></a>

```typescript
public readonly spacesDataSource: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `webCrawlerDataSource`<sup>Required</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```typescript
public readonly webCrawlerDataSource: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath">itemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `itemPath`<sup>Required</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```typescript
public readonly itemPath: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBaseDataSources } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">crawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">embedMedia</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `crawlingOption`<sup>Required</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```typescript
public readonly crawlingOption: string;
```

- *Type:* string

---

##### `embedMedia`<sup>Required</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```typescript
public readonly embedMedia: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a>

---



