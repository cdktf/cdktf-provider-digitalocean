# `partnerAttachment` Submodule <a name="`partnerAttachment` Submodule" id="@cdktf/provider-digitalocean.partnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PartnerAttachment <a name="PartnerAttachment" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachment;

PartnerAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionBandwidthInMbps(java.lang.Number)
    .naasProvider(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .vpcIds(java.util.List<java.lang.String>)
//  .bgp(PartnerAttachmentBgp)
//  .redundancyZone(java.lang.String)
//  .timeouts(PartnerAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>java.lang.Number</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.naasProvider">naasProvider</a></code> | <code>java.lang.String</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connectionBandwidthInMbps"></a>

- *Type:* java.lang.Number

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.naasProvider"></a>

- *Type:* java.lang.String

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.vpcIds"></a>

- *Type:* java.util.List<java.lang.String>

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `redundancyZone`<sup>Optional</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.redundancyZone"></a>

- *Type:* java.lang.String

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone">resetRedundancyZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgp` <a name="putBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp"></a>

```java
public void putBgp(PartnerAttachmentBgp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts"></a>

```java
public void putTimeouts(PartnerAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `resetBgp` <a name="resetBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp"></a>

```java
public void resetBgp()
```

##### `resetRedundancyZone` <a name="resetRedundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone"></a>

```java
public void resetRedundancyZone()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachment;

PartnerAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachment;

PartnerAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachment;

PartnerAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachment;

PartnerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PartnerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PartnerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput">bgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput">connectionBandwidthInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput">naasProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput">redundancyZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput">vpcIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider">naasProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp"></a>

```java
public PartnerAttachmentBgpOutputReference getBgp();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts"></a>

```java
public PartnerAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a>

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput"></a>

```java
public PartnerAttachmentBgp getBgpInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `connectionBandwidthInMbpsInput`<sup>Optional</sup> <a name="connectionBandwidthInMbpsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput"></a>

```java
public java.lang.Number getConnectionBandwidthInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `naasProviderInput`<sup>Optional</sup> <a name="naasProviderInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput"></a>

```java
public java.lang.String getNaasProviderInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redundancyZoneInput`<sup>Optional</sup> <a name="redundancyZoneInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput"></a>

```java
public java.lang.String getRedundancyZoneInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `vpcIdsInput`<sup>Optional</sup> <a name="vpcIdsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps"></a>

```java
public java.lang.Number getConnectionBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider"></a>

```java
public java.lang.String getNaasProvider();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redundancyZone`<sup>Required</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone"></a>

```java
public java.lang.String getRedundancyZone();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds"></a>

```java
public java.util.List<java.lang.String> getVpcIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PartnerAttachmentBgp <a name="PartnerAttachmentBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachmentBgp;

PartnerAttachmentBgp.builder()
//  .authKey(java.lang.String)
//  .localRouterIp(java.lang.String)
//  .peerRouterAsn(java.lang.Number)
//  .peerRouterIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey">authKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp">localRouterIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn">peerRouterAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp">peerRouterIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}. |

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}.

---

##### `localRouterIp`<sup>Optional</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp"></a>

```java
public java.lang.String getLocalRouterIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}.

---

##### `peerRouterAsn`<sup>Optional</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn"></a>

```java
public java.lang.Number getPeerRouterAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}.

---

##### `peerRouterIp`<sup>Optional</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp"></a>

```java
public java.lang.String getPeerRouterIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}.

---

### PartnerAttachmentConfig <a name="PartnerAttachmentConfig" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachmentConfig;

PartnerAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionBandwidthInMbps(java.lang.Number)
    .naasProvider(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
    .vpcIds(java.util.List<java.lang.String>)
//  .bgp(PartnerAttachmentBgp)
//  .redundancyZone(java.lang.String)
//  .timeouts(PartnerAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>java.lang.Number</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider">naasProvider</a></code> | <code>java.lang.String</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps"></a>

```java
public java.lang.Number getConnectionBandwidthInMbps();
```

- *Type:* java.lang.Number

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider"></a>

```java
public java.lang.String getNaasProvider();
```

- *Type:* java.lang.String

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds"></a>

```java
public java.util.List<java.lang.String> getVpcIds();
```

- *Type:* java.util.List<java.lang.String>

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp"></a>

```java
public PartnerAttachmentBgp getBgp();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `redundancyZone`<sup>Optional</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone"></a>

```java
public java.lang.String getRedundancyZone();
```

- *Type:* java.lang.String

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts"></a>

```java
public PartnerAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

### PartnerAttachmentTimeouts <a name="PartnerAttachmentTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachmentTimeouts;

PartnerAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#create PartnerAttachment#create}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#create PartnerAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PartnerAttachmentBgpOutputReference <a name="PartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachmentBgpOutputReference;

new PartnerAttachmentBgpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp">resetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn">resetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp">resetPeerRouterIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey"></a>

```java
public void resetAuthKey()
```

##### `resetLocalRouterIp` <a name="resetLocalRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```java
public void resetLocalRouterIp()
```

##### `resetPeerRouterAsn` <a name="resetPeerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```java
public void resetPeerRouterAsn()
```

##### `resetPeerRouterIp` <a name="resetPeerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```java
public void resetPeerRouterIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput">localRouterIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">peerRouterAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput">peerRouterIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey">authKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp">localRouterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn">peerRouterAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp">peerRouterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput"></a>

```java
public java.lang.String getAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `localRouterIpInput`<sup>Optional</sup> <a name="localRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```java
public java.lang.String getLocalRouterIpInput();
```

- *Type:* java.lang.String

---

##### `peerRouterAsnInput`<sup>Optional</sup> <a name="peerRouterAsnInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```java
public java.lang.Number getPeerRouterAsnInput();
```

- *Type:* java.lang.Number

---

##### `peerRouterIpInput`<sup>Optional</sup> <a name="peerRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```java
public java.lang.String getPeerRouterIpInput();
```

- *Type:* java.lang.String

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

---

##### `localRouterIp`<sup>Required</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```java
public java.lang.String getLocalRouterIp();
```

- *Type:* java.lang.String

---

##### `peerRouterAsn`<sup>Required</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```java
public java.lang.Number getPeerRouterAsn();
```

- *Type:* java.lang.Number

---

##### `peerRouterIp`<sup>Required</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```java
public java.lang.String getPeerRouterIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue"></a>

```java
public PartnerAttachmentBgp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---


### PartnerAttachmentTimeoutsOutputReference <a name="PartnerAttachmentTimeoutsOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.partner_attachment.PartnerAttachmentTimeoutsOutputReference;

new PartnerAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---



