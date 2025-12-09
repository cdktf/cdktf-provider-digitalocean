# `dataDigitaloceanDatabaseMetricsCredentials` Submodule <a name="`dataDigitaloceanDatabaseMetricsCredentials` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDatabaseMetricsCredentials <a name="DataDigitaloceanDatabaseMetricsCredentials" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/database_metrics_credentials digitalocean_database_metrics_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials(scope: Construct, id: string, config?: DataDigitaloceanDatabaseMetricsCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig">DataDigitaloceanDatabaseMetricsCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig">DataDigitaloceanDatabaseMetricsCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDatabaseMetricsCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isConstruct"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformElement"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanDatabaseMetricsCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDatabaseMetricsCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDatabaseMetricsCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/database_metrics_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDatabaseMetricsCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDatabaseMetricsCredentialsConfig <a name="DataDigitaloceanDatabaseMetricsCredentialsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.Initializer"></a>

```typescript
import { dataDigitaloceanDatabaseMetricsCredentials } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDatabaseMetricsCredentialsConfig: dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/database_metrics_credentials#id DataDigitaloceanDatabaseMetricsCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseMetricsCredentials.DataDigitaloceanDatabaseMetricsCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/database_metrics_credentials#id DataDigitaloceanDatabaseMetricsCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



