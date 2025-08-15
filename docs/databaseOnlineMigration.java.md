# `databaseOnlineMigration` Submodule <a name="`databaseOnlineMigration` Submodule" id="@cdktf/provider-digitalocean.databaseOnlineMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOnlineMigration <a name="DatabaseOnlineMigration" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration digitalocean_database_online_migration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigration;

DatabaseOnlineMigration.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .source(DatabaseOnlineMigrationSource)
//  .disableSsl(java.lang.Boolean)
//  .disableSsl(IResolvable)
//  .ignoreDbs(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.disableSsl">disableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.ignoreDbs">ignoreDbs</a></code> | <code>java.util.List<java.lang.String></code> | The list of databases to be ignored during the migration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `disableSsl`<sup>Optional</sup> <a name="disableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.disableSsl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.ignoreDbs"></a>

- *Type:* java.util.List<java.lang.String>

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl">resetDisableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource"></a>

```java
public void putSource(DatabaseOnlineMigrationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `resetDisableSsl` <a name="resetDisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl"></a>

```java
public void resetDisableSsl()
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs"></a>

```java
public void resetIgnoreDbs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigration;

DatabaseOnlineMigration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigration;

DatabaseOnlineMigration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigration;

DatabaseOnlineMigration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigration;

DatabaseOnlineMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseOnlineMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseOnlineMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseOnlineMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOnlineMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput">disableSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl">disableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source"></a>

```java
public DatabaseOnlineMigrationSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `disableSslInput`<sup>Optional</sup> <a name="disableSslInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput"></a>

```java
public java.lang.Object getDisableSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreDbsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput"></a>

```java
public DatabaseOnlineMigrationSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl"></a>

```java
public java.lang.Object getDisableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs"></a>

```java
public java.util.List<java.lang.String> getIgnoreDbs();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOnlineMigrationConfig <a name="DatabaseOnlineMigrationConfig" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigrationConfig;

DatabaseOnlineMigrationConfig.builder()
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
    .clusterId(java.lang.String)
    .source(DatabaseOnlineMigrationSource)
//  .disableSsl(java.lang.Boolean)
//  .disableSsl(IResolvable)
//  .ignoreDbs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl">disableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs">ignoreDbs</a></code> | <code>java.util.List<java.lang.String></code> | The list of databases to be ignored during the migration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source"></a>

```java
public DatabaseOnlineMigrationSource getSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `disableSsl`<sup>Optional</sup> <a name="disableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl"></a>

```java
public java.lang.Object getDisableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs"></a>

```java
public java.util.List<java.lang.String> getIgnoreDbs();
```

- *Type:* java.util.List<java.lang.String>

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

### DatabaseOnlineMigrationSource <a name="DatabaseOnlineMigrationSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigrationSource;

DatabaseOnlineMigrationSource.builder()
    .dbName(java.lang.String)
    .host(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName">dbName</a></code> | <code>java.lang.String</code> | The name of the default database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host">host</a></code> | <code>java.lang.String</code> | The FQDN pointing to the database cluster's current primary node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password">password</a></code> | <code>java.lang.String</code> | The password of the database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port">port</a></code> | <code>java.lang.Number</code> | The port on which the database cluster is listening. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username">username</a></code> | <code>java.lang.String</code> | The default user of the database. |

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOnlineMigrationSourceOutputReference <a name="DatabaseOnlineMigrationSourceOutputReference" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_online_migration.DatabaseOnlineMigrationSourceOutputReference;

new DatabaseOnlineMigrationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue"></a>

```java
public DatabaseOnlineMigrationSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---



