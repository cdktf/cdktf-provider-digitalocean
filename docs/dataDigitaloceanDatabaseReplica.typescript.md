# `dataDigitaloceanDatabaseReplica` Submodule <a name="`dataDigitaloceanDatabaseReplica` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDatabaseReplica <a name="DataDigitaloceanDatabaseReplica" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica digitalocean_database_replica}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

new dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica(scope: Construct, id: string, config: DataDigitaloceanDatabaseReplicaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig">DataDigitaloceanDatabaseReplicaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig">DataDigitaloceanDatabaseReplicaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDatabaseReplica resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isConstruct"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformElement"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanDatabaseReplica resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDatabaseReplica to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDatabaseReplica that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDatabaseReplica to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateHost">privateHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateNetworkUuid">privateNetworkUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateUri">privateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.storageSizeMib">storageSizeMib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateHost`<sup>Required</sup> <a name="privateHost" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateHost"></a>

```typescript
public readonly privateHost: string;
```

- *Type:* string

---

##### `privateNetworkUuid`<sup>Required</sup> <a name="privateNetworkUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateNetworkUuid"></a>

```typescript
public readonly privateNetworkUuid: string;
```

- *Type:* string

---

##### `privateUri`<sup>Required</sup> <a name="privateUri" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.privateUri"></a>

```typescript
public readonly privateUri: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageSizeMib`<sup>Required</sup> <a name="storageSizeMib" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.storageSizeMib"></a>

```typescript
public readonly storageSizeMib: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplica.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDatabaseReplicaConfig <a name="DataDigitaloceanDatabaseReplicaConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.Initializer"></a>

```typescript
import { dataDigitaloceanDatabaseReplica } from '@cdktf/provider-digitalocean'

const dataDigitaloceanDatabaseReplicaConfig: dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#cluster_id DataDigitaloceanDatabaseReplica#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#name DataDigitaloceanDatabaseReplica#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#id DataDigitaloceanDatabaseReplica#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#tags DataDigitaloceanDatabaseReplica#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#cluster_id DataDigitaloceanDatabaseReplica#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#name DataDigitaloceanDatabaseReplica#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#id DataDigitaloceanDatabaseReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseReplica.DataDigitaloceanDatabaseReplicaConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/data-sources/database_replica#tags DataDigitaloceanDatabaseReplica#tags}.

---



