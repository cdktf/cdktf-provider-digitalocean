# `dataDigitaloceanLoadbalancer` Submodule <a name="`dataDigitaloceanLoadbalancer` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanLoadbalancer <a name="DataDigitaloceanLoadbalancer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/data-sources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer(scope: Construct, id: string, config?: DataDigitaloceanLoadbalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig">DataDigitaloceanLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig">DataDigitaloceanLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/data-sources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList">DataDigitaloceanLoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletTag">dropletTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList">DataDigitaloceanLoadbalancerFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forwardingRule">forwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList">DataDigitaloceanLoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.glbSettings">glbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList">DataDigitaloceanLoadbalancerGlbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList">DataDigitaloceanLoadbalancerHealthcheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.sizeUnit">sizeUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList">DataDigitaloceanLoadbalancerStickySessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.targetLoadBalancerIds">targetLoadBalancerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `disableLetsEncryptDnsRecords`<sup>Required</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.disableLetsEncryptDnsRecords"></a>

```typescript
public readonly disableLetsEncryptDnsRecords: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.domains"></a>

```typescript
public readonly domains: DataDigitaloceanLoadbalancerDomainsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList">DataDigitaloceanLoadbalancerDomainsList</a>

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

---

##### `dropletTag`<sup>Required</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletTag"></a>

```typescript
public readonly dropletTag: string;
```

- *Type:* string

---

##### `enableBackendKeepalive`<sup>Required</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableBackendKeepalive"></a>

```typescript
public readonly enableBackendKeepalive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.firewall"></a>

```typescript
public readonly firewall: DataDigitaloceanLoadbalancerFirewallList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList">DataDigitaloceanLoadbalancerFirewallList</a>

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: DataDigitaloceanLoadbalancerForwardingRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList">DataDigitaloceanLoadbalancerForwardingRuleList</a>

---

##### `glbSettings`<sup>Required</sup> <a name="glbSettings" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.glbSettings"></a>

```typescript
public readonly glbSettings: DataDigitaloceanLoadbalancerGlbSettingsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList">DataDigitaloceanLoadbalancerGlbSettingsList</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.healthcheck"></a>

```typescript
public readonly healthcheck: DataDigitaloceanLoadbalancerHealthcheckList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList">DataDigitaloceanLoadbalancerHealthcheckList</a>

---

##### `httpIdleTimeoutSeconds`<sup>Required</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.httpIdleTimeoutSeconds"></a>

```typescript
public readonly httpIdleTimeoutSeconds: number;
```

- *Type:* number

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `redirectHttpToHttps`<sup>Required</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.redirectHttpToHttps"></a>

```typescript
public readonly redirectHttpToHttps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `sizeUnit`<sup>Required</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.sizeUnit"></a>

```typescript
public readonly sizeUnit: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.stickySessions"></a>

```typescript
public readonly stickySessions: DataDigitaloceanLoadbalancerStickySessionsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList">DataDigitaloceanLoadbalancerStickySessionsList</a>

---

##### `targetLoadBalancerIds`<sup>Required</sup> <a name="targetLoadBalancerIds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.targetLoadBalancerIds"></a>

```typescript
public readonly targetLoadBalancerIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanLoadbalancerConfig <a name="DataDigitaloceanLoadbalancerConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerConfig: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.id">id</a></code> | <code>string</code> | id of the load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.name">name</a></code> | <code>string</code> | name of the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

id of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/data-sources/loadbalancer#id DataDigitaloceanLoadbalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/data-sources/loadbalancer#name DataDigitaloceanLoadbalancer#name}

---

### DataDigitaloceanLoadbalancerDomains <a name="DataDigitaloceanLoadbalancerDomains" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerDomains: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains = { ... }
```


### DataDigitaloceanLoadbalancerFirewall <a name="DataDigitaloceanLoadbalancerFirewall" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerFirewall: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall = { ... }
```


### DataDigitaloceanLoadbalancerForwardingRule <a name="DataDigitaloceanLoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerForwardingRule: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule = { ... }
```


### DataDigitaloceanLoadbalancerGlbSettings <a name="DataDigitaloceanLoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerGlbSettings: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings = { ... }
```


### DataDigitaloceanLoadbalancerGlbSettingsCdn <a name="DataDigitaloceanLoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerGlbSettingsCdn: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn = { ... }
```


### DataDigitaloceanLoadbalancerHealthcheck <a name="DataDigitaloceanLoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerHealthcheck: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck = { ... }
```


### DataDigitaloceanLoadbalancerStickySessions <a name="DataDigitaloceanLoadbalancerStickySessions" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

const dataDigitaloceanLoadbalancerStickySessions: dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanLoadbalancerDomainsList <a name="DataDigitaloceanLoadbalancerDomainsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerDomainsOutputReference <a name="DataDigitaloceanLoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.isManaged">isManaged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">sslValidationErrorReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.verificationErrorReasons">verificationErrorReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains">DataDigitaloceanLoadbalancerDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `isManaged`<sup>Required</sup> <a name="isManaged" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.isManaged"></a>

```typescript
public readonly isManaged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sslValidationErrorReasons`<sup>Required</sup> <a name="sslValidationErrorReasons" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```typescript
public readonly sslValidationErrorReasons: string[];
```

- *Type:* string[]

---

##### `verificationErrorReasons`<sup>Required</sup> <a name="verificationErrorReasons" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```typescript
public readonly verificationErrorReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerDomains;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains">DataDigitaloceanLoadbalancerDomains</a>

---


### DataDigitaloceanLoadbalancerFirewallList <a name="DataDigitaloceanLoadbalancerFirewallList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerFirewallOutputReference <a name="DataDigitaloceanLoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.allow">allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.deny">deny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall">DataDigitaloceanLoadbalancerFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.deny"></a>

```typescript
public readonly deny: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall">DataDigitaloceanLoadbalancerFirewall</a>

---


### DataDigitaloceanLoadbalancerForwardingRuleList <a name="DataDigitaloceanLoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerForwardingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerForwardingRuleOutputReference <a name="DataDigitaloceanLoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryPort">entryPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryProtocol">entryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetPort">targetPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetProtocol">targetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">tlsPassthrough</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule">DataDigitaloceanLoadbalancerForwardingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `entryPort`<sup>Required</sup> <a name="entryPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```typescript
public readonly entryPort: number;
```

- *Type:* number

---

##### `entryProtocol`<sup>Required</sup> <a name="entryProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```typescript
public readonly entryProtocol: string;
```

- *Type:* string

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: string;
```

- *Type:* string

---

##### `tlsPassthrough`<sup>Required</sup> <a name="tlsPassthrough" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```typescript
public readonly tlsPassthrough: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerForwardingRule;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule">DataDigitaloceanLoadbalancerForwardingRule</a>

---


### DataDigitaloceanLoadbalancerGlbSettingsCdnList <a name="DataDigitaloceanLoadbalancerGlbSettingsCdnList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference <a name="DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn">DataDigitaloceanLoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerGlbSettingsCdn;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn">DataDigitaloceanLoadbalancerGlbSettingsCdn</a>

---


### DataDigitaloceanLoadbalancerGlbSettingsList <a name="DataDigitaloceanLoadbalancerGlbSettingsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerGlbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerGlbSettingsOutputReference <a name="DataDigitaloceanLoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.cdn">cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList">DataDigitaloceanLoadbalancerGlbSettingsCdnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.failoverThreshold">failoverThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.regionPriorities">regionPriorities</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetPort">targetPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetProtocol">targetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings">DataDigitaloceanLoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdn`<sup>Required</sup> <a name="cdn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```typescript
public readonly cdn: DataDigitaloceanLoadbalancerGlbSettingsCdnList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList">DataDigitaloceanLoadbalancerGlbSettingsCdnList</a>

---

##### `failoverThreshold`<sup>Required</sup> <a name="failoverThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```typescript
public readonly failoverThreshold: number;
```

- *Type:* number

---

##### `regionPriorities`<sup>Required</sup> <a name="regionPriorities" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```typescript
public readonly regionPriorities: NumberMap;
```

- *Type:* cdktf.NumberMap

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerGlbSettings;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings">DataDigitaloceanLoadbalancerGlbSettings</a>

---


### DataDigitaloceanLoadbalancerHealthcheckList <a name="DataDigitaloceanLoadbalancerHealthcheckList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerHealthcheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerHealthcheckOutputReference <a name="DataDigitaloceanLoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">checkIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">responseTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck">DataDigitaloceanLoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkIntervalSeconds`<sup>Required</sup> <a name="checkIntervalSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```typescript
public readonly checkIntervalSeconds: number;
```

- *Type:* number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `responseTimeoutSeconds`<sup>Required</sup> <a name="responseTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```typescript
public readonly responseTimeoutSeconds: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck">DataDigitaloceanLoadbalancerHealthcheck</a>

---


### DataDigitaloceanLoadbalancerStickySessionsList <a name="DataDigitaloceanLoadbalancerStickySessionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanLoadbalancerStickySessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanLoadbalancerStickySessionsOutputReference <a name="DataDigitaloceanLoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanLoadbalancer } from '@cdktf/provider-digitalocean'

new dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">cookieTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions">DataDigitaloceanLoadbalancerStickySessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `cookieTtlSeconds`<sup>Required</sup> <a name="cookieTtlSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```typescript
public readonly cookieTtlSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanLoadbalancerStickySessions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions">DataDigitaloceanLoadbalancerStickySessions</a>

---



