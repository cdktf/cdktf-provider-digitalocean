# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-digitalocean.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster digitalocean_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesCluster(scope: Construct, id: string, config: KubernetesClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDeviceMetricsExporterPlugin">putAmdGpuDeviceMetricsExporterPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDevicePlugin">putAmdGpuDevicePlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration">putClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall">putControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool">putNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent">putRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAmdGpuDeviceMetricsExporterPlugin">resetAmdGpuDeviceMetricsExporterPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAmdGpuDevicePlugin">resetAmdGpuDevicePlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration">resetClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet">resetClusterSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall">resetControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources">resetDestroyAllAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa">resetHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds">resetKubeconfigExpireSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration">resetRegistryIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent">resetRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet">resetServiceSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade">resetSurgeUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAmdGpuDeviceMetricsExporterPlugin` <a name="putAmdGpuDeviceMetricsExporterPlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDeviceMetricsExporterPlugin"></a>

```typescript
public putAmdGpuDeviceMetricsExporterPlugin(value: KubernetesClusterAmdGpuDeviceMetricsExporterPlugin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDeviceMetricsExporterPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a>

---

##### `putAmdGpuDevicePlugin` <a name="putAmdGpuDevicePlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDevicePlugin"></a>

```typescript
public putAmdGpuDevicePlugin(value: KubernetesClusterAmdGpuDevicePlugin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putAmdGpuDevicePlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a>

---

##### `putClusterAutoscalerConfiguration` <a name="putClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration"></a>

```typescript
public putClusterAutoscalerConfiguration(value: IResolvable | KubernetesClusterClusterAutoscalerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]

---

##### `putControlPlaneFirewall` <a name="putControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall"></a>

```typescript
public putControlPlaneFirewall(value: KubernetesClusterControlPlaneFirewall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: KubernetesClusterMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `putNodePool` <a name="putNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool"></a>

```typescript
public putNodePool(value: KubernetesClusterNodePool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `putRoutingAgent` <a name="putRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent"></a>

```typescript
public putRoutingAgent(value: KubernetesClusterRoutingAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---

##### `resetAmdGpuDeviceMetricsExporterPlugin` <a name="resetAmdGpuDeviceMetricsExporterPlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAmdGpuDeviceMetricsExporterPlugin"></a>

```typescript
public resetAmdGpuDeviceMetricsExporterPlugin(): void
```

##### `resetAmdGpuDevicePlugin` <a name="resetAmdGpuDevicePlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAmdGpuDevicePlugin"></a>

```typescript
public resetAmdGpuDevicePlugin(): void
```

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade"></a>

```typescript
public resetAutoUpgrade(): void
```

##### `resetClusterAutoscalerConfiguration` <a name="resetClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration"></a>

```typescript
public resetClusterAutoscalerConfiguration(): void
```

##### `resetClusterSubnet` <a name="resetClusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet"></a>

```typescript
public resetClusterSubnet(): void
```

##### `resetControlPlaneFirewall` <a name="resetControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall"></a>

```typescript
public resetControlPlaneFirewall(): void
```

##### `resetDestroyAllAssociatedResources` <a name="resetDestroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources"></a>

```typescript
public resetDestroyAllAssociatedResources(): void
```

##### `resetHa` <a name="resetHa" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa"></a>

```typescript
public resetHa(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubeconfigExpireSeconds` <a name="resetKubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds"></a>

```typescript
public resetKubeconfigExpireSeconds(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetRegistryIntegration` <a name="resetRegistryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration"></a>

```typescript
public resetRegistryIntegration(): void
```

##### `resetRoutingAgent` <a name="resetRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent"></a>

```typescript
public resetRoutingAgent(): void
```

##### `resetServiceSubnet` <a name="resetServiceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet"></a>

```typescript
public resetServiceSubnet(): void
```

##### `resetSurgeUpgrade` <a name="resetSurgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade"></a>

```typescript
public resetSurgeUpgrade(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid"></a>

```typescript
public resetVpcUuid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

kubernetesCluster.KubernetesCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

kubernetesCluster.KubernetesCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

kubernetesCluster.KubernetesCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

kubernetesCluster.KubernetesCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDeviceMetricsExporterPlugin">amdGpuDeviceMetricsExporterPlugin</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference">KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDevicePlugin">amdGpuDevicePlugin</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference">KubernetesClusterAmdGpuDevicePluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration">clusterAutoscalerConfiguration</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall">controlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent">routingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDeviceMetricsExporterPluginInput">amdGpuDeviceMetricsExporterPluginInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDevicePluginInput">amdGpuDevicePluginInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput">clusterAutoscalerConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput">clusterSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput">controlPlaneFirewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput">destroyAllAssociatedResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput">haInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput">kubeconfigExpireSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput">nodePoolInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput">registryIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput">routingAgentInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput">serviceSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput">surgeUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput">vpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet">clusterSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources">destroyAllAssociatedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha">ha</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds">kubeconfigExpireSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration">registryIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet">serviceSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade">surgeUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amdGpuDeviceMetricsExporterPlugin`<sup>Required</sup> <a name="amdGpuDeviceMetricsExporterPlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDeviceMetricsExporterPlugin"></a>

```typescript
public readonly amdGpuDeviceMetricsExporterPlugin: KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference">KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference</a>

---

##### `amdGpuDevicePlugin`<sup>Required</sup> <a name="amdGpuDevicePlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDevicePlugin"></a>

```typescript
public readonly amdGpuDevicePlugin: KubernetesClusterAmdGpuDevicePluginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference">KubernetesClusterAmdGpuDevicePluginOutputReference</a>

---

##### `clusterAutoscalerConfiguration`<sup>Required</sup> <a name="clusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration"></a>

```typescript
public readonly clusterAutoscalerConfiguration: KubernetesClusterClusterAutoscalerConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a>

---

##### `controlPlaneFirewall`<sup>Required</sup> <a name="controlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall"></a>

```typescript
public readonly controlPlaneFirewall: KubernetesClusterControlPlaneFirewallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig"></a>

```typescript
public readonly kubeConfig: KubernetesClusterKubeConfigList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: KubernetesClusterMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a>

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool"></a>

```typescript
public readonly nodePool: KubernetesClusterNodePoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a>

---

##### `routingAgent`<sup>Required</sup> <a name="routingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent"></a>

```typescript
public readonly routingAgent: KubernetesClusterRoutingAgentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `amdGpuDeviceMetricsExporterPluginInput`<sup>Optional</sup> <a name="amdGpuDeviceMetricsExporterPluginInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDeviceMetricsExporterPluginInput"></a>

```typescript
public readonly amdGpuDeviceMetricsExporterPluginInput: KubernetesClusterAmdGpuDeviceMetricsExporterPlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a>

---

##### `amdGpuDevicePluginInput`<sup>Optional</sup> <a name="amdGpuDevicePluginInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.amdGpuDevicePluginInput"></a>

```typescript
public readonly amdGpuDevicePluginInput: KubernetesClusterAmdGpuDevicePlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a>

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput"></a>

```typescript
public readonly autoUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterAutoscalerConfigurationInput`<sup>Optional</sup> <a name="clusterAutoscalerConfigurationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput"></a>

```typescript
public readonly clusterAutoscalerConfigurationInput: IResolvable | KubernetesClusterClusterAutoscalerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]

---

##### `clusterSubnetInput`<sup>Optional</sup> <a name="clusterSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput"></a>

```typescript
public readonly clusterSubnetInput: string;
```

- *Type:* string

---

##### `controlPlaneFirewallInput`<sup>Optional</sup> <a name="controlPlaneFirewallInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput"></a>

```typescript
public readonly controlPlaneFirewallInput: KubernetesClusterControlPlaneFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `destroyAllAssociatedResourcesInput`<sup>Optional</sup> <a name="destroyAllAssociatedResourcesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput"></a>

```typescript
public readonly destroyAllAssociatedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haInput`<sup>Optional</sup> <a name="haInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput"></a>

```typescript
public readonly haInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubeconfigExpireSecondsInput`<sup>Optional</sup> <a name="kubeconfigExpireSecondsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput"></a>

```typescript
public readonly kubeconfigExpireSecondsInput: number;
```

- *Type:* number

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: KubernetesClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePoolInput`<sup>Optional</sup> <a name="nodePoolInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput"></a>

```typescript
public readonly nodePoolInput: KubernetesClusterNodePool;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryIntegrationInput`<sup>Optional</sup> <a name="registryIntegrationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput"></a>

```typescript
public readonly registryIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routingAgentInput`<sup>Optional</sup> <a name="routingAgentInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput"></a>

```typescript
public readonly routingAgentInput: KubernetesClusterRoutingAgent;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `serviceSubnetInput`<sup>Optional</sup> <a name="serviceSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput"></a>

```typescript
public readonly serviceSubnetInput: string;
```

- *Type:* string

---

##### `surgeUpgradeInput`<sup>Optional</sup> <a name="surgeUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput"></a>

```typescript
public readonly surgeUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput"></a>

```typescript
public readonly vpcUuidInput: string;
```

- *Type:* string

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterSubnet`<sup>Required</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet"></a>

```typescript
public readonly clusterSubnet: string;
```

- *Type:* string

---

##### `destroyAllAssociatedResources`<sup>Required</sup> <a name="destroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources"></a>

```typescript
public readonly destroyAllAssociatedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ha`<sup>Required</sup> <a name="ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha"></a>

```typescript
public readonly ha: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubeconfigExpireSeconds`<sup>Required</sup> <a name="kubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds"></a>

```typescript
public readonly kubeconfigExpireSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryIntegration`<sup>Required</sup> <a name="registryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration"></a>

```typescript
public readonly registryIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceSubnet`<sup>Required</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet"></a>

```typescript
public readonly serviceSubnet: string;
```

- *Type:* string

---

##### `surgeUpgrade`<sup>Required</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade"></a>

```typescript
public readonly surgeUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterAmdGpuDeviceMetricsExporterPlugin <a name="KubernetesClusterAmdGpuDeviceMetricsExporterPlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterAmdGpuDeviceMetricsExporterPlugin: kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterAmdGpuDevicePlugin <a name="KubernetesClusterAmdGpuDevicePlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterAmdGpuDevicePlugin: kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterClusterAutoscalerConfiguration <a name="KubernetesClusterClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterClusterAutoscalerConfiguration: kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.expanders">expanders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#expanders KubernetesCluster#expanders}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime">scaleDownUnneededTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold">scaleDownUtilizationThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}. |

---

##### `expanders`<sup>Optional</sup> <a name="expanders" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.expanders"></a>

```typescript
public readonly expanders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#expanders KubernetesCluster#expanders}.

---

##### `scaleDownUnneededTime`<sup>Optional</sup> <a name="scaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime"></a>

```typescript
public readonly scaleDownUnneededTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}.

---

##### `scaleDownUtilizationThreshold`<sup>Optional</sup> <a name="scaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold"></a>

```typescript
public readonly scaleDownUtilizationThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}.

---

### KubernetesClusterConfig <a name="KubernetesClusterConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterConfig: kubernetesCluster.KubernetesClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | node_pool block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.amdGpuDeviceMetricsExporterPlugin">amdGpuDeviceMetricsExporterPlugin</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a></code> | amd_gpu_device_metrics_exporter_plugin block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.amdGpuDevicePlugin">amdGpuDevicePlugin</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a></code> | amd_gpu_device_plugin block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration">clusterAutoscalerConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]</code> | cluster_autoscaler_configuration block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet">clusterSubnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall">controlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | control_plane_firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources">destroyAllAssociatedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha">ha</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds">kubeconfigExpireSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration">registryIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent">routingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | routing_agent block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet">serviceSubnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade">surgeUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid">vpcUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool"></a>

```typescript
public readonly nodePool: KubernetesClusterNodePool;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

node_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#node_pool KubernetesCluster#node_pool}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}.

---

##### `amdGpuDeviceMetricsExporterPlugin`<sup>Optional</sup> <a name="amdGpuDeviceMetricsExporterPlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.amdGpuDeviceMetricsExporterPlugin"></a>

```typescript
public readonly amdGpuDeviceMetricsExporterPlugin: KubernetesClusterAmdGpuDeviceMetricsExporterPlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a>

amd_gpu_device_metrics_exporter_plugin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#amd_gpu_device_metrics_exporter_plugin KubernetesCluster#amd_gpu_device_metrics_exporter_plugin}

---

##### `amdGpuDevicePlugin`<sup>Optional</sup> <a name="amdGpuDevicePlugin" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.amdGpuDevicePlugin"></a>

```typescript
public readonly amdGpuDevicePlugin: KubernetesClusterAmdGpuDevicePlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a>

amd_gpu_device_plugin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#amd_gpu_device_plugin KubernetesCluster#amd_gpu_device_plugin}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}.

---

##### `clusterAutoscalerConfiguration`<sup>Optional</sup> <a name="clusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration"></a>

```typescript
public readonly clusterAutoscalerConfiguration: IResolvable | KubernetesClusterClusterAutoscalerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]

cluster_autoscaler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#cluster_autoscaler_configuration KubernetesCluster#cluster_autoscaler_configuration}

---

##### `clusterSubnet`<sup>Optional</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet"></a>

```typescript
public readonly clusterSubnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}.

---

##### `controlPlaneFirewall`<sup>Optional</sup> <a name="controlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall"></a>

```typescript
public readonly controlPlaneFirewall: KubernetesClusterControlPlaneFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

control_plane_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#control_plane_firewall KubernetesCluster#control_plane_firewall}

---

##### `destroyAllAssociatedResources`<sup>Optional</sup> <a name="destroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources"></a>

```typescript
public readonly destroyAllAssociatedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}.

---

##### `ha`<sup>Optional</sup> <a name="ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha"></a>

```typescript
public readonly ha: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeconfigExpireSeconds`<sup>Optional</sup> <a name="kubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds"></a>

```typescript
public readonly kubeconfigExpireSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}.

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: KubernetesClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}

---

##### `registryIntegration`<sup>Optional</sup> <a name="registryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration"></a>

```typescript
public readonly registryIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}.

---

##### `routingAgent`<sup>Optional</sup> <a name="routingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent"></a>

```typescript
public readonly routingAgent: KubernetesClusterRoutingAgent;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

routing_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#routing_agent KubernetesCluster#routing_agent}

---

##### `serviceSubnet`<sup>Optional</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet"></a>

```typescript
public readonly serviceSubnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}.

---

##### `surgeUpgrade`<sup>Optional</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade"></a>

```typescript
public readonly surgeUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid"></a>

```typescript
public readonly vpcUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}.

---

### KubernetesClusterControlPlaneFirewall <a name="KubernetesClusterControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterControlPlaneFirewall: kubernetesCluster.KubernetesClusterControlPlaneFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses">allowedAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `allowedAddresses`<sup>Required</sup> <a name="allowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses"></a>

```typescript
public readonly allowedAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterKubeConfig <a name="KubernetesClusterKubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterKubeConfig: kubernetesCluster.KubernetesClusterKubeConfig = { ... }
```


### KubernetesClusterMaintenancePolicy <a name="KubernetesClusterMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterMaintenancePolicy: kubernetesCluster.KubernetesClusterMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}.

---

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterNodePool: kubernetesCluster.KubernetesClusterNodePool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale">autoScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes">maxNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes">minNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint">taint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]</code> | taint block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}.

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale"></a>

```typescript
public readonly autoScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}.

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}.

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint"></a>

```typescript
public readonly taint: IResolvable | KubernetesClusterNodePoolTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#taint KubernetesCluster#taint}

---

### KubernetesClusterNodePoolNodes <a name="KubernetesClusterNodePoolNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterNodePoolNodes: kubernetesCluster.KubernetesClusterNodePoolNodes = { ... }
```


### KubernetesClusterNodePoolTaint <a name="KubernetesClusterNodePoolTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterNodePoolTaint: kubernetesCluster.KubernetesClusterNodePoolTaint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}.

---

### KubernetesClusterRoutingAgent <a name="KubernetesClusterRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterRoutingAgent: kubernetesCluster.KubernetesClusterRoutingAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterTimeouts <a name="KubernetesClusterTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

const kubernetesClusterTimeouts: kubernetesCluster.KubernetesClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference <a name="KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterAmdGpuDeviceMetricsExporterPlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDeviceMetricsExporterPlugin">KubernetesClusterAmdGpuDeviceMetricsExporterPlugin</a>

---


### KubernetesClusterAmdGpuDevicePluginOutputReference <a name="KubernetesClusterAmdGpuDevicePluginOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterAmdGpuDevicePlugin;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterAmdGpuDevicePlugin">KubernetesClusterAmdGpuDevicePlugin</a>

---


### KubernetesClusterClusterAutoscalerConfigurationList <a name="KubernetesClusterClusterAutoscalerConfigurationList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get"></a>

```typescript
public get(index: number): KubernetesClusterClusterAutoscalerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterClusterAutoscalerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>[]

---


### KubernetesClusterClusterAutoscalerConfigurationOutputReference <a name="KubernetesClusterClusterAutoscalerConfigurationOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetExpanders">resetExpanders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime">resetScaleDownUnneededTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold">resetScaleDownUtilizationThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpanders` <a name="resetExpanders" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetExpanders"></a>

```typescript
public resetExpanders(): void
```

##### `resetScaleDownUnneededTime` <a name="resetScaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime"></a>

```typescript
public resetScaleDownUnneededTime(): void
```

##### `resetScaleDownUtilizationThreshold` <a name="resetScaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold"></a>

```typescript
public resetScaleDownUtilizationThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.expandersInput">expandersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput">scaleDownUnneededTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput">scaleDownUtilizationThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.expanders">expanders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime">scaleDownUnneededTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold">scaleDownUtilizationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expandersInput`<sup>Optional</sup> <a name="expandersInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.expandersInput"></a>

```typescript
public readonly expandersInput: string[];
```

- *Type:* string[]

---

##### `scaleDownUnneededTimeInput`<sup>Optional</sup> <a name="scaleDownUnneededTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput"></a>

```typescript
public readonly scaleDownUnneededTimeInput: string;
```

- *Type:* string

---

##### `scaleDownUtilizationThresholdInput`<sup>Optional</sup> <a name="scaleDownUtilizationThresholdInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput"></a>

```typescript
public readonly scaleDownUtilizationThresholdInput: number;
```

- *Type:* number

---

##### `expanders`<sup>Required</sup> <a name="expanders" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.expanders"></a>

```typescript
public readonly expanders: string[];
```

- *Type:* string[]

---

##### `scaleDownUnneededTime`<sup>Required</sup> <a name="scaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime"></a>

```typescript
public readonly scaleDownUnneededTime: string;
```

- *Type:* string

---

##### `scaleDownUtilizationThreshold`<sup>Required</sup> <a name="scaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold"></a>

```typescript
public readonly scaleDownUtilizationThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterClusterAutoscalerConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>

---


### KubernetesClusterControlPlaneFirewallOutputReference <a name="KubernetesClusterControlPlaneFirewallOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput">allowedAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses">allowedAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAddressesInput`<sup>Optional</sup> <a name="allowedAddressesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput"></a>

```typescript
public readonly allowedAddressesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedAddresses`<sup>Required</sup> <a name="allowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses"></a>

```typescript
public readonly allowedAddresses: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterControlPlaneFirewall;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---


### KubernetesClusterKubeConfigList <a name="KubernetesClusterKubeConfigList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterKubeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get"></a>

```typescript
public get(index: number): KubernetesClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KubernetesClusterKubeConfigOutputReference <a name="KubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterKubeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig">rawConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `rawConfig`<sup>Required</sup> <a name="rawConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig"></a>

```typescript
public readonly rawConfig: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterKubeConfig;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a>

---


### KubernetesClusterMaintenancePolicyOutputReference <a name="KubernetesClusterMaintenancePolicyOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---


### KubernetesClusterNodePoolNodesList <a name="KubernetesClusterNodePoolNodesList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterNodePoolNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get"></a>

```typescript
public get(index: number): KubernetesClusterNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KubernetesClusterNodePoolNodesOutputReference <a name="KubernetesClusterNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId">dropletId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dropletId`<sup>Required</sup> <a name="dropletId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId"></a>

```typescript
public readonly dropletId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterNodePoolNodes;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a>

---


### KubernetesClusterNodePoolOutputReference <a name="KubernetesClusterNodePoolOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterNodePoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale">resetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint">resetTaint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaint` <a name="putTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint"></a>

```typescript
public putTaint(value: IResolvable | KubernetesClusterNodePoolTaint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]

---

##### `resetAutoScale` <a name="resetAutoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale"></a>

```typescript
public resetAutoScale(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes"></a>

```typescript
public resetMaxNodes(): void
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes"></a>

```typescript
public resetMinNodes(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint"></a>

```typescript
public resetTaint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount">actualNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput">autoScaleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput">taintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale">autoScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualNodeCount`<sup>Required</sup> <a name="actualNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount"></a>

```typescript
public readonly actualNodeCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes"></a>

```typescript
public readonly nodes: KubernetesClusterNodePoolNodesList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint"></a>

```typescript
public readonly taint: KubernetesClusterNodePoolTaintList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a>

---

##### `autoScaleInput`<sup>Optional</sup> <a name="autoScaleInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput"></a>

```typescript
public readonly autoScaleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput"></a>

```typescript
public readonly taintInput: IResolvable | KubernetesClusterNodePoolTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale"></a>

```typescript
public readonly autoScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterNodePool;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---


### KubernetesClusterNodePoolTaintList <a name="KubernetesClusterNodePoolTaintList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterNodePoolTaintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get"></a>

```typescript
public get(index: number): KubernetesClusterNodePoolTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterNodePoolTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>[]

---


### KubernetesClusterNodePoolTaintOutputReference <a name="KubernetesClusterNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterNodePoolTaint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>

---


### KubernetesClusterRoutingAgentOutputReference <a name="KubernetesClusterRoutingAgentOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterRoutingAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterRoutingAgent;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---


### KubernetesClusterTimeoutsOutputReference <a name="KubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesCluster } from '@cdktf/provider-digitalocean'

new kubernetesCluster.KubernetesClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---



