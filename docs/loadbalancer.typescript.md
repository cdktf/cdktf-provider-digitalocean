# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-digitalocean.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.Loadbalancer(scope: Construct, id: string, config: LoadbalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule">putForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck">putHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions">putStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords">resetDisableLetsEncryptDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds">resetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag">resetDropletTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive">resetEnableBackendKeepalive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol">resetEnableProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck">resetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds">resetHttpIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps">resetRedirectHttpToHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit">resetSizeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall"></a>

```typescript
public putFirewall(value: LoadbalancerFirewall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `putForwardingRule` <a name="putForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule"></a>

```typescript
public putForwardingRule(value: IResolvable | LoadbalancerForwardingRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck"></a>

```typescript
public putHealthcheck(value: LoadbalancerHealthcheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `putStickySessions` <a name="putStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions"></a>

```typescript
public putStickySessions(value: LoadbalancerStickySessions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetDisableLetsEncryptDnsRecords` <a name="resetDisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords"></a>

```typescript
public resetDisableLetsEncryptDnsRecords(): void
```

##### `resetDropletIds` <a name="resetDropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds"></a>

```typescript
public resetDropletIds(): void
```

##### `resetDropletTag` <a name="resetDropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag"></a>

```typescript
public resetDropletTag(): void
```

##### `resetEnableBackendKeepalive` <a name="resetEnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive"></a>

```typescript
public resetEnableBackendKeepalive(): void
```

##### `resetEnableProxyProtocol` <a name="resetEnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol"></a>

```typescript
public resetEnableProxyProtocol(): void
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall"></a>

```typescript
public resetFirewall(): void
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck"></a>

```typescript
public resetHealthcheck(): void
```

##### `resetHttpIdleTimeoutSeconds` <a name="resetHttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds"></a>

```typescript
public resetHttpIdleTimeoutSeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRedirectHttpToHttps` <a name="resetRedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps"></a>

```typescript
public resetRedirectHttpToHttps(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetSizeUnit` <a name="resetSizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit"></a>

```typescript
public resetSizeUnit(): void
```

##### `resetStickySessions` <a name="resetStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions"></a>

```typescript
public resetStickySessions(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid"></a>

```typescript
public resetVpcUuid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

loadbalancer.Loadbalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

loadbalancer.Loadbalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

loadbalancer.Loadbalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

loadbalancer.Loadbalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Loadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Loadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Loadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule">forwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput">disableLetsEncryptDnsRecordsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput">dropletIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput">dropletTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput">enableBackendKeepaliveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput">httpIdleTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput">redirectHttpToHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput">sizeUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput">stickySessionsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput">vpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag">dropletTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit">sizeUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall"></a>

```typescript
public readonly firewall: LoadbalancerFirewallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a>

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: LoadbalancerForwardingRuleList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck"></a>

```typescript
public readonly healthcheck: LoadbalancerHealthcheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions"></a>

```typescript
public readonly stickySessions: LoadbalancerStickySessionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `disableLetsEncryptDnsRecordsInput`<sup>Optional</sup> <a name="disableLetsEncryptDnsRecordsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput"></a>

```typescript
public readonly disableLetsEncryptDnsRecordsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dropletIdsInput`<sup>Optional</sup> <a name="dropletIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput"></a>

```typescript
public readonly dropletIdsInput: number[];
```

- *Type:* number[]

---

##### `dropletTagInput`<sup>Optional</sup> <a name="dropletTagInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput"></a>

```typescript
public readonly dropletTagInput: string;
```

- *Type:* string

---

##### `enableBackendKeepaliveInput`<sup>Optional</sup> <a name="enableBackendKeepaliveInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput"></a>

```typescript
public readonly enableBackendKeepaliveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput"></a>

```typescript
public readonly enableProxyProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput"></a>

```typescript
public readonly firewallInput: LoadbalancerFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput"></a>

```typescript
public readonly forwardingRuleInput: IResolvable | LoadbalancerForwardingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput"></a>

```typescript
public readonly healthcheckInput: LoadbalancerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `httpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="httpIdleTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput"></a>

```typescript
public readonly httpIdleTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `redirectHttpToHttpsInput`<sup>Optional</sup> <a name="redirectHttpToHttpsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput"></a>

```typescript
public readonly redirectHttpToHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `sizeUnitInput`<sup>Optional</sup> <a name="sizeUnitInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput"></a>

```typescript
public readonly sizeUnitInput: number;
```

- *Type:* number

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput"></a>

```typescript
public readonly stickySessionsInput: LoadbalancerStickySessions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput"></a>

```typescript
public readonly vpcUuidInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `disableLetsEncryptDnsRecords`<sup>Required</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords"></a>

```typescript
public readonly disableLetsEncryptDnsRecords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

---

##### `dropletTag`<sup>Required</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag"></a>

```typescript
public readonly dropletTag: string;
```

- *Type:* string

---

##### `enableBackendKeepalive`<sup>Required</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive"></a>

```typescript
public readonly enableBackendKeepalive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpIdleTimeoutSeconds`<sup>Required</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds"></a>

```typescript
public readonly httpIdleTimeoutSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `redirectHttpToHttps`<sup>Required</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps"></a>

```typescript
public readonly redirectHttpToHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `sizeUnit`<sup>Required</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit"></a>

```typescript
public readonly sizeUnit: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

const loadbalancerConfig: loadbalancer.LoadbalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule">forwardingRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]</code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds">dropletIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag">dropletTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit">sizeUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type">type</a></code> | <code>string</code> | the type of the load balancer (GLOBAL or REGIONAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: IResolvable | LoadbalancerForwardingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `disableLetsEncryptDnsRecords`<sup>Optional</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords"></a>

```typescript
public readonly disableLetsEncryptDnsRecords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `dropletIds`<sup>Optional</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds"></a>

```typescript
public readonly dropletIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `dropletTag`<sup>Optional</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag"></a>

```typescript
public readonly dropletTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `enableBackendKeepalive`<sup>Optional</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive"></a>

```typescript
public readonly enableBackendKeepalive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `enableProxyProtocol`<sup>Optional</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall"></a>

```typescript
public readonly firewall: LoadbalancerFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck"></a>

```typescript
public readonly healthcheck: LoadbalancerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `httpIdleTimeoutSeconds`<sup>Optional</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds"></a>

```typescript
public readonly httpIdleTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `redirectHttpToHttps`<sup>Optional</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps"></a>

```typescript
public readonly redirectHttpToHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `sizeUnit`<sup>Optional</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit"></a>

```typescript
public readonly sizeUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions"></a>

```typescript
public readonly stickySessions: LoadbalancerStickySessions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

the type of the load balancer (GLOBAL or REGIONAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

### LoadbalancerFirewall <a name="LoadbalancerFirewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

const loadbalancerFirewall: loadbalancer.LoadbalancerFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow">allow</a></code> | <code>string[]</code> | the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny">deny</a></code> | <code>string[]</code> | the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny"></a>

```typescript
public readonly deny: string[];
```

- *Type:* string[]

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

### LoadbalancerForwardingRule <a name="LoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

const loadbalancerForwardingRule: loadbalancer.LoadbalancerForwardingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort">entryPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol">entryProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort">targetPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol">targetProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough">tlsPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}. |

---

##### `entryPort`<sup>Required</sup> <a name="entryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort"></a>

```typescript
public readonly entryPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}.

---

##### `entryProtocol`<sup>Required</sup> <a name="entryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol"></a>

```typescript
public readonly entryProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}.

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}.

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}.

---

##### `tlsPassthrough`<sup>Optional</sup> <a name="tlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough"></a>

```typescript
public readonly tlsPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}.

---

### LoadbalancerHealthcheck <a name="LoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

const loadbalancerHealthcheck: loadbalancer.LoadbalancerHealthcheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#port Loadbalancer#port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds">checkIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#path Loadbalancer#path}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds">responseTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

##### `checkIntervalSeconds`<sup>Optional</sup> <a name="checkIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds"></a>

```typescript
public readonly checkIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

##### `responseTimeoutSeconds`<sup>Optional</sup> <a name="responseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds"></a>

```typescript
public readonly responseTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

### LoadbalancerStickySessions <a name="LoadbalancerStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

const loadbalancerStickySessions: loadbalancer.LoadbalancerStickySessions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds">cookieTtlSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#type Loadbalancer#type}. |

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

##### `cookieTtlSeconds`<sup>Optional</sup> <a name="cookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds"></a>

```typescript
public readonly cookieTtlSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFirewallOutputReference <a name="LoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.LoadbalancerFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny">resetDeny</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny"></a>

```typescript
public resetDeny(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput">allowInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput">denyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow">allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny">deny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: string[];
```

- *Type:* string[]

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput"></a>

```typescript
public readonly denyInput: string[];
```

- *Type:* string[]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny"></a>

```typescript
public readonly deny: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadbalancerFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---


### LoadbalancerForwardingRuleList <a name="LoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.LoadbalancerForwardingRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get"></a>

```typescript
public get(index: number): LoadbalancerForwardingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerForwardingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>[]

---


### LoadbalancerForwardingRuleOutputReference <a name="LoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.LoadbalancerForwardingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough">resetTlsPassthrough</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetTlsPassthrough` <a name="resetTlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough"></a>

```typescript
public resetTlsPassthrough(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput">entryPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput">entryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput">targetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput">tlsPassthroughInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort">entryPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol">entryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort">targetPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol">targetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">tlsPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `entryPortInput`<sup>Optional</sup> <a name="entryPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput"></a>

```typescript
public readonly entryPortInput: number;
```

- *Type:* number

---

##### `entryProtocolInput`<sup>Optional</sup> <a name="entryProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput"></a>

```typescript
public readonly entryProtocolInput: string;
```

- *Type:* string

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput"></a>

```typescript
public readonly targetPortInput: number;
```

- *Type:* number

---

##### `targetProtocolInput`<sup>Optional</sup> <a name="targetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput"></a>

```typescript
public readonly targetProtocolInput: string;
```

- *Type:* string

---

##### `tlsPassthroughInput`<sup>Optional</sup> <a name="tlsPassthroughInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput"></a>

```typescript
public readonly tlsPassthroughInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `entryPort`<sup>Required</sup> <a name="entryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```typescript
public readonly entryPort: number;
```

- *Type:* number

---

##### `entryProtocol`<sup>Required</sup> <a name="entryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```typescript
public readonly entryProtocol: string;
```

- *Type:* string

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: string;
```

- *Type:* string

---

##### `tlsPassthrough`<sup>Required</sup> <a name="tlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```typescript
public readonly tlsPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerForwardingRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>

---


### LoadbalancerHealthcheckOutputReference <a name="LoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.LoadbalancerHealthcheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds">resetCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds">resetResponseTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckIntervalSeconds` <a name="resetCheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds"></a>

```typescript
public resetCheckIntervalSeconds(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetResponseTimeoutSeconds` <a name="resetResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds"></a>

```typescript
public resetResponseTimeoutSeconds(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput">checkIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput">responseTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">checkIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">responseTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkIntervalSecondsInput`<sup>Optional</sup> <a name="checkIntervalSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput"></a>

```typescript
public readonly checkIntervalSecondsInput: number;
```

- *Type:* number

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `responseTimeoutSecondsInput`<sup>Optional</sup> <a name="responseTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput"></a>

```typescript
public readonly responseTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `checkIntervalSeconds`<sup>Required</sup> <a name="checkIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```typescript
public readonly checkIntervalSeconds: number;
```

- *Type:* number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `responseTimeoutSeconds`<sup>Required</sup> <a name="responseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```typescript
public readonly responseTimeoutSeconds: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadbalancerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---


### LoadbalancerStickySessionsOutputReference <a name="LoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer"></a>

```typescript
import { loadbalancer } from '@cdktf/provider-digitalocean'

new loadbalancer.LoadbalancerStickySessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds">resetCookieTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName"></a>

```typescript
public resetCookieName(): void
```

##### `resetCookieTtlSeconds` <a name="resetCookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds"></a>

```typescript
public resetCookieTtlSeconds(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput">cookieTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">cookieTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `cookieTtlSecondsInput`<sup>Optional</sup> <a name="cookieTtlSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput"></a>

```typescript
public readonly cookieTtlSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `cookieTtlSeconds`<sup>Required</sup> <a name="cookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```typescript
public readonly cookieTtlSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadbalancerStickySessions;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---



