# `dataDigitaloceanGenaiAgentVersions` Submodule <a name="`dataDigitaloceanGenaiAgentVersions` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiAgentVersions <a name="DataDigitaloceanGenaiAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions digitalocean_genai_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions(scope: Construct, id: string, config: DataDigitaloceanGenaiAgentVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort">resetSort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataDigitaloceanGenaiAgentVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---

##### `putSort` <a name="putSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort"></a>

```typescript
public putSort(value: IResolvable | DataDigitaloceanGenaiAgentVersionsSort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort"></a>

```typescript
public resetSort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiAgentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions">agentVersions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput">sortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentVersions`<sup>Required</sup> <a name="agentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions"></a>

```typescript
public readonly agentVersions: DataDigitaloceanGenaiAgentVersionsAgentVersionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter"></a>

```typescript
public readonly filter: DataDigitaloceanGenaiAgentVersionsFilterList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort"></a>

```typescript
public readonly sort: DataDigitaloceanGenaiAgentVersionsSortList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataDigitaloceanGenaiAgentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput"></a>

```typescript
public readonly sortInput: IResolvable | DataDigitaloceanGenaiAgentVersionsSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsAgentVersions: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions = { ... }
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents = { ... }
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions = { ... }
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails = { ... }
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases = { ... }
```


### DataDigitaloceanGenaiAgentVersionsConfig <a name="DataDigitaloceanGenaiAgentVersionsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsConfig: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId">agentId</a></code> | <code>string</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort">sort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataDigitaloceanGenaiAgentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort"></a>

```typescript
public readonly sort: IResolvable | DataDigitaloceanGenaiAgentVersionsSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

### DataDigitaloceanGenaiAgentVersionsFilter <a name="DataDigitaloceanGenaiAgentVersionsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsFilter: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy">matchBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}.

---

##### `matchBy`<sup>Optional</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy"></a>

```typescript
public readonly matchBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}.

---

### DataDigitaloceanGenaiAgentVersionsSort <a name="DataDigitaloceanGenaiAgentVersionsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiAgentVersionsSort: dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid">childAgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase">ifCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName">routeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `childAgentUuid`<sup>Required</sup> <a name="childAgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid"></a>

```typescript
public readonly childAgentUuid: string;
```

- *Type:* string

---

##### `ifCase`<sup>Required</sup> <a name="ifCase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase"></a>

```typescript
public readonly ifCase: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName">faasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace">faasNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `faasName`<sup>Required</sup> <a name="faasName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName"></a>

```typescript
public readonly faasName: string;
```

- *Type:* string

---

##### `faasNamespace`<sup>Required</sup> <a name="faasNamespace" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace"></a>

```typescript
public readonly faasNamespace: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid">agentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents">attachedChildAgents</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions">attachedFunctions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails">attachedGuardrails</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases">attachedKnowledgeBases</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback">canRollback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail">createdByEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied">currentlyApplied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k">k</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens">maxTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations">provideCitations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod">retrievalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction">triggerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash">versionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentUuid`<sup>Required</sup> <a name="agentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid"></a>

```typescript
public readonly agentUuid: string;
```

- *Type:* string

---

##### `attachedChildAgents`<sup>Required</sup> <a name="attachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents"></a>

```typescript
public readonly attachedChildAgents: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a>

---

##### `attachedFunctions`<sup>Required</sup> <a name="attachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions"></a>

```typescript
public readonly attachedFunctions: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a>

---

##### `attachedGuardrails`<sup>Required</sup> <a name="attachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails"></a>

```typescript
public readonly attachedGuardrails: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a>

---

##### `attachedKnowledgeBases`<sup>Required</sup> <a name="attachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases"></a>

```typescript
public readonly attachedKnowledgeBases: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a>

---

##### `canRollback`<sup>Required</sup> <a name="canRollback" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback"></a>

```typescript
public readonly canRollback: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdByEmail`<sup>Required</sup> <a name="createdByEmail" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail"></a>

```typescript
public readonly createdByEmail: string;
```

- *Type:* string

---

##### `currentlyApplied`<sup>Required</sup> <a name="currentlyApplied" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied"></a>

```typescript
public readonly currentlyApplied: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `k`<sup>Required</sup> <a name="k" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k"></a>

```typescript
public readonly k: number;
```

- *Type:* number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens"></a>

```typescript
public readonly maxTokens: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provideCitations`<sup>Required</sup> <a name="provideCitations" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations"></a>

```typescript
public readonly provideCitations: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retrievalMethod`<sup>Required</sup> <a name="retrievalMethod" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod"></a>

```typescript
public readonly retrievalMethod: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `triggerAction`<sup>Required</sup> <a name="triggerAction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction"></a>

```typescript
public readonly triggerAction: string;
```

- *Type:* string

---

##### `versionHash`<sup>Required</sup> <a name="versionHash" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash"></a>

```typescript
public readonly versionHash: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanGenaiAgentVersionsAgentVersions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a>

---


### DataDigitaloceanGenaiAgentVersionsFilterList <a name="DataDigitaloceanGenaiAgentVersionsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiAgentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---


### DataDigitaloceanGenaiAgentVersionsFilterOutputReference <a name="DataDigitaloceanGenaiAgentVersionsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy">resetMatchBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetMatchBy` <a name="resetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy"></a>

```typescript
public resetMatchBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput">matchByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy">matchBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchByInput`<sup>Optional</sup> <a name="matchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput"></a>

```typescript
public readonly matchByInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchBy`<sup>Required</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy"></a>

```typescript
public readonly matchBy: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiAgentVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>

---


### DataDigitaloceanGenaiAgentVersionsSortList <a name="DataDigitaloceanGenaiAgentVersionsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiAgentVersionsSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiAgentVersionsSort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---


### DataDigitaloceanGenaiAgentVersionsSortOutputReference <a name="DataDigitaloceanGenaiAgentVersionsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiAgentVersions } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection">resetDirection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiAgentVersionsSort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>

---



