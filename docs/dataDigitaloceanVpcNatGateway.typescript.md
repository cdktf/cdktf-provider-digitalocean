# `dataDigitaloceanVpcNatGateway` Submodule <a name="`dataDigitaloceanVpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanVpcNatGateway <a name="DataDigitaloceanVpcNatGateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/data-sources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway(scope: Construct, id: string, config?: DataDigitaloceanVpcNatGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig">DataDigitaloceanVpcNatGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig">DataDigitaloceanVpcNatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanVpcNatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanVpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/data-sources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanVpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses">egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs">vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `egresses`<sup>Required</sup> <a name="egresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses"></a>

```typescript
public readonly egresses: DataDigitaloceanVpcNatGatewayEgressesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a>

---

##### `icmpTimeoutSeconds`<sup>Required</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds"></a>

```typescript
public readonly icmpTimeoutSeconds: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tcpTimeoutSeconds`<sup>Required</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds"></a>

```typescript
public readonly tcpTimeoutSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `udpTimeoutSeconds`<sup>Required</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds"></a>

```typescript
public readonly udpTimeoutSeconds: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs"></a>

```typescript
public readonly vpcs: DataDigitaloceanVpcNatGatewayVpcsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanVpcNatGatewayConfig <a name="DataDigitaloceanVpcNatGatewayConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

const dataDigitaloceanVpcNatGatewayConfig: dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id">id</a></code> | <code>string</code> | ID of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the VPC NAT Gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/data-sources/vpc_nat_gateway#id DataDigitaloceanVpcNatGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/data-sources/vpc_nat_gateway#name DataDigitaloceanVpcNatGateway#name}

---

### DataDigitaloceanVpcNatGatewayEgresses <a name="DataDigitaloceanVpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

const dataDigitaloceanVpcNatGatewayEgresses: dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses = { ... }
```


### DataDigitaloceanVpcNatGatewayEgressesPublicGateways <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

const dataDigitaloceanVpcNatGatewayEgressesPublicGateways: dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways = { ... }
```


### DataDigitaloceanVpcNatGatewayVpcs <a name="DataDigitaloceanVpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

const dataDigitaloceanVpcNatGatewayVpcs: dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanVpcNatGatewayEgressesList <a name="DataDigitaloceanVpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get"></a>

```typescript
public get(index: number): DataDigitaloceanVpcNatGatewayEgressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanVpcNatGatewayEgressesOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways">publicGateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicGateways`<sup>Required</sup> <a name="publicGateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```typescript
public readonly publicGateways: DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanVpcNatGatewayEgresses;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a>

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get"></a>

```typescript
public get(index: number): DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanVpcNatGatewayEgressesPublicGateways;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a>

---


### DataDigitaloceanVpcNatGatewayVpcsList <a name="DataDigitaloceanVpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get"></a>

```typescript
public get(index: number): DataDigitaloceanVpcNatGatewayVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDigitaloceanVpcNatGatewayVpcsOutputReference <a name="DataDigitaloceanVpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer"></a>

```typescript
import { dataDigitaloceanVpcNatGateway } from '@cdktf/provider-digitalocean'

new dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway">defaultGateway</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGateway`<sup>Required</sup> <a name="defaultGateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```typescript
public readonly defaultGateway: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDigitaloceanVpcNatGatewayVpcs;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a>

---



