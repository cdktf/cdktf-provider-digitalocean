# `dataDigitaloceanVolumeSnapshot` Submodule <a name="`dataDigitaloceanVolumeSnapshot` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanVolumeSnapshot <a name="DataDigitaloceanVolumeSnapshot" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot digitalocean_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshot;

DataDigitaloceanVolumeSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#id DataDigitaloceanVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#most_recent DataDigitaloceanVolumeSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name DataDigitaloceanVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name_regex DataDigitaloceanVolumeSnapshot#name_regex}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#region DataDigitaloceanVolumeSnapshot#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#id DataDigitaloceanVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#most_recent DataDigitaloceanVolumeSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name DataDigitaloceanVolumeSnapshot#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name_regex DataDigitaloceanVolumeSnapshot#name_regex}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#region DataDigitaloceanVolumeSnapshot#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetName"></a>

```java
public void resetName()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshot;

DataDigitaloceanVolumeSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshot;

DataDigitaloceanVolumeSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshot;

DataDigitaloceanVolumeSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshot;

DataDigitaloceanVolumeSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanVolumeSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanVolumeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.minDiskSize">minDiskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `minDiskSize`<sup>Required</sup> <a name="minDiskSize" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.minDiskSize"></a>

```java
public java.lang.Number getMinDiskSize();
```

- *Type:* java.lang.Number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanVolumeSnapshotConfig <a name="DataDigitaloceanVolumeSnapshotConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_volume_snapshot.DataDigitaloceanVolumeSnapshotConfig;

DataDigitaloceanVolumeSnapshotConfig.builder()
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
//  .id(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#id DataDigitaloceanVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#most_recent DataDigitaloceanVolumeSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name DataDigitaloceanVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name_regex DataDigitaloceanVolumeSnapshot#name_regex}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#region DataDigitaloceanVolumeSnapshot#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#id DataDigitaloceanVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#most_recent DataDigitaloceanVolumeSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name DataDigitaloceanVolumeSnapshot#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#name_regex DataDigitaloceanVolumeSnapshot#name_regex}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVolumeSnapshot.DataDigitaloceanVolumeSnapshotConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/data-sources/volume_snapshot#region DataDigitaloceanVolumeSnapshot#region}.

---



