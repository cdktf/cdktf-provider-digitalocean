# `vpcNatGateway` Submodule <a name="`vpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.vpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNatGateway <a name="VpcNatGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGateway(scope: Construct, id: string, config: VpcNatGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig">VpcNatGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig">VpcNatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs">putVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds">resetIcmpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds">resetTcpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds">resetUdpTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcs` <a name="putVpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs"></a>

```typescript
public putVpcs(value: IResolvable | VpcNatGatewayVpcs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]

---

##### `resetIcmpTimeoutSeconds` <a name="resetIcmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds"></a>

```typescript
public resetIcmpTimeoutSeconds(): void
```

##### `resetTcpTimeoutSeconds` <a name="resetTcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds"></a>

```typescript
public resetTcpTimeoutSeconds(): void
```

##### `resetUdpTimeoutSeconds` <a name="resetUdpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds"></a>

```typescript
public resetUdpTimeoutSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

vpcNatGateway.VpcNatGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

vpcNatGateway.VpcNatGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

vpcNatGateway.VpcNatGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

vpcNatGateway.VpcNatGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcNatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses">egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs">vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput">icmpTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput">tcpTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput">udpTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput">vpcsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `egresses`<sup>Required</sup> <a name="egresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses"></a>

```typescript
public readonly egresses: VpcNatGatewayEgressesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs"></a>

```typescript
public readonly vpcs: VpcNatGatewayVpcsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a>

---

##### `icmpTimeoutSecondsInput`<sup>Optional</sup> <a name="icmpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput"></a>

```typescript
public readonly icmpTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `tcpTimeoutSecondsInput`<sup>Optional</sup> <a name="tcpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput"></a>

```typescript
public readonly tcpTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `udpTimeoutSecondsInput`<sup>Optional</sup> <a name="udpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput"></a>

```typescript
public readonly udpTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `vpcsInput`<sup>Optional</sup> <a name="vpcsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput"></a>

```typescript
public readonly vpcsInput: IResolvable | VpcNatGatewayVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]

---

##### `icmpTimeoutSeconds`<sup>Required</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds"></a>

```typescript
public readonly icmpTimeoutSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `tcpTimeoutSeconds`<sup>Required</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds"></a>

```typescript
public readonly tcpTimeoutSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `udpTimeoutSeconds`<sup>Required</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds"></a>

```typescript
public readonly udpTimeoutSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNatGatewayConfig <a name="VpcNatGatewayConfig" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

const vpcNatGatewayConfig: vpcNatGateway.VpcNatGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region">region</a></code> | <code>string</code> | Region of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size">size</a></code> | <code>number</code> | Size of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type">type</a></code> | <code>string</code> | Type of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs">vpcs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]</code> | vpcs block. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>number</code> | ICMP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>number</code> | TCP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>number</code> | UDP connection timeout (in seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs"></a>

```typescript
public readonly vpcs: IResolvable | VpcNatGatewayVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]

vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}

---

##### `icmpTimeoutSeconds`<sup>Optional</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds"></a>

```typescript
public readonly icmpTimeoutSeconds: number;
```

- *Type:* number

ICMP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}

---

##### `tcpTimeoutSeconds`<sup>Optional</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds"></a>

```typescript
public readonly tcpTimeoutSeconds: number;
```

- *Type:* number

TCP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}

---

##### `udpTimeoutSeconds`<sup>Optional</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds"></a>

```typescript
public readonly udpTimeoutSeconds: number;
```

- *Type:* number

UDP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}

---

### VpcNatGatewayEgresses <a name="VpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

const vpcNatGatewayEgresses: vpcNatGateway.VpcNatGatewayEgresses = { ... }
```


### VpcNatGatewayEgressesPublicGateways <a name="VpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

const vpcNatGatewayEgressesPublicGateways: vpcNatGateway.VpcNatGatewayEgressesPublicGateways = { ... }
```


### VpcNatGatewayVpcs <a name="VpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

const vpcNatGatewayVpcs: vpcNatGateway.VpcNatGatewayVpcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | ID of the ingress VPC. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway">defaultGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if this is the default VPC NAT Gateway in the VPC. |

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

ID of the ingress VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#vpc_uuid VpcNatGateway#vpc_uuid}

---

##### `defaultGateway`<sup>Optional</sup> <a name="defaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway"></a>

```typescript
public readonly defaultGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if this is the default VPC NAT Gateway in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#default_gateway VpcNatGateway#default_gateway}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcNatGatewayEgressesList <a name="VpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayEgressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get"></a>

```typescript
public get(index: number): VpcNatGatewayEgressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpcNatGatewayEgressesOutputReference <a name="VpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayEgressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways">publicGateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicGateways`<sup>Required</sup> <a name="publicGateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```typescript
public readonly publicGateways: VpcNatGatewayEgressesPublicGatewaysList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcNatGatewayEgresses;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a>

---


### VpcNatGatewayEgressesPublicGatewaysList <a name="VpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get"></a>

```typescript
public get(index: number): VpcNatGatewayEgressesPublicGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpcNatGatewayEgressesPublicGatewaysOutputReference <a name="VpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcNatGatewayEgressesPublicGateways;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a>

---


### VpcNatGatewayVpcsList <a name="VpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get"></a>

```typescript
public get(index: number): VpcNatGatewayVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcNatGatewayVpcs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>[]

---


### VpcNatGatewayVpcsOutputReference <a name="VpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer"></a>

```typescript
import { vpcNatGateway } from '@cdktf/provider-digitalocean'

new vpcNatGateway.VpcNatGatewayVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway">resetDefaultGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGateway` <a name="resetDefaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway"></a>

```typescript
public resetDefaultGateway(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput">defaultGatewayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput">vpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway">defaultGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `defaultGatewayInput`<sup>Optional</sup> <a name="defaultGatewayInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput"></a>

```typescript
public readonly defaultGatewayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput"></a>

```typescript
public readonly vpcUuidInput: string;
```

- *Type:* string

---

##### `defaultGateway`<sup>Required</sup> <a name="defaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```typescript
public readonly defaultGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcNatGatewayVpcs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>

---



