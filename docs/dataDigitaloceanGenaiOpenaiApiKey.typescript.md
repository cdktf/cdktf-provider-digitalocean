# `dataDigitaloceanGenaiOpenaiApiKey` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKey <a name="DataDigitaloceanGenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey(scope: Construct, id: string, config: DataDigitaloceanGenaiOpenaiApiKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig">DataDigitaloceanGenaiOpenaiApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig">DataDigitaloceanGenaiOpenaiApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models">models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models"></a>

```typescript
public readonly models: DataDigitaloceanGenaiOpenaiApiKeyModelsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeyConfig <a name="DataDigitaloceanGenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeyConfig: dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid">uuid</a></code> | <code>string</code> | OpenAI API Key Uuid. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

OpenAI API Key Uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_openai_api_key#uuid DataDigitaloceanGenaiOpenaiApiKey#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiOpenaiApiKeyModels <a name="DataDigitaloceanGenaiOpenaiApiKeyModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeyModels: dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeyModelsAgreement: dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement = { ... }
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiOpenaiApiKeyModelsVersions: dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName">inferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion">inferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational">isFoundational</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid">parentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete">uploadComplete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases">usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement"></a>

```typescript
public readonly agreement: DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `inferenceName`<sup>Required</sup> <a name="inferenceName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName"></a>

```typescript
public readonly inferenceName: string;
```

- *Type:* string

---

##### `inferenceVersion`<sup>Required</sup> <a name="inferenceVersion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion"></a>

```typescript
public readonly inferenceVersion: string;
```

- *Type:* string

---

##### `isFoundational`<sup>Required</sup> <a name="isFoundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational"></a>

```typescript
public readonly isFoundational: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentUuid`<sup>Required</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid"></a>

```typescript
public readonly parentUuid: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uploadComplete`<sup>Required</sup> <a name="uploadComplete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete"></a>

```typescript
public readonly uploadComplete: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases"></a>

```typescript
public readonly usecases: string[];
```

- *Type:* string[]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions"></a>

```typescript
public readonly versions: DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeyModels;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiOpenaiApiKey } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major">major</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor">minor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch">patch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major"></a>

```typescript
public readonly major: number;
```

- *Type:* number

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor"></a>

```typescript
public readonly minor: number;
```

- *Type:* number

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch"></a>

```typescript
public readonly patch: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiOpenaiApiKeyModelsVersions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a>

---



