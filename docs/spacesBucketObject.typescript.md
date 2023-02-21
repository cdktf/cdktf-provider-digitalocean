# `spacesBucketObject` Submodule <a name="`spacesBucketObject` Submodule" id="@cdktf/provider-digitalocean.spacesBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketObject <a name="SpacesBucketObject" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object digitalocean_spaces_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer"></a>

```typescript
import { spacesBucketObject } from '@cdktf/provider-digitalocean'

new spacesBucketObject.SpacesBucketObject(scope: Construct, id: string, config: SpacesBucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig">SpacesBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig">SpacesBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct"></a>

```typescript
import { spacesBucketObject } from '@cdktf/provider-digitalocean'

spacesBucketObject.SpacesBucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement"></a>

```typescript
import { spacesBucketObject } from '@cdktf/provider-digitalocean'

spacesBucketObject.SpacesBucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource"></a>

```typescript
import { spacesBucketObject } from '@cdktf/provider-digitalocean'

spacesBucketObject.SpacesBucketObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketObjectConfig <a name="SpacesBucketObjectConfig" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.Initializer"></a>

```typescript
import { spacesBucketObject } from '@cdktf/provider-digitalocean'

const spacesBucketObjectConfig: spacesBucketObject.SpacesBucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#bucket SpacesBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#key SpacesBucketObject#key}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#region SpacesBucketObject#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#acl SpacesBucketObject#acl}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content SpacesBucketObject#content}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentBase64">contentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_language SpacesBucketObject#content_language}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_type SpacesBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#etag SpacesBucketObject#etag}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#id SpacesBucketObject#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#metadata SpacesBucketObject#metadata}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#source SpacesBucketObject#source}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#bucket SpacesBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#key SpacesBucketObject#key}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#region SpacesBucketObject#region}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#acl SpacesBucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content SpacesBucketObject#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_language SpacesBucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#content_type SpacesBucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#etag SpacesBucketObject#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#id SpacesBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#metadata SpacesBucketObject#metadata}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#source SpacesBucketObject#source}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}.

---



