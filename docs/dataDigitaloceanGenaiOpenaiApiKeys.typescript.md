# `dataDigitaloceanGenaiOpenaiApiKeys` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKeys` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys digitalocean_genai_openai_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys(scope: Construct, id: string, config?: DataDigitaloceanGenaiOpenaiApiKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort">resetSort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]

---

##### `putSort` <a name="putSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort"></a>

```typescript
public putSort(value: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort"></a>

```typescript
public resetSort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiOpenaiApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys">openaiApiKeys</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput">sortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter"></a>

```typescript
public readonly filter: DataDigitaloceanGenaiOpenaiApiKeysFilterList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a>

---

##### `openaiApiKeys`<sup>Required</sup> <a name="openaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys"></a>

```typescript
public readonly openaiApiKeys: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort"></a>

```typescript
public readonly sort: DataDigitaloceanGenaiOpenaiApiKeysSortList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput"></a>

```typescript
public readonly sortInput: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeysConfig <a name="DataDigitaloceanGenaiOpenaiApiKeysConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysConfig: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort">sort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#filter DataDigitaloceanGenaiOpenaiApiKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort"></a>

```typescript
public readonly sort: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#sort DataDigitaloceanGenaiOpenaiApiKeys#sort}

---

### DataDigitaloceanGenaiOpenaiApiKeysFilter <a name="DataDigitaloceanGenaiOpenaiApiKeysFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysFilter: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy">matchBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}.

---

##### `matchBy`<sup>Optional</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy"></a>

```typescript
public readonly matchBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}.

---

### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeysSort <a name="DataDigitaloceanGenaiOpenaiApiKeysSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeysSort: dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeysFilterList <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>[]

---


### DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy">resetMatchBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetMatchBy` <a name="resetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy"></a>

```typescript
public resetMatchBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput">matchByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy">matchBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchByInput`<sup>Optional</sup> <a name="matchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput"></a>

```typescript
public readonly matchByInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchBy`<sup>Required</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy"></a>

```typescript
public readonly matchBy: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName">inferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion">inferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational">isFoundational</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid">parentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete">uploadComplete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases">usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement"></a>

```typescript
public readonly agreement: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `inferenceName`<sup>Required</sup> <a name="inferenceName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName"></a>

```typescript
public readonly inferenceName: string;
```

- *Type:* string

---

##### `inferenceVersion`<sup>Required</sup> <a name="inferenceVersion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion"></a>

```typescript
public readonly inferenceVersion: string;
```

- *Type:* string

---

##### `isFoundational`<sup>Required</sup> <a name="isFoundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational"></a>

```typescript
public readonly isFoundational: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentUuid`<sup>Required</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uploadComplete`<sup>Required</sup> <a name="uploadComplete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete"></a>

```typescript
public readonly uploadComplete: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases"></a>

```typescript
public readonly usecases: string[];
```

- *Type:* string[]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions"></a>

```typescript
public readonly versions: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major">major</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor">minor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch">patch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major"></a>

```typescript
public readonly major: number;
```

- *Type:* number

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor"></a>

```typescript
public readonly minor: number;
```

- *Type:* number

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch"></a>

```typescript
public readonly patch: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models">models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models"></a>

```typescript
public readonly models: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysSortList <a name="DataDigitaloceanGenaiOpenaiApiKeysSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>[]

---


### DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKeys } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection">resetDirection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>

---



