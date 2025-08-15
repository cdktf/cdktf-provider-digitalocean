# `dropletAutoscale` Submodule <a name="`dropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DropletAutoscale <a name="DropletAutoscale" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscale;

DropletAutoscale.Builder.create(Construct scope, java.lang.String id)
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
    .config(DropletAutoscaleConfigA)
    .dropletTemplate(DropletAutoscaleDropletTemplate)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dropletTemplate">dropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | droplet_template block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Droplet autoscale pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#config DropletAutoscale#config}

---

##### `dropletTemplate`<sup>Required</sup> <a name="dropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dropletTemplate"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

droplet_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#name DropletAutoscale#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate">putDropletTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig"></a>

```java
public void putConfig(DropletAutoscaleConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---

##### `putDropletTemplate` <a name="putDropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate"></a>

```java
public void putDropletTemplate(DropletAutoscaleDropletTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscale;

DropletAutoscale.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscale;

DropletAutoscale.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscale;

DropletAutoscale.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscale;

DropletAutoscale.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DropletAutoscale.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DropletAutoscale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization">currentUtilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate">dropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput">dropletTemplateInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config"></a>

```java
public DropletAutoscaleConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `currentUtilization`<sup>Required</sup> <a name="currentUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization"></a>

```java
public DropletAutoscaleCurrentUtilizationList getCurrentUtilization();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a>

---

##### `dropletTemplate`<sup>Required</sup> <a name="dropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate"></a>

```java
public DropletAutoscaleDropletTemplateOutputReference getDropletTemplate();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput"></a>

```java
public DropletAutoscaleConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---

##### `dropletTemplateInput`<sup>Optional</sup> <a name="dropletTemplateInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput"></a>

```java
public DropletAutoscaleDropletTemplate getDropletTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DropletAutoscaleConfig <a name="DropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleConfig;

DropletAutoscaleConfig.builder()
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
    .config(DropletAutoscaleConfigA)
    .dropletTemplate(DropletAutoscaleDropletTemplate)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate">dropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | droplet_template block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Droplet autoscale pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config"></a>

```java
public DropletAutoscaleConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#config DropletAutoscale#config}

---

##### `dropletTemplate`<sup>Required</sup> <a name="dropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate"></a>

```java
public DropletAutoscaleDropletTemplate getDropletTemplate();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

droplet_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#name DropletAutoscale#name}

---

### DropletAutoscaleConfigA <a name="DropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleConfigA;

DropletAutoscaleConfigA.builder()
//  .cooldownMinutes(java.lang.Number)
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .targetCpuUtilization(java.lang.Number)
//  .targetMemoryUtilization(java.lang.Number)
//  .targetNumberInstances(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes">cooldownMinutes</a></code> | <code>java.lang.Number</code> | Cooldown duration. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Max number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Min number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>java.lang.Number</code> | CPU target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization">targetMemoryUtilization</a></code> | <code>java.lang.Number</code> | Memory target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances">targetNumberInstances</a></code> | <code>java.lang.Number</code> | Target number of members. |

---

##### `cooldownMinutes`<sup>Optional</sup> <a name="cooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes"></a>

```java
public java.lang.Number getCooldownMinutes();
```

- *Type:* java.lang.Number

Cooldown duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#cooldown_minutes DropletAutoscale#cooldown_minutes}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Max number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#max_instances DropletAutoscale#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Min number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#min_instances DropletAutoscale#min_instances}

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization"></a>

```java
public java.lang.Number getTargetCpuUtilization();
```

- *Type:* java.lang.Number

CPU target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_cpu_utilization DropletAutoscale#target_cpu_utilization}

---

##### `targetMemoryUtilization`<sup>Optional</sup> <a name="targetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization"></a>

```java
public java.lang.Number getTargetMemoryUtilization();
```

- *Type:* java.lang.Number

Memory target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_memory_utilization DropletAutoscale#target_memory_utilization}

---

##### `targetNumberInstances`<sup>Optional</sup> <a name="targetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances"></a>

```java
public java.lang.Number getTargetNumberInstances();
```

- *Type:* java.lang.Number

Target number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_number_instances DropletAutoscale#target_number_instances}

---

### DropletAutoscaleCurrentUtilization <a name="DropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleCurrentUtilization;

DropletAutoscaleCurrentUtilization.builder()
    .build();
```


### DropletAutoscaleDropletTemplate <a name="DropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleDropletTemplate;

DropletAutoscaleDropletTemplate.builder()
    .image(java.lang.String)
    .region(java.lang.String)
    .size(java.lang.String)
    .sshKeys(java.util.List<java.lang.String>)
//  .ipv6(java.lang.Boolean)
//  .ipv6(IResolvable)
//  .projectId(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .userData(java.lang.String)
//  .vpcUuid(java.lang.String)
//  .withDropletAgent(java.lang.Boolean)
//  .withDropletAgent(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image">image</a></code> | <code>java.lang.String</code> | Droplet image. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region">region</a></code> | <code>java.lang.String</code> | Droplet region. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size">size</a></code> | <code>java.lang.String</code> | Droplet size. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Droplet SSH keys. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6">ipv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable droplet IPv6. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Droplet project ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Droplet tags. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData">userData</a></code> | <code>java.lang.String</code> | Droplet user data. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | Droplet VPC UUID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent">withDropletAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable droplet agent. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Droplet image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#image DropletAutoscale#image}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Droplet region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#region DropletAutoscale#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Droplet size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#size DropletAutoscale#size}

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Droplet SSH keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#ssh_keys DropletAutoscale#ssh_keys}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6"></a>

```java
public java.lang.Object getIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable droplet IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#ipv6 DropletAutoscale#ipv6}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Droplet project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#project_id DropletAutoscale#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Droplet tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#tags DropletAutoscale#tags}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Droplet user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#user_data DropletAutoscale#user_data}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

Droplet VPC UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#vpc_uuid DropletAutoscale#vpc_uuid}

---

##### `withDropletAgent`<sup>Optional</sup> <a name="withDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent"></a>

```java
public java.lang.Object getWithDropletAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable droplet agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#with_droplet_agent DropletAutoscale#with_droplet_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DropletAutoscaleConfigAOutputReference <a name="DropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleConfigAOutputReference;

new DropletAutoscaleConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes">resetCooldownMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization">resetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization">resetTargetMemoryUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances">resetTargetNumberInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownMinutes` <a name="resetCooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes"></a>

```java
public void resetCooldownMinutes()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetTargetCpuUtilization` <a name="resetTargetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization"></a>

```java
public void resetTargetCpuUtilization()
```

##### `resetTargetMemoryUtilization` <a name="resetTargetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization"></a>

```java
public void resetTargetMemoryUtilization()
```

##### `resetTargetNumberInstances` <a name="resetTargetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances"></a>

```java
public void resetTargetNumberInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput">cooldownMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput">targetCpuUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput">targetMemoryUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput">targetNumberInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes">cooldownMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">targetMemoryUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances">targetNumberInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cooldownMinutesInput`<sup>Optional</sup> <a name="cooldownMinutesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput"></a>

```java
public java.lang.Number getCooldownMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `targetCpuUtilizationInput`<sup>Optional</sup> <a name="targetCpuUtilizationInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput"></a>

```java
public java.lang.Number getTargetCpuUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `targetMemoryUtilizationInput`<sup>Optional</sup> <a name="targetMemoryUtilizationInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput"></a>

```java
public java.lang.Number getTargetMemoryUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `targetNumberInstancesInput`<sup>Optional</sup> <a name="targetNumberInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput"></a>

```java
public java.lang.Number getTargetNumberInstancesInput();
```

- *Type:* java.lang.Number

---

##### `cooldownMinutes`<sup>Required</sup> <a name="cooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```java
public java.lang.Number getCooldownMinutes();
```

- *Type:* java.lang.Number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `targetCpuUtilization`<sup>Required</sup> <a name="targetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```java
public java.lang.Number getTargetCpuUtilization();
```

- *Type:* java.lang.Number

---

##### `targetMemoryUtilization`<sup>Required</sup> <a name="targetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```java
public java.lang.Number getTargetMemoryUtilization();
```

- *Type:* java.lang.Number

---

##### `targetNumberInstances`<sup>Required</sup> <a name="targetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```java
public java.lang.Number getTargetNumberInstances();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```java
public DropletAutoscaleConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---


### DropletAutoscaleCurrentUtilizationList <a name="DropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleCurrentUtilizationList;

new DropletAutoscaleCurrentUtilizationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get"></a>

```java
public DropletAutoscaleCurrentUtilizationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DropletAutoscaleCurrentUtilizationOutputReference <a name="DropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleCurrentUtilizationOutputReference;

new DropletAutoscaleCurrentUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```java
public DropletAutoscaleCurrentUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a>

---


### DropletAutoscaleDropletTemplateOutputReference <a name="DropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.droplet_autoscale.DropletAutoscaleDropletTemplateOutputReference;

new DropletAutoscaleDropletTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent">resetWithDropletAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid"></a>

```java
public void resetVpcUuid()
```

##### `resetWithDropletAgent` <a name="resetWithDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent"></a>

```java
public void resetWithDropletAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput">vpcUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput">withDropletAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">withDropletAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput"></a>

```java
public java.lang.String getVpcUuidInput();
```

- *Type:* java.lang.String

---

##### `withDropletAgentInput`<sup>Optional</sup> <a name="withDropletAgentInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput"></a>

```java
public java.lang.Object getWithDropletAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```java
public java.lang.Object getIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

##### `withDropletAgent`<sup>Required</sup> <a name="withDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```java
public java.lang.Object getWithDropletAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```java
public DropletAutoscaleDropletTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---



