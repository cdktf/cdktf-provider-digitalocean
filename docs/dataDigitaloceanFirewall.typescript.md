# `dataDigitaloceanFirewall` Submodule <a name="`dataDigitaloceanFirewall` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanFirewall <a name="DataDigitaloceanFirewall" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall digitalocean_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewall(scope: Construct, id: string, config: DataDigitaloceanFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig">DataDigitaloceanFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig">DataDigitaloceanFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule">putInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule">putOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds">resetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule">resetInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule">resetOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInboundRule` <a name="putInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule"></a>

```typescript
public putInboundRule(value: IResolvable | DataDigitaloceanFirewallInboundRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]

---

##### `putOutboundRule` <a name="putOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule"></a>

```typescript
public putOutboundRule(value: IResolvable | DataDigitaloceanFirewallOutboundRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]

---

##### `resetDropletIds` <a name="resetDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds"></a>

```typescript
public resetDropletIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundRule` <a name="resetInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule"></a>

```typescript
public resetInboundRule(): void
```

##### `resetOutboundRule` <a name="resetOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule"></a>

```typescript
public resetOutboundRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule">inboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule">outboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges">pendingChanges</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput">dropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput">firewallIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput">inboundRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput">outboundRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `inboundRule`<sup>Required</sup> <a name="inboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule"></a>

```typescript
public readonly inboundRule: DataDigitaloceanFirewallInboundRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outboundRule`<sup>Required</sup> <a name="outboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule"></a>

```typescript
public readonly outboundRule: DataDigitaloceanFirewallOutboundRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a>

---

##### `pendingChanges`<sup>Required</sup> <a name="pendingChanges" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges"></a>

```typescript
public readonly pendingChanges: DataDigitaloceanFirewallPendingChangesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `dropletIdsInput`<sup>Optional</sup> <a name="dropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput"></a>

```typescript
public readonly dropletIdsInput: number[];
```

- *Type:* number[]

---

##### `firewallIdInput`<sup>Optional</sup> <a name="firewallIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput"></a>

```typescript
public readonly firewallIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundRuleInput`<sup>Optional</sup> <a name="inboundRuleInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput"></a>

```typescript
public readonly inboundRuleInput: IResolvable | DataDigitaloceanFirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]

---

##### `outboundRuleInput`<sup>Optional</sup> <a name="outboundRuleInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput"></a>

```typescript
public readonly outboundRuleInput: IResolvable | DataDigitaloceanFirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanFirewallConfig <a name="DataDigitaloceanFirewallConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

const dataDigitaloceanFirewallConfig: dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId">firewallId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule">inboundRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule">outboundRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}.

---

##### `dropletIds`<sup>Optional</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundRule`<sup>Optional</sup> <a name="inboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule"></a>

```typescript
public readonly inboundRule: IResolvable | DataDigitaloceanFirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#inbound_rule DataDigitaloceanFirewall#inbound_rule}

---

##### `outboundRule`<sup>Optional</sup> <a name="outboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule"></a>

```typescript
public readonly outboundRule: IResolvable | DataDigitaloceanFirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#outbound_rule DataDigitaloceanFirewall#outbound_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}.

---

### DataDigitaloceanFirewallInboundRule <a name="DataDigitaloceanFirewallInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

const dataDigitaloceanFirewallInboundRule: dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds">sourceDropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds">sourceKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids">sourceLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}.

---

##### `sourceDropletIds`<sup>Optional</sup> <a name="sourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds"></a>

```typescript
public readonly sourceDropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}.

---

##### `sourceKubernetesIds`<sup>Optional</sup> <a name="sourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds"></a>

```typescript
public readonly sourceKubernetesIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}.

---

##### `sourceLoadBalancerUids`<sup>Optional</sup> <a name="sourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids"></a>

```typescript
public readonly sourceLoadBalancerUids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}.

---

##### `sourceTags`<sup>Optional</sup> <a name="sourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}.

---

### DataDigitaloceanFirewallOutboundRule <a name="DataDigitaloceanFirewallOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

const dataDigitaloceanFirewallOutboundRule: dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds">destinationDropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds">destinationKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids">destinationLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags">destinationTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}.

---

##### `destinationDropletIds`<sup>Optional</sup> <a name="destinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds"></a>

```typescript
public readonly destinationDropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}.

---

##### `destinationKubernetesIds`<sup>Optional</sup> <a name="destinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds"></a>

```typescript
public readonly destinationKubernetesIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}.

---

##### `destinationLoadBalancerUids`<sup>Optional</sup> <a name="destinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids"></a>

```typescript
public readonly destinationLoadBalancerUids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}.

---

##### `destinationTags`<sup>Optional</sup> <a name="destinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags"></a>

```typescript
public readonly destinationTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

### DataDigitaloceanFirewallPendingChanges <a name="DataDigitaloceanFirewallPendingChanges" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

const dataDigitaloceanFirewallPendingChanges: dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanFirewallInboundRuleList <a name="DataDigitaloceanFirewallInboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get"></a>

```typescript
public get(index: number): DataDigitaloceanFirewallInboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanFirewallInboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>[]

---


### DataDigitaloceanFirewallInboundRuleOutputReference <a name="DataDigitaloceanFirewallInboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds">resetSourceDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds">resetSourceKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids">resetSourceLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags">resetSourceTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourceDropletIds` <a name="resetSourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds"></a>

```typescript
public resetSourceDropletIds(): void
```

##### `resetSourceKubernetesIds` <a name="resetSourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds"></a>

```typescript
public resetSourceKubernetesIds(): void
```

##### `resetSourceLoadBalancerUids` <a name="resetSourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids"></a>

```typescript
public resetSourceLoadBalancerUids(): void
```

##### `resetSourceTags` <a name="resetSourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags"></a>

```typescript
public resetSourceTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput">sourceDropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput">sourceKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput">sourceLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput">sourceTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds">sourceDropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds">sourceKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids">sourceLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourceDropletIdsInput`<sup>Optional</sup> <a name="sourceDropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput"></a>

```typescript
public readonly sourceDropletIdsInput: number[];
```

- *Type:* number[]

---

##### `sourceKubernetesIdsInput`<sup>Optional</sup> <a name="sourceKubernetesIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput"></a>

```typescript
public readonly sourceKubernetesIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceLoadBalancerUidsInput`<sup>Optional</sup> <a name="sourceLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput"></a>

```typescript
public readonly sourceLoadBalancerUidsInput: string[];
```

- *Type:* string[]

---

##### `sourceTagsInput`<sup>Optional</sup> <a name="sourceTagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput"></a>

```typescript
public readonly sourceTagsInput: string[];
```

- *Type:* string[]

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourceDropletIds`<sup>Required</sup> <a name="sourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds"></a>

```typescript
public readonly sourceDropletIds: number[];
```

- *Type:* number[]

---

##### `sourceKubernetesIds`<sup>Required</sup> <a name="sourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds"></a>

```typescript
public readonly sourceKubernetesIds: string[];
```

- *Type:* string[]

---

##### `sourceLoadBalancerUids`<sup>Required</sup> <a name="sourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids"></a>

```typescript
public readonly sourceLoadBalancerUids: string[];
```

- *Type:* string[]

---

##### `sourceTags`<sup>Required</sup> <a name="sourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanFirewallInboundRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>

---


### DataDigitaloceanFirewallOutboundRuleList <a name="DataDigitaloceanFirewallOutboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get"></a>

```typescript
public get(index: number): DataDigitaloceanFirewallOutboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanFirewallOutboundRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>[]

---


### DataDigitaloceanFirewallOutboundRuleOutputReference <a name="DataDigitaloceanFirewallOutboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds">resetDestinationDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds">resetDestinationKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids">resetDestinationLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags">resetDestinationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationDropletIds` <a name="resetDestinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds"></a>

```typescript
public resetDestinationDropletIds(): void
```

##### `resetDestinationKubernetesIds` <a name="resetDestinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds"></a>

```typescript
public resetDestinationKubernetesIds(): void
```

##### `resetDestinationLoadBalancerUids` <a name="resetDestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids"></a>

```typescript
public resetDestinationLoadBalancerUids(): void
```

##### `resetDestinationTags` <a name="resetDestinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags"></a>

```typescript
public resetDestinationTags(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput">destinationDropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput">destinationKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput">destinationLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput">destinationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds">destinationDropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds">destinationKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids">destinationLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags">destinationTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationDropletIdsInput`<sup>Optional</sup> <a name="destinationDropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput"></a>

```typescript
public readonly destinationDropletIdsInput: number[];
```

- *Type:* number[]

---

##### `destinationKubernetesIdsInput`<sup>Optional</sup> <a name="destinationKubernetesIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput"></a>

```typescript
public readonly destinationKubernetesIdsInput: string[];
```

- *Type:* string[]

---

##### `destinationLoadBalancerUidsInput`<sup>Optional</sup> <a name="destinationLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput"></a>

```typescript
public readonly destinationLoadBalancerUidsInput: string[];
```

- *Type:* string[]

---

##### `destinationTagsInput`<sup>Optional</sup> <a name="destinationTagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput"></a>

```typescript
public readonly destinationTagsInput: string[];
```

- *Type:* string[]

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationDropletIds`<sup>Required</sup> <a name="destinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds"></a>

```typescript
public readonly destinationDropletIds: number[];
```

- *Type:* number[]

---

##### `destinationKubernetesIds`<sup>Required</sup> <a name="destinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds"></a>

```typescript
public readonly destinationKubernetesIds: string[];
```

- *Type:* string[]

---

##### `destinationLoadBalancerUids`<sup>Required</sup> <a name="destinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids"></a>

```typescript
public readonly destinationLoadBalancerUids: string[];
```

- *Type:* string[]

---

##### `destinationTags`<sup>Required</sup> <a name="destinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags"></a>

```typescript
public readonly destinationTags: string[];
```

- *Type:* string[]

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDigitaloceanFirewallOutboundRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>

---


### DataDigitaloceanFirewallPendingChangesList <a name="DataDigitaloceanFirewallPendingChangesList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanFirewallPendingChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanFirewallPendingChangesOutputReference <a name="DataDigitaloceanFirewallPendingChangesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanFirewall } from '@cdktf/provider-digitalocean'

new dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId">dropletId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing">removing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dropletId`<sup>Required</sup> <a name="dropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId"></a>

```typescript
public readonly dropletId: number;
```

- *Type:* number

---

##### `removing`<sup>Required</sup> <a name="removing" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing"></a>

```typescript
public readonly removing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanFirewallPendingChanges;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a>

---



