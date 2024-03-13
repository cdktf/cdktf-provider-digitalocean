# `databaseRedisConfig` Submodule <a name="`databaseRedisConfig` Submodule" id="@cdktf/provider-digitalocean.databaseRedisConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseRedisConfig <a name="DatabaseRedisConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config digitalocean_database_redis_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfig;

DatabaseRedisConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .aclChannelsDefault(java.lang.String)
//  .id(java.lang.String)
//  .ioThreads(java.lang.Number)
//  .lfuDecayTime(java.lang.Number)
//  .lfuLogFactor(java.lang.Number)
//  .maxmemoryPolicy(java.lang.String)
//  .notifyKeyspaceEvents(java.lang.String)
//  .numberOfDatabases(java.lang.Number)
//  .persistence(java.lang.String)
//  .pubsubClientOutputBufferLimit(java.lang.Number)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
//  .timeout(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.persistence">persistence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `aclChannelsDefault`<sup>Optional</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.aclChannelsDefault"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioThreads`<sup>Optional</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ioThreads"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `lfuDecayTime`<sup>Optional</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuDecayTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `lfuLogFactor`<sup>Optional</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuLogFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `maxmemoryPolicy`<sup>Optional</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.maxmemoryPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.notifyKeyspaceEvents"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `numberOfDatabases`<sup>Optional</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.numberOfDatabases"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.persistence"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `pubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.pubsubClientOutputBufferLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ssl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault">resetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads">resetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime">resetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor">resetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy">resetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents">resetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases">resetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence">resetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit">resetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAclChannelsDefault` <a name="resetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault"></a>

```java
public void resetAclChannelsDefault()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIoThreads` <a name="resetIoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads"></a>

```java
public void resetIoThreads()
```

##### `resetLfuDecayTime` <a name="resetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime"></a>

```java
public void resetLfuDecayTime()
```

##### `resetLfuLogFactor` <a name="resetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor"></a>

```java
public void resetLfuLogFactor()
```

##### `resetMaxmemoryPolicy` <a name="resetMaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy"></a>

```java
public void resetMaxmemoryPolicy()
```

##### `resetNotifyKeyspaceEvents` <a name="resetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents"></a>

```java
public void resetNotifyKeyspaceEvents()
```

##### `resetNumberOfDatabases` <a name="resetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases"></a>

```java
public void resetNumberOfDatabases()
```

##### `resetPersistence` <a name="resetPersistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence"></a>

```java
public void resetPersistence()
```

##### `resetPubsubClientOutputBufferLimit` <a name="resetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit"></a>

```java
public void resetPubsubClientOutputBufferLimit()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout"></a>

```java
public void resetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfig;

DatabaseRedisConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfig;

DatabaseRedisConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfig;

DatabaseRedisConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfig;

DatabaseRedisConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseRedisConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseRedisConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseRedisConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseRedisConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput">aclChannelsDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput">ioThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput">lfuDecayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput">lfuLogFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput">maxmemoryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput">notifyKeyspaceEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput">numberOfDatabasesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput">persistenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput">pubsubClientOutputBufferLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence">persistence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclChannelsDefaultInput`<sup>Optional</sup> <a name="aclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput"></a>

```java
public java.lang.String getAclChannelsDefaultInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ioThreadsInput`<sup>Optional</sup> <a name="ioThreadsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput"></a>

```java
public java.lang.Number getIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `lfuDecayTimeInput`<sup>Optional</sup> <a name="lfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput"></a>

```java
public java.lang.Number getLfuDecayTimeInput();
```

- *Type:* java.lang.Number

---

##### `lfuLogFactorInput`<sup>Optional</sup> <a name="lfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput"></a>

```java
public java.lang.Number getLfuLogFactorInput();
```

- *Type:* java.lang.Number

---

##### `maxmemoryPolicyInput`<sup>Optional</sup> <a name="maxmemoryPolicyInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput"></a>

```java
public java.lang.String getMaxmemoryPolicyInput();
```

- *Type:* java.lang.String

---

##### `notifyKeyspaceEventsInput`<sup>Optional</sup> <a name="notifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput"></a>

```java
public java.lang.String getNotifyKeyspaceEventsInput();
```

- *Type:* java.lang.String

---

##### `numberOfDatabasesInput`<sup>Optional</sup> <a name="numberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput"></a>

```java
public java.lang.Number getNumberOfDatabasesInput();
```

- *Type:* java.lang.Number

---

##### `persistenceInput`<sup>Optional</sup> <a name="persistenceInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput"></a>

```java
public java.lang.String getPersistenceInput();
```

- *Type:* java.lang.String

---

##### `pubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimitInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `aclChannelsDefault`<sup>Required</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault"></a>

```java
public java.lang.String getAclChannelsDefault();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ioThreads`<sup>Required</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads"></a>

```java
public java.lang.Number getIoThreads();
```

- *Type:* java.lang.Number

---

##### `lfuDecayTime`<sup>Required</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime"></a>

```java
public java.lang.Number getLfuDecayTime();
```

- *Type:* java.lang.Number

---

##### `lfuLogFactor`<sup>Required</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor"></a>

```java
public java.lang.Number getLfuLogFactor();
```

- *Type:* java.lang.Number

---

##### `maxmemoryPolicy`<sup>Required</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy"></a>

```java
public java.lang.String getMaxmemoryPolicy();
```

- *Type:* java.lang.String

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

---

##### `numberOfDatabases`<sup>Required</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases"></a>

```java
public java.lang.Number getNumberOfDatabases();
```

- *Type:* java.lang.Number

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence"></a>

```java
public java.lang.String getPersistence();
```

- *Type:* java.lang.String

---

##### `pubsubClientOutputBufferLimit`<sup>Required</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseRedisConfigConfig <a name="DatabaseRedisConfigConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_redis_config.DatabaseRedisConfigConfig;

DatabaseRedisConfigConfig.builder()
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
//  .aclChannelsDefault(java.lang.String)
//  .id(java.lang.String)
//  .ioThreads(java.lang.Number)
//  .lfuDecayTime(java.lang.Number)
//  .lfuLogFactor(java.lang.Number)
//  .maxmemoryPolicy(java.lang.String)
//  .notifyKeyspaceEvents(java.lang.String)
//  .numberOfDatabases(java.lang.Number)
//  .persistence(java.lang.String)
//  .pubsubClientOutputBufferLimit(java.lang.Number)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence">persistence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `aclChannelsDefault`<sup>Optional</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault"></a>

```java
public java.lang.String getAclChannelsDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioThreads`<sup>Optional</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads"></a>

```java
public java.lang.Number getIoThreads();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `lfuDecayTime`<sup>Optional</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime"></a>

```java
public java.lang.Number getLfuDecayTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `lfuLogFactor`<sup>Optional</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor"></a>

```java
public java.lang.Number getLfuLogFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `maxmemoryPolicy`<sup>Optional</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy"></a>

```java
public java.lang.String getMaxmemoryPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `numberOfDatabases`<sup>Optional</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases"></a>

```java
public java.lang.Number getNumberOfDatabases();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence"></a>

```java
public java.lang.String getPersistence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `pubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.36.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---



