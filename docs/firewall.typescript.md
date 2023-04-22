# `digitalocean_firewall`

Refer to the Terraform Registory for docs: [`digitalocean_firewall`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall).

# `firewall` Submodule <a name="`firewall` Submodule" id="@cdktf/provider-digitalocean.firewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Firewall <a name="Firewall" id="@cdktf/provider-digitalocean.firewall.Firewall"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall digitalocean_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.Firewall(scope: Construct, id: string, config: FirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig">FirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig">FirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule">putInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule">putOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetDropletIds">resetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetInboundRule">resetInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetOutboundRule">resetOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.Firewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.firewall.Firewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.firewall.Firewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInboundRule` <a name="putInboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule"></a>

```typescript
public putInboundRule(value: IResolvable | FirewallInboundRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]

---

##### `putOutboundRule` <a name="putOutboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule"></a>

```typescript
public putOutboundRule(value: IResolvable | FirewallOutboundRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]

---

##### `resetDropletIds` <a name="resetDropletIds" id="@cdktf/provider-digitalocean.firewall.Firewall.resetDropletIds"></a>

```typescript
public resetDropletIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.firewall.Firewall.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundRule` <a name="resetInboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.resetInboundRule"></a>

```typescript
public resetInboundRule(): void
```

##### `resetOutboundRule` <a name="resetOutboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.resetOutboundRule"></a>

```typescript
public resetOutboundRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.firewall.Firewall.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.firewall.Firewall.isConstruct"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

firewall.Firewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

firewall.Firewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

firewall.Firewall.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRule">inboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList">FirewallInboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRule">outboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList">FirewallOutboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.pendingChanges">pendingChanges</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList">FirewallPendingChangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIdsInput">dropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRuleInput">inboundRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRuleInput">outboundRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.firewall.Firewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.firewall.Firewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.Firewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.firewall.Firewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.firewall.Firewall.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.firewall.Firewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.firewall.Firewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.firewall.Firewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.firewall.Firewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.firewall.Firewall.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.firewall.Firewall.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `inboundRule`<sup>Required</sup> <a name="inboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRule"></a>

```typescript
public readonly inboundRule: FirewallInboundRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList">FirewallInboundRuleList</a>

---

##### `outboundRule`<sup>Required</sup> <a name="outboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRule"></a>

```typescript
public readonly outboundRule: FirewallOutboundRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList">FirewallOutboundRuleList</a>

---

##### `pendingChanges`<sup>Required</sup> <a name="pendingChanges" id="@cdktf/provider-digitalocean.firewall.Firewall.property.pendingChanges"></a>

```typescript
public readonly pendingChanges: FirewallPendingChangesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList">FirewallPendingChangesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.firewall.Firewall.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `dropletIdsInput`<sup>Optional</sup> <a name="dropletIdsInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIdsInput"></a>

```typescript
public readonly dropletIdsInput: number[];
```

- *Type:* number[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundRuleInput`<sup>Optional</sup> <a name="inboundRuleInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRuleInput"></a>

```typescript
public readonly inboundRuleInput: IResolvable | FirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outboundRuleInput`<sup>Optional</sup> <a name="outboundRuleInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRuleInput"></a>

```typescript
public readonly outboundRuleInput: IResolvable | FirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.firewall.Firewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.firewall.Firewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallConfig <a name="FirewallConfig" id="@cdktf/provider-digitalocean.firewall.FirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

const firewallConfig: firewall.FirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#name Firewall#name}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#droplet_ids Firewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#id Firewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.inboundRule">inboundRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.outboundRule">outboundRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#tags Firewall#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#name Firewall#name}.

---

##### `dropletIds`<sup>Optional</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#droplet_ids Firewall#droplet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#id Firewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundRule`<sup>Optional</sup> <a name="inboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.inboundRule"></a>

```typescript
public readonly inboundRule: IResolvable | FirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#inbound_rule Firewall#inbound_rule}

---

##### `outboundRule`<sup>Optional</sup> <a name="outboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.outboundRule"></a>

```typescript
public readonly outboundRule: IResolvable | FirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#outbound_rule Firewall#outbound_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#tags Firewall#tags}.

---

### FirewallInboundRule <a name="FirewallInboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

const firewallInboundRule: firewall.FirewallInboundRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#port_range Firewall#port_range}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_addresses Firewall#source_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceDropletIds">sourceDropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_droplet_ids Firewall#source_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceKubernetesIds">sourceKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_kubernetes_ids Firewall#source_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceLoadBalancerUids">sourceLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_load_balancer_uids Firewall#source_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_tags Firewall#source_tags}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#protocol Firewall#protocol}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#port_range Firewall#port_range}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_addresses Firewall#source_addresses}.

---

##### `sourceDropletIds`<sup>Optional</sup> <a name="sourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceDropletIds"></a>

```typescript
public readonly sourceDropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_droplet_ids Firewall#source_droplet_ids}.

---

##### `sourceKubernetesIds`<sup>Optional</sup> <a name="sourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceKubernetesIds"></a>

```typescript
public readonly sourceKubernetesIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_kubernetes_ids Firewall#source_kubernetes_ids}.

---

##### `sourceLoadBalancerUids`<sup>Optional</sup> <a name="sourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceLoadBalancerUids"></a>

```typescript
public readonly sourceLoadBalancerUids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_load_balancer_uids Firewall#source_load_balancer_uids}.

---

##### `sourceTags`<sup>Optional</sup> <a name="sourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#source_tags Firewall#source_tags}.

---

### FirewallOutboundRule <a name="FirewallOutboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

const firewallOutboundRule: firewall.FirewallOutboundRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_addresses Firewall#destination_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationDropletIds">destinationDropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_droplet_ids Firewall#destination_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationKubernetesIds">destinationKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_kubernetes_ids Firewall#destination_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationLoadBalancerUids">destinationLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_load_balancer_uids Firewall#destination_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationTags">destinationTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_tags Firewall#destination_tags}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#port_range Firewall#port_range}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#protocol Firewall#protocol}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_addresses Firewall#destination_addresses}.

---

##### `destinationDropletIds`<sup>Optional</sup> <a name="destinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationDropletIds"></a>

```typescript
public readonly destinationDropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_droplet_ids Firewall#destination_droplet_ids}.

---

##### `destinationKubernetesIds`<sup>Optional</sup> <a name="destinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationKubernetesIds"></a>

```typescript
public readonly destinationKubernetesIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_kubernetes_ids Firewall#destination_kubernetes_ids}.

---

##### `destinationLoadBalancerUids`<sup>Optional</sup> <a name="destinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationLoadBalancerUids"></a>

```typescript
public readonly destinationLoadBalancerUids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_load_balancer_uids Firewall#destination_load_balancer_uids}.

---

##### `destinationTags`<sup>Optional</sup> <a name="destinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationTags"></a>

```typescript
public readonly destinationTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#destination_tags Firewall#destination_tags}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.0/docs/resources/firewall#port_range Firewall#port_range}.

---

### FirewallPendingChanges <a name="FirewallPendingChanges" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChanges.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

const firewallPendingChanges: firewall.FirewallPendingChanges = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### FirewallInboundRuleList <a name="FirewallInboundRuleList" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallInboundRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get"></a>

```typescript
public get(index: number): FirewallInboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a>[]

---


### FirewallInboundRuleOutputReference <a name="FirewallInboundRuleOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallInboundRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceDropletIds">resetSourceDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceKubernetesIds">resetSourceKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceLoadBalancerUids">resetSourceLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceTags">resetSourceTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceDropletIds` <a name="resetSourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceDropletIds"></a>

```typescript
public resetSourceDropletIds(): void
```

##### `resetSourceKubernetesIds` <a name="resetSourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceKubernetesIds"></a>

```typescript
public resetSourceKubernetesIds(): void
```

##### `resetSourceLoadBalancerUids` <a name="resetSourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceLoadBalancerUids"></a>

```typescript
public resetSourceLoadBalancerUids(): void
```

##### `resetSourceTags` <a name="resetSourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceTags"></a>

```typescript
public resetSourceTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIdsInput">sourceDropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput">sourceKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput">sourceLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTagsInput">sourceTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIds">sourceDropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIds">sourceKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUids">sourceLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceDropletIdsInput`<sup>Optional</sup> <a name="sourceDropletIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIdsInput"></a>

```typescript
public readonly sourceDropletIdsInput: number[];
```

- *Type:* number[]

---

##### `sourceKubernetesIdsInput`<sup>Optional</sup> <a name="sourceKubernetesIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput"></a>

```typescript
public readonly sourceKubernetesIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceLoadBalancerUidsInput`<sup>Optional</sup> <a name="sourceLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput"></a>

```typescript
public readonly sourceLoadBalancerUidsInput: string[];
```

- *Type:* string[]

---

##### `sourceTagsInput`<sup>Optional</sup> <a name="sourceTagsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTagsInput"></a>

```typescript
public readonly sourceTagsInput: string[];
```

- *Type:* string[]

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceDropletIds`<sup>Required</sup> <a name="sourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIds"></a>

```typescript
public readonly sourceDropletIds: number[];
```

- *Type:* number[]

---

##### `sourceKubernetesIds`<sup>Required</sup> <a name="sourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIds"></a>

```typescript
public readonly sourceKubernetesIds: string[];
```

- *Type:* string[]

---

##### `sourceLoadBalancerUids`<sup>Required</sup> <a name="sourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUids"></a>

```typescript
public readonly sourceLoadBalancerUids: string[];
```

- *Type:* string[]

---

##### `sourceTags`<sup>Required</sup> <a name="sourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirewallInboundRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule">FirewallInboundRule</a> | cdktf.IResolvable

---


### FirewallOutboundRuleList <a name="FirewallOutboundRuleList" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallOutboundRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get"></a>

```typescript
public get(index: number): FirewallOutboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a>[]

---


### FirewallOutboundRuleOutputReference <a name="FirewallOutboundRuleOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallOutboundRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationDropletIds">resetDestinationDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationKubernetesIds">resetDestinationKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids">resetDestinationLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationTags">resetDestinationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationDropletIds` <a name="resetDestinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationDropletIds"></a>

```typescript
public resetDestinationDropletIds(): void
```

##### `resetDestinationKubernetesIds` <a name="resetDestinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationKubernetesIds"></a>

```typescript
public resetDestinationKubernetesIds(): void
```

##### `resetDestinationLoadBalancerUids` <a name="resetDestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids"></a>

```typescript
public resetDestinationLoadBalancerUids(): void
```

##### `resetDestinationTags` <a name="resetDestinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationTags"></a>

```typescript
public resetDestinationTags(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIdsInput">destinationDropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput">destinationKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput">destinationLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTagsInput">destinationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIds">destinationDropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIds">destinationKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids">destinationLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTags">destinationTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationDropletIdsInput`<sup>Optional</sup> <a name="destinationDropletIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIdsInput"></a>

```typescript
public readonly destinationDropletIdsInput: number[];
```

- *Type:* number[]

---

##### `destinationKubernetesIdsInput`<sup>Optional</sup> <a name="destinationKubernetesIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput"></a>

```typescript
public readonly destinationKubernetesIdsInput: string[];
```

- *Type:* string[]

---

##### `destinationLoadBalancerUidsInput`<sup>Optional</sup> <a name="destinationLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput"></a>

```typescript
public readonly destinationLoadBalancerUidsInput: string[];
```

- *Type:* string[]

---

##### `destinationTagsInput`<sup>Optional</sup> <a name="destinationTagsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTagsInput"></a>

```typescript
public readonly destinationTagsInput: string[];
```

- *Type:* string[]

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationDropletIds`<sup>Required</sup> <a name="destinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIds"></a>

```typescript
public readonly destinationDropletIds: number[];
```

- *Type:* number[]

---

##### `destinationKubernetesIds`<sup>Required</sup> <a name="destinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIds"></a>

```typescript
public readonly destinationKubernetesIds: string[];
```

- *Type:* string[]

---

##### `destinationLoadBalancerUids`<sup>Required</sup> <a name="destinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids"></a>

```typescript
public readonly destinationLoadBalancerUids: string[];
```

- *Type:* string[]

---

##### `destinationTags`<sup>Required</sup> <a name="destinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTags"></a>

```typescript
public readonly destinationTags: string[];
```

- *Type:* string[]

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirewallOutboundRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule">FirewallOutboundRule</a> | cdktf.IResolvable

---


### FirewallPendingChangesList <a name="FirewallPendingChangesList" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallPendingChangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get"></a>

```typescript
public get(index: number): FirewallPendingChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FirewallPendingChangesOutputReference <a name="FirewallPendingChangesOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer"></a>

```typescript
import { firewall } from '@cdktf/provider-digitalocean'

new firewall.FirewallPendingChangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.dropletId">dropletId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.removing">removing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChanges">FirewallPendingChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dropletId`<sup>Required</sup> <a name="dropletId" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.dropletId"></a>

```typescript
public readonly dropletId: number;
```

- *Type:* number

---

##### `removing`<sup>Required</sup> <a name="removing" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.removing"></a>

```typescript
public readonly removing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirewallPendingChanges;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChanges">FirewallPendingChanges</a>

---



