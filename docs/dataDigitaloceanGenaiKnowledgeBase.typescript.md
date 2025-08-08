# `dataDigitaloceanGenaiKnowledgeBase` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBase <a name="DataDigitaloceanGenaiKnowledgeBase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase(scope: Construct, id: string, config?: DataDigitaloceanGenaiKnowledgeBaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig">DataDigitaloceanGenaiKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig">DataDigitaloceanGenaiKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt">resetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid">resetEmbeddingModelUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob"></a>

```typescript
public putLastIndexingJob(value: IResolvable | DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `resetAddedToAgentAt` <a name="resetAddedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt"></a>

```typescript
public resetAddedToAgentAt(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetEmbeddingModelUuid` <a name="resetEmbeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid"></a>

```typescript
public resetEmbeddingModelUuid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob"></a>

```typescript
public resetLastIndexingJob(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId"></a>

```typescript
public resetUserId(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid"></a>

```typescript
public resetUuid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput">addedToAgentAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput">embeddingModelUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt">addedToAgentAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `addedToAgentAtInput`<sup>Optional</sup> <a name="addedToAgentAtInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```typescript
public readonly addedToAgentAtInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `embeddingModelUuidInput`<sup>Optional</sup> <a name="embeddingModelUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```typescript
public readonly embeddingModelUuidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```typescript
public readonly lastIndexingJobInput: IResolvable | DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `addedToAgentAt`<sup>Required</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt"></a>

```typescript
public readonly addedToAgentAt: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid"></a>

```typescript
public readonly embeddingModelUuid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseConfig <a name="DataDigitaloceanGenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseConfig: dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt">addedToAgentAt</a></code> | <code>string</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>string</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob">lastIndexingJob</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>string</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>string</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>string[]</code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId">userId</a></code> | <code>string</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid">uuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```typescript
public readonly addedToAgentAt: string;
```

- *Type:* string

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `embeddingModelUuid`<sup>Optional</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```typescript
public readonly embeddingModelUuid: string;
```

- *Type:* string

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```typescript
public readonly lastIndexingJob: IResolvable | DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

const dataDigitaloceanGenaiKnowledgeBaseLastIndexingJob: dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>string</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#completed_datasources DataDigitaloceanGenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#data_source_uuids DataDigitaloceanGenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#phase DataDigitaloceanGenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#tokens DataDigitaloceanGenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#total_datasources DataDigitaloceanGenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get"></a>

```typescript
public get(index: number): DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>[]

---


### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanGenaiKnowledgeBase } from '@cdktf/provider-digitalocean'

new dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```typescript
public resetCompletedDatasources(): void
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```typescript
public resetDataSourceUuids(): void
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```typescript
public resetPhase(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```typescript
public resetTotalDatasources(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```typescript
public readonly completedDatasourcesInput: number;
```

- *Type:* number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```typescript
public readonly dataSourceUuidsInput: string[];
```

- *Type:* string[]

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```typescript
public readonly phaseInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```typescript
public readonly totalDatasourcesInput: number;
```

- *Type:* number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>

---



