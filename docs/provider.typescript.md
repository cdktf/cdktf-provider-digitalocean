# `provider`

Refer to the Terraform Registory for docs: [`digitalocean`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-digitalocean.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitaloceanProvider <a name="DigitaloceanProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs digitalocean}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-digitalocean'

new provider.DigitaloceanProvider(scope: Construct, id: string, config?: DigitaloceanProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig">DigitaloceanProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig">DigitaloceanProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint">resetApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax">resetHttpRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax">resetHttpRetryWaitMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin">resetHttpRetryWaitMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond">resetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId">resetSpacesAccessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint">resetSpacesEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey">resetSpacesSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiEndpoint` <a name="resetApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint"></a>

```typescript
public resetApiEndpoint(): void
```

##### `resetHttpRetryMax` <a name="resetHttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax"></a>

```typescript
public resetHttpRetryMax(): void
```

##### `resetHttpRetryWaitMax` <a name="resetHttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax"></a>

```typescript
public resetHttpRetryWaitMax(): void
```

##### `resetHttpRetryWaitMin` <a name="resetHttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin"></a>

```typescript
public resetHttpRetryWaitMin(): void
```

##### `resetRequestsPerSecond` <a name="resetRequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond"></a>

```typescript
public resetRequestsPerSecond(): void
```

##### `resetSpacesAccessId` <a name="resetSpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId"></a>

```typescript
public resetSpacesAccessId(): void
```

##### `resetSpacesEndpoint` <a name="resetSpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint"></a>

```typescript
public resetSpacesEndpoint(): void
```

##### `resetSpacesSecretKey` <a name="resetSpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey"></a>

```typescript
public resetSpacesSecretKey(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-digitalocean'

provider.DigitaloceanProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-digitalocean'

provider.DigitaloceanProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-digitalocean'

provider.DigitaloceanProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput">apiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput">httpRetryMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput">httpRetryWaitMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput">httpRetryWaitMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput">requestsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput">spacesAccessIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput">spacesEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput">spacesSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax">httpRetryMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax">httpRetryWaitMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin">httpRetryWaitMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond">requestsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId">spacesAccessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint">spacesEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey">spacesSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiEndpointInput`<sup>Optional</sup> <a name="apiEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput"></a>

```typescript
public readonly apiEndpointInput: string;
```

- *Type:* string

---

##### `httpRetryMaxInput`<sup>Optional</sup> <a name="httpRetryMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput"></a>

```typescript
public readonly httpRetryMaxInput: number;
```

- *Type:* number

---

##### `httpRetryWaitMaxInput`<sup>Optional</sup> <a name="httpRetryWaitMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput"></a>

```typescript
public readonly httpRetryWaitMaxInput: number;
```

- *Type:* number

---

##### `httpRetryWaitMinInput`<sup>Optional</sup> <a name="httpRetryWaitMinInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput"></a>

```typescript
public readonly httpRetryWaitMinInput: number;
```

- *Type:* number

---

##### `requestsPerSecondInput`<sup>Optional</sup> <a name="requestsPerSecondInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput"></a>

```typescript
public readonly requestsPerSecondInput: number;
```

- *Type:* number

---

##### `spacesAccessIdInput`<sup>Optional</sup> <a name="spacesAccessIdInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput"></a>

```typescript
public readonly spacesAccessIdInput: string;
```

- *Type:* string

---

##### `spacesEndpointInput`<sup>Optional</sup> <a name="spacesEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput"></a>

```typescript
public readonly spacesEndpointInput: string;
```

- *Type:* string

---

##### `spacesSecretKeyInput`<sup>Optional</sup> <a name="spacesSecretKeyInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput"></a>

```typescript
public readonly spacesSecretKeyInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `apiEndpoint`<sup>Optional</sup> <a name="apiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `httpRetryMax`<sup>Optional</sup> <a name="httpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax"></a>

```typescript
public readonly httpRetryMax: number;
```

- *Type:* number

---

##### `httpRetryWaitMax`<sup>Optional</sup> <a name="httpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax"></a>

```typescript
public readonly httpRetryWaitMax: number;
```

- *Type:* number

---

##### `httpRetryWaitMin`<sup>Optional</sup> <a name="httpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin"></a>

```typescript
public readonly httpRetryWaitMin: number;
```

- *Type:* number

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: number;
```

- *Type:* number

---

##### `spacesAccessId`<sup>Optional</sup> <a name="spacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId"></a>

```typescript
public readonly spacesAccessId: string;
```

- *Type:* string

---

##### `spacesEndpoint`<sup>Optional</sup> <a name="spacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint"></a>

```typescript
public readonly spacesEndpoint: string;
```

- *Type:* string

---

##### `spacesSecretKey`<sup>Optional</sup> <a name="spacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey"></a>

```typescript
public readonly spacesSecretKey: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitaloceanProviderConfig <a name="DigitaloceanProviderConfig" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-digitalocean'

const digitaloceanProviderConfig: provider.DigitaloceanProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax">httpRetryMax</a></code> | <code>number</code> | The maximum number of retries on a failed API request. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax">httpRetryWaitMax</a></code> | <code>number</code> | The maximum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin">httpRetryWaitMin</a></code> | <code>number</code> | The minimum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond">requestsPerSecond</a></code> | <code>number</code> | The rate of requests per second to limit the HTTP client. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId">spacesAccessId</a></code> | <code>string</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint">spacesEndpoint</a></code> | <code>string</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey">spacesSecretKey</a></code> | <code>string</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token">token</a></code> | <code>string</code> | The token key for API operations. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#alias DigitaloceanProvider#alias}

---

##### `apiEndpoint`<sup>Optional</sup> <a name="apiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `httpRetryMax`<sup>Optional</sup> <a name="httpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax"></a>

```typescript
public readonly httpRetryMax: number;
```

- *Type:* number

The maximum number of retries on a failed API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#http_retry_max DigitaloceanProvider#http_retry_max}

---

##### `httpRetryWaitMax`<sup>Optional</sup> <a name="httpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax"></a>

```typescript
public readonly httpRetryWaitMax: number;
```

- *Type:* number

The maximum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#http_retry_wait_max DigitaloceanProvider#http_retry_wait_max}

---

##### `httpRetryWaitMin`<sup>Optional</sup> <a name="httpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin"></a>

```typescript
public readonly httpRetryWaitMin: number;
```

- *Type:* number

The minimum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#http_retry_wait_min DigitaloceanProvider#http_retry_wait_min}

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: number;
```

- *Type:* number

The rate of requests per second to limit the HTTP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#requests_per_second DigitaloceanProvider#requests_per_second}

---

##### `spacesAccessId`<sup>Optional</sup> <a name="spacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId"></a>

```typescript
public readonly spacesAccessId: string;
```

- *Type:* string

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `spacesEndpoint`<sup>Optional</sup> <a name="spacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint"></a>

```typescript
public readonly spacesEndpoint: string;
```

- *Type:* string

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `spacesSecretKey`<sup>Optional</sup> <a name="spacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey"></a>

```typescript
public readonly spacesSecretKey: string;
```

- *Type:* string

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The token key for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs#token DigitaloceanProvider#token}

---



