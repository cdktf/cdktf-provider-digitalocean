# `dataDigitaloceanPartnerAttachment` Submodule <a name="`dataDigitaloceanPartnerAttachment` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachment <a name="DataDigitaloceanPartnerAttachment" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachment;

DataDigitaloceanPartnerAttachment.Builder.create(Construct scope, java.lang.String id)
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
//  .bgp(DataDigitaloceanPartnerAttachmentBgp)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .redundancyZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `redundancyZone`<sup>Optional</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.redundancyZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone">resetRedundancyZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBgp` <a name="putBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp"></a>

```java
public void putBgp(DataDigitaloceanPartnerAttachmentBgp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `resetBgp` <a name="resetBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp"></a>

```java
public void resetBgp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName"></a>

```java
public void resetName()
```

##### `resetRedundancyZone` <a name="resetRedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone"></a>

```java
public void resetRedundancyZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachment;

DataDigitaloceanPartnerAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachment;

DataDigitaloceanPartnerAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachment;

DataDigitaloceanPartnerAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachment;

DataDigitaloceanPartnerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanPartnerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanPartnerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanPartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children">children</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps">connectionBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider">naasProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid">parentUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds">vpcIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput">bgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput">redundancyZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp"></a>

```java
public DataDigitaloceanPartnerAttachmentBgpOutputReference getBgp();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a>

---

##### `children`<sup>Required</sup> <a name="children" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children"></a>

```java
public java.util.List<java.lang.String> getChildren();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionBandwidthInMbps`<sup>Required</sup> <a name="connectionBandwidthInMbps" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps"></a>

```java
public java.lang.Number getConnectionBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `naasProvider`<sup>Required</sup> <a name="naasProvider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider"></a>

```java
public java.lang.String getNaasProvider();
```

- *Type:* java.lang.String

---

##### `parentUuid`<sup>Required</sup> <a name="parentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid"></a>

```java
public java.lang.String getParentUuid();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds"></a>

```java
public java.util.List<java.lang.String> getVpcIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput"></a>

```java
public DataDigitaloceanPartnerAttachmentBgp getBgpInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redundancyZoneInput`<sup>Optional</sup> <a name="redundancyZoneInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput"></a>

```java
public java.lang.String getRedundancyZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redundancyZone`<sup>Required</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone"></a>

```java
public java.lang.String getRedundancyZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentBgp <a name="DataDigitaloceanPartnerAttachmentBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachmentBgp;

DataDigitaloceanPartnerAttachmentBgp.builder()
//  .localRouterIp(java.lang.String)
//  .peerRouterAsn(java.lang.Number)
//  .peerRouterIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp">localRouterIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn">peerRouterAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp">peerRouterIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}. |

---

##### `localRouterIp`<sup>Optional</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp"></a>

```java
public java.lang.String getLocalRouterIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}.

---

##### `peerRouterAsn`<sup>Optional</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn"></a>

```java
public java.lang.Number getPeerRouterAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}.

---

##### `peerRouterIp`<sup>Optional</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp"></a>

```java
public java.lang.String getPeerRouterIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}.

---

### DataDigitaloceanPartnerAttachmentConfig <a name="DataDigitaloceanPartnerAttachmentConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachmentConfig;

DataDigitaloceanPartnerAttachmentConfig.builder()
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
//  .bgp(DataDigitaloceanPartnerAttachmentBgp)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .redundancyZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone">redundancyZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp"></a>

```java
public DataDigitaloceanPartnerAttachmentBgp getBgp();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `redundancyZone`<sup>Optional</sup> <a name="redundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone"></a>

```java
public java.lang.String getRedundancyZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanPartnerAttachmentBgpOutputReference <a name="DataDigitaloceanPartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_partner_attachment.DataDigitaloceanPartnerAttachmentBgpOutputReference;

new DataDigitaloceanPartnerAttachmentBgpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp">resetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn">resetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp">resetPeerRouterIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalRouterIp` <a name="resetLocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```java
public void resetLocalRouterIp()
```

##### `resetPeerRouterAsn` <a name="resetPeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```java
public void resetPeerRouterAsn()
```

##### `resetPeerRouterIp` <a name="resetPeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```java
public void resetPeerRouterIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput">localRouterIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">peerRouterAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput">peerRouterIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp">localRouterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn">peerRouterAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp">peerRouterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localRouterIpInput`<sup>Optional</sup> <a name="localRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```java
public java.lang.String getLocalRouterIpInput();
```

- *Type:* java.lang.String

---

##### `peerRouterAsnInput`<sup>Optional</sup> <a name="peerRouterAsnInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```java
public java.lang.Number getPeerRouterAsnInput();
```

- *Type:* java.lang.Number

---

##### `peerRouterIpInput`<sup>Optional</sup> <a name="peerRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```java
public java.lang.String getPeerRouterIpInput();
```

- *Type:* java.lang.String

---

##### `localRouterIp`<sup>Required</sup> <a name="localRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```java
public java.lang.String getLocalRouterIp();
```

- *Type:* java.lang.String

---

##### `peerRouterAsn`<sup>Required</sup> <a name="peerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```java
public java.lang.Number getPeerRouterAsn();
```

- *Type:* java.lang.Number

---

##### `peerRouterIp`<sup>Required</sup> <a name="peerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```java
public java.lang.String getPeerRouterIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanPartnerAttachmentBgp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---



