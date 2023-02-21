# `uptimeAlert` Submodule <a name="`uptimeAlert` Submodule" id="@cdktf/provider-digitalocean.uptimeAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UptimeAlert <a name="UptimeAlert" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert digitalocean_uptime_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

new uptimeAlert.UptimeAlert(scope: Construct, id: string, config: UptimeAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig">UptimeAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig">UptimeAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications"></a>

```typescript
public putNotifications(value: IResolvable | UptimeAlertNotifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]

---

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

uptimeAlert.UptimeAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

uptimeAlert.UptimeAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

uptimeAlert.UptimeAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput">checkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput">notificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId">checkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications"></a>

```typescript
public readonly notifications: UptimeAlertNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a>

---

##### `checkIdInput`<sup>Optional</sup> <a name="checkIdInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput"></a>

```typescript
public readonly checkIdInput: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: IResolvable | UptimeAlertNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UptimeAlertConfig <a name="UptimeAlertConfig" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

const uptimeAlertConfig: uptimeAlert.UptimeAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId">checkId</a></code> | <code>string</code> | A unique identifier for a check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name">name</a></code> | <code>string</code> | A human-friendly display name for the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications">notifications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]</code> | notifications block. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type">type</a></code> | <code>string</code> | The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison">comparison</a></code> | <code>string</code> | The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period">period</a></code> | <code>string</code> | Period of time the threshold must be exceeded to trigger the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold">threshold</a></code> | <code>number</code> | The threshold at which the alert will enter a trigger state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

A unique identifier for a check.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#check_id UptimeAlert#check_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-friendly display name for the alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#name UptimeAlert#name}

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications"></a>

```typescript
public readonly notifications: IResolvable | UptimeAlertNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#notifications UptimeAlert#notifications}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#type UptimeAlert#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#comparison UptimeAlert#comparison}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Period of time the threshold must be exceeded to trigger the alert.

Enum '2m' '3m' '5m' '10m' '15m' '30m' '1h'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#period UptimeAlert#period}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The threshold at which the alert will enter a trigger state.

The specific threshold is dependent on the alert type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#threshold UptimeAlert#threshold}

---

### UptimeAlertNotifications <a name="UptimeAlertNotifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

const uptimeAlertNotifications: uptimeAlert.UptimeAlertNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email">email</a></code> | <code>string[]</code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack">slack</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]</code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email"></a>

```typescript
public readonly email: string[];
```

- *Type:* string[]

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#email UptimeAlert#email}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack"></a>

```typescript
public readonly slack: IResolvable | UptimeAlertNotificationsSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]

slack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#slack UptimeAlert#slack}

---

### UptimeAlertNotificationsSlack <a name="UptimeAlertNotificationsSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

const uptimeAlertNotificationsSlack: uptimeAlert.UptimeAlertNotificationsSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel">channel</a></code> | <code>string</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url">url</a></code> | <code>string</code> | The webhook URL for Slack. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#channel UptimeAlert#channel}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/uptime_alert#url UptimeAlert#url}

---

## Classes <a name="Classes" id="Classes"></a>

### UptimeAlertNotificationsList <a name="UptimeAlertNotificationsList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

new uptimeAlert.UptimeAlertNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get"></a>

```typescript
public get(index: number): UptimeAlertNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UptimeAlertNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>[]

---


### UptimeAlertNotificationsOutputReference <a name="UptimeAlertNotificationsOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

new uptimeAlert.UptimeAlertNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlack` <a name="putSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack"></a>

```typescript
public putSlack(value: IResolvable | UptimeAlertNotificationsSlack[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput">emailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput">slackInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email">email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack"></a>

```typescript
public readonly slack: UptimeAlertNotificationsSlackList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string[];
```

- *Type:* string[]

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | UptimeAlertNotificationsSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email"></a>

```typescript
public readonly email: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UptimeAlertNotifications | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a> | cdktf.IResolvable

---


### UptimeAlertNotificationsSlackList <a name="UptimeAlertNotificationsSlackList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

new uptimeAlert.UptimeAlertNotificationsSlackList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get"></a>

```typescript
public get(index: number): UptimeAlertNotificationsSlackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UptimeAlertNotificationsSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>[]

---


### UptimeAlertNotificationsSlackOutputReference <a name="UptimeAlertNotificationsSlackOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer"></a>

```typescript
import { uptimeAlert } from '@cdktf/provider-digitalocean'

new uptimeAlert.UptimeAlertNotificationsSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UptimeAlertNotificationsSlack | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a> | cdktf.IResolvable

---



