# `databaseMongodbConfig` Submodule <a name="`databaseMongodbConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMongodbConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMongodbConfig <a name="DatabaseMongodbConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config digitalocean_database_mongodb_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfig;

DatabaseMongodbConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .defaultReadConcern(java.lang.String)
//  .defaultWriteConcern(java.lang.String)
//  .id(java.lang.String)
//  .slowOpThresholdMs(java.lang.Number)
//  .transactionLifetimeLimitSeconds(java.lang.Number)
//  .verbosity(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.slowOpThresholdMs">slowOpThresholdMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.verbosity">verbosity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultReadConcern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultWriteConcern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `slowOpThresholdMs`<sup>Optional</sup> <a name="slowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.slowOpThresholdMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.transactionLifetimeLimitSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.verbosity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern">resetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern">resetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs">resetSlowOpThresholdMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds">resetTransactionLifetimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity">resetVerbosity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern"></a>

```java
public void resetDefaultReadConcern()
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern"></a>

```java
public void resetDefaultWriteConcern()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId"></a>

```java
public void resetId()
```

##### `resetSlowOpThresholdMs` <a name="resetSlowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs"></a>

```java
public void resetSlowOpThresholdMs()
```

##### `resetTransactionLifetimeLimitSeconds` <a name="resetTransactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds"></a>

```java
public void resetTransactionLifetimeLimitSeconds()
```

##### `resetVerbosity` <a name="resetVerbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity"></a>

```java
public void resetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfig;

DatabaseMongodbConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfig;

DatabaseMongodbConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfig;

DatabaseMongodbConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfig;

DatabaseMongodbConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMongodbConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMongodbConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMongodbConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMongodbConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput">slowOpThresholdMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput">transactionLifetimeLimitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput">verbosityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs">slowOpThresholdMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity">verbosity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput"></a>

```java
public java.lang.String getDefaultReadConcernInput();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput"></a>

```java
public java.lang.String getDefaultWriteConcernInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `slowOpThresholdMsInput`<sup>Optional</sup> <a name="slowOpThresholdMsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput"></a>

```java
public java.lang.Number getSlowOpThresholdMsInput();
```

- *Type:* java.lang.Number

---

##### `transactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="transactionLifetimeLimitSecondsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `verbosityInput`<sup>Optional</sup> <a name="verbosityInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput"></a>

```java
public java.lang.Number getVerbosityInput();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `slowOpThresholdMs`<sup>Required</sup> <a name="slowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs"></a>

```java
public java.lang.Number getSlowOpThresholdMs();
```

- *Type:* java.lang.Number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSeconds();
```

- *Type:* java.lang.Number

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity"></a>

```java
public java.lang.Number getVerbosity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMongodbConfigConfig <a name="DatabaseMongodbConfigConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mongodb_config.DatabaseMongodbConfigConfig;

DatabaseMongodbConfigConfig.builder()
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
//  .defaultReadConcern(java.lang.String)
//  .defaultWriteConcern(java.lang.String)
//  .id(java.lang.String)
//  .slowOpThresholdMs(java.lang.Number)
//  .transactionLifetimeLimitSeconds(java.lang.Number)
//  .verbosity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern">defaultReadConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs">slowOpThresholdMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity">verbosity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern"></a>

```java
public java.lang.String getDefaultReadConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern"></a>

```java
public java.lang.String getDefaultWriteConcern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `slowOpThresholdMs`<sup>Optional</sup> <a name="slowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs"></a>

```java
public java.lang.Number getSlowOpThresholdMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds"></a>

```java
public java.lang.Number getTransactionLifetimeLimitSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity"></a>

```java
public java.lang.Number getVerbosity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---



