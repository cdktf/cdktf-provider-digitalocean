# `databaseValkeyConfig` Submodule <a name="`databaseValkeyConfig` Submodule" id="@cdktf/provider-digitalocean.databaseValkeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseValkeyConfig <a name="DatabaseValkeyConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config digitalocean_database_valkey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfig;

DatabaseValkeyConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .aclChannelsDefault(java.lang.String)
//  .frequentSnapshots(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ioThreads(java.lang.Number)
//  .lfuDecayTime(java.lang.Number)
//  .lfuLogFactor(java.lang.Number)
//  .notifyKeyspaceEvents(java.lang.String)
//  .numberOfDatabases(java.lang.Number)
//  .persistence(java.lang.String)
//  .pubsubClientOutputBufferLimit(java.lang.Number)
//  .ssl(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .valkeyActiveExpireEffort(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.frequentSnapshots">frequentSnapshots</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.persistence">persistence</a></code> | <code>java.lang.String</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ssl">ssl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.valkeyActiveExpireEffort">valkeyActiveExpireEffort</a></code> | <code>java.lang.Number</code> | Active expire effort. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `aclChannelsDefault`<sup>Optional</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.aclChannelsDefault"></a>

- *Type:* java.lang.String

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `frequentSnapshots`<sup>Optional</sup> <a name="frequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.frequentSnapshots"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioThreads`<sup>Optional</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ioThreads"></a>

- *Type:* java.lang.Number

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `lfuDecayTime`<sup>Optional</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuDecayTime"></a>

- *Type:* java.lang.Number

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `lfuLogFactor`<sup>Optional</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuLogFactor"></a>

- *Type:* java.lang.Number

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.notifyKeyspaceEvents"></a>

- *Type:* java.lang.String

Set notify-keyspace-events option.

Requires at least K or E and accepts any combination of the following options. Setting the parameter to "" disables notifications.

K — Keyspace events
E — Keyevent events
g — Generic commands (e.g. DEL, EXPIRE, RENAME, ...)
$ — String commands
l — List commands
s — Set commands
h — Hash commands
z — Sorted set commands
t — Stream commands
d — Module key type events
x — Expired events
e — Evicted events
m — Key miss events
n — New key events
A — Alias for "g$lshztxed"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `numberOfDatabases`<sup>Optional</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.numberOfDatabases"></a>

- *Type:* java.lang.Number

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.persistence"></a>

- *Type:* java.lang.String

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `pubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.pubsubClientOutputBufferLimit"></a>

- *Type:* java.lang.Number

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ssl"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `valkeyActiveExpireEffort`<sup>Optional</sup> <a name="valkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.valkeyActiveExpireEffort"></a>

- *Type:* java.lang.Number

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault">resetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots">resetFrequentSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads">resetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime">resetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor">resetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents">resetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases">resetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence">resetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit">resetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort">resetValkeyActiveExpireEffort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAclChannelsDefault` <a name="resetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault"></a>

```java
public void resetAclChannelsDefault()
```

##### `resetFrequentSnapshots` <a name="resetFrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots"></a>

```java
public void resetFrequentSnapshots()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIoThreads` <a name="resetIoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads"></a>

```java
public void resetIoThreads()
```

##### `resetLfuDecayTime` <a name="resetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime"></a>

```java
public void resetLfuDecayTime()
```

##### `resetLfuLogFactor` <a name="resetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor"></a>

```java
public void resetLfuLogFactor()
```

##### `resetNotifyKeyspaceEvents` <a name="resetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents"></a>

```java
public void resetNotifyKeyspaceEvents()
```

##### `resetNumberOfDatabases` <a name="resetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases"></a>

```java
public void resetNumberOfDatabases()
```

##### `resetPersistence` <a name="resetPersistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence"></a>

```java
public void resetPersistence()
```

##### `resetPubsubClientOutputBufferLimit` <a name="resetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit"></a>

```java
public void resetPubsubClientOutputBufferLimit()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetValkeyActiveExpireEffort` <a name="resetValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort"></a>

```java
public void resetValkeyActiveExpireEffort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfig;

DatabaseValkeyConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfig;

DatabaseValkeyConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfig;

DatabaseValkeyConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfig;

DatabaseValkeyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseValkeyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseValkeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseValkeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseValkeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput">aclChannelsDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput">frequentSnapshotsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput">ioThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput">lfuDecayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput">lfuLogFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput">notifyKeyspaceEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput">numberOfDatabasesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput">persistenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput">pubsubClientOutputBufferLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput">valkeyActiveExpireEffortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots">frequentSnapshots</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence">persistence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl">ssl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort">valkeyActiveExpireEffort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclChannelsDefaultInput`<sup>Optional</sup> <a name="aclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput"></a>

```java
public java.lang.String getAclChannelsDefaultInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `frequentSnapshotsInput`<sup>Optional</sup> <a name="frequentSnapshotsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput"></a>

```java
public java.lang.Boolean|IResolvable getFrequentSnapshotsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ioThreadsInput`<sup>Optional</sup> <a name="ioThreadsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput"></a>

```java
public java.lang.Number getIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `lfuDecayTimeInput`<sup>Optional</sup> <a name="lfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput"></a>

```java
public java.lang.Number getLfuDecayTimeInput();
```

- *Type:* java.lang.Number

---

##### `lfuLogFactorInput`<sup>Optional</sup> <a name="lfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput"></a>

```java
public java.lang.Number getLfuLogFactorInput();
```

- *Type:* java.lang.Number

---

##### `notifyKeyspaceEventsInput`<sup>Optional</sup> <a name="notifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput"></a>

```java
public java.lang.String getNotifyKeyspaceEventsInput();
```

- *Type:* java.lang.String

---

##### `numberOfDatabasesInput`<sup>Optional</sup> <a name="numberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput"></a>

```java
public java.lang.Number getNumberOfDatabasesInput();
```

- *Type:* java.lang.Number

---

##### `persistenceInput`<sup>Optional</sup> <a name="persistenceInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput"></a>

```java
public java.lang.String getPersistenceInput();
```

- *Type:* java.lang.String

---

##### `pubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimitInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput"></a>

```java
public java.lang.Boolean|IResolvable getSslInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `valkeyActiveExpireEffortInput`<sup>Optional</sup> <a name="valkeyActiveExpireEffortInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput"></a>

```java
public java.lang.Number getValkeyActiveExpireEffortInput();
```

- *Type:* java.lang.Number

---

##### `aclChannelsDefault`<sup>Required</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault"></a>

```java
public java.lang.String getAclChannelsDefault();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `frequentSnapshots`<sup>Required</sup> <a name="frequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots"></a>

```java
public java.lang.Boolean|IResolvable getFrequentSnapshots();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ioThreads`<sup>Required</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads"></a>

```java
public java.lang.Number getIoThreads();
```

- *Type:* java.lang.Number

---

##### `lfuDecayTime`<sup>Required</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime"></a>

```java
public java.lang.Number getLfuDecayTime();
```

- *Type:* java.lang.Number

---

##### `lfuLogFactor`<sup>Required</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor"></a>

```java
public java.lang.Number getLfuLogFactor();
```

- *Type:* java.lang.Number

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

---

##### `numberOfDatabases`<sup>Required</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases"></a>

```java
public java.lang.Number getNumberOfDatabases();
```

- *Type:* java.lang.Number

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence"></a>

```java
public java.lang.String getPersistence();
```

- *Type:* java.lang.String

---

##### `pubsubClientOutputBufferLimit`<sup>Required</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl"></a>

```java
public java.lang.Boolean|IResolvable getSsl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `valkeyActiveExpireEffort`<sup>Required</sup> <a name="valkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort"></a>

```java
public java.lang.Number getValkeyActiveExpireEffort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseValkeyConfigConfig <a name="DatabaseValkeyConfigConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_valkey_config.DatabaseValkeyConfigConfig;

DatabaseValkeyConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .aclChannelsDefault(java.lang.String)
//  .frequentSnapshots(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ioThreads(java.lang.Number)
//  .lfuDecayTime(java.lang.Number)
//  .lfuLogFactor(java.lang.Number)
//  .notifyKeyspaceEvents(java.lang.String)
//  .numberOfDatabases(java.lang.Number)
//  .persistence(java.lang.String)
//  .pubsubClientOutputBufferLimit(java.lang.Number)
//  .ssl(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
//  .valkeyActiveExpireEffort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>java.lang.String</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots">frequentSnapshots</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads">ioThreads</a></code> | <code>java.lang.Number</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>java.lang.Number</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>java.lang.Number</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>java.lang.Number</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence">persistence</a></code> | <code>java.lang.String</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl">ssl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort">valkeyActiveExpireEffort</a></code> | <code>java.lang.Number</code> | Active expire effort. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `aclChannelsDefault`<sup>Optional</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault"></a>

```java
public java.lang.String getAclChannelsDefault();
```

- *Type:* java.lang.String

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `frequentSnapshots`<sup>Optional</sup> <a name="frequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots"></a>

```java
public java.lang.Boolean|IResolvable getFrequentSnapshots();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioThreads`<sup>Optional</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads"></a>

```java
public java.lang.Number getIoThreads();
```

- *Type:* java.lang.Number

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `lfuDecayTime`<sup>Optional</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime"></a>

```java
public java.lang.Number getLfuDecayTime();
```

- *Type:* java.lang.Number

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `lfuLogFactor`<sup>Optional</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor"></a>

```java
public java.lang.Number getLfuLogFactor();
```

- *Type:* java.lang.Number

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

Set notify-keyspace-events option.

Requires at least K or E and accepts any combination of the following options. Setting the parameter to "" disables notifications.

K — Keyspace events
E — Keyevent events
g — Generic commands (e.g. DEL, EXPIRE, RENAME, ...)
$ — String commands
l — List commands
s — Set commands
h — Hash commands
z — Sorted set commands
t — Stream commands
d — Module key type events
x — Expired events
e — Evicted events
m — Key miss events
n — New key events
A — Alias for "g$lshztxed"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `numberOfDatabases`<sup>Optional</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases"></a>

```java
public java.lang.Number getNumberOfDatabases();
```

- *Type:* java.lang.Number

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence"></a>

```java
public java.lang.String getPersistence();
```

- *Type:* java.lang.String

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `pubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl"></a>

```java
public java.lang.Boolean|IResolvable getSsl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `valkeyActiveExpireEffort`<sup>Optional</sup> <a name="valkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort"></a>

```java
public java.lang.Number getValkeyActiveExpireEffort();
```

- *Type:* java.lang.Number

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---



