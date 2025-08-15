# `databaseValkeyConfig` Submodule <a name="`databaseValkeyConfig` Submodule" id="@cdktf/provider-digitalocean.databaseValkeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseValkeyConfig <a name="DatabaseValkeyConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config digitalocean_database_valkey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  acl_channels_default: str = None,
  frequent_snapshots: typing.Union[bool, IResolvable] = None,
  id: str = None,
  io_threads: typing.Union[int, float] = None,
  lfu_decay_time: typing.Union[int, float] = None,
  lfu_log_factor: typing.Union[int, float] = None,
  notify_keyspace_events: str = None,
  number_of_databases: typing.Union[int, float] = None,
  persistence: str = None,
  pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  valkey_active_expire_effort: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.frequentSnapshots">frequent_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.persistence">persistence</a></code> | <code>str</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.valkeyActiveExpireEffort">valkey_active_expire_effort</a></code> | <code>typing.Union[int, float]</code> | Active expire effort. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `acl_channels_default`<sup>Optional</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.aclChannelsDefault"></a>

- *Type:* str

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `frequent_snapshots`<sup>Optional</sup> <a name="frequent_snapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.frequentSnapshots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `io_threads`<sup>Optional</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ioThreads"></a>

- *Type:* typing.Union[int, float]

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `lfu_decay_time`<sup>Optional</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuDecayTime"></a>

- *Type:* typing.Union[int, float]

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `lfu_log_factor`<sup>Optional</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.lfuLogFactor"></a>

- *Type:* typing.Union[int, float]

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.notifyKeyspaceEvents"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `number_of_databases`<sup>Optional</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.numberOfDatabases"></a>

- *Type:* typing.Union[int, float]

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.persistence"></a>

- *Type:* str

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.pubsubClientOutputBufferLimit"></a>

- *Type:* typing.Union[int, float]

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `valkey_active_expire_effort`<sup>Optional</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.valkeyActiveExpireEffort"></a>

- *Type:* typing.Union[int, float]

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault">reset_acl_channels_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots">reset_frequent_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads">reset_io_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime">reset_lfu_decay_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor">reset_lfu_log_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents">reset_notify_keyspace_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases">reset_number_of_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence">reset_persistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit">reset_pubsub_client_output_buffer_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort">reset_valkey_active_expire_effort</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_acl_channels_default` <a name="reset_acl_channels_default" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault"></a>

```python
def reset_acl_channels_default() -> None
```

##### `reset_frequent_snapshots` <a name="reset_frequent_snapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots"></a>

```python
def reset_frequent_snapshots() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_io_threads` <a name="reset_io_threads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads"></a>

```python
def reset_io_threads() -> None
```

##### `reset_lfu_decay_time` <a name="reset_lfu_decay_time" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime"></a>

```python
def reset_lfu_decay_time() -> None
```

##### `reset_lfu_log_factor` <a name="reset_lfu_log_factor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor"></a>

```python
def reset_lfu_log_factor() -> None
```

##### `reset_notify_keyspace_events` <a name="reset_notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents"></a>

```python
def reset_notify_keyspace_events() -> None
```

##### `reset_number_of_databases` <a name="reset_number_of_databases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases"></a>

```python
def reset_number_of_databases() -> None
```

##### `reset_persistence` <a name="reset_persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence"></a>

```python
def reset_persistence() -> None
```

##### `reset_pubsub_client_output_buffer_limit` <a name="reset_pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit"></a>

```python
def reset_pubsub_client_output_buffer_limit() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_valkey_active_expire_effort` <a name="reset_valkey_active_expire_effort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort"></a>

```python
def reset_valkey_active_expire_effort() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfig.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseValkeyConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseValkeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseValkeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput">acl_channels_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput">frequent_snapshots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput">io_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput">lfu_decay_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput">lfu_log_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput">notify_keyspace_events_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput">number_of_databases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput">persistence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput">pubsub_client_output_buffer_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput">valkey_active_expire_effort_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots">frequent_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence">persistence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort">valkey_active_expire_effort</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_channels_default_input`<sup>Optional</sup> <a name="acl_channels_default_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput"></a>

```python
acl_channels_default_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `frequent_snapshots_input`<sup>Optional</sup> <a name="frequent_snapshots_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput"></a>

```python
frequent_snapshots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `io_threads_input`<sup>Optional</sup> <a name="io_threads_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput"></a>

```python
io_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_decay_time_input`<sup>Optional</sup> <a name="lfu_decay_time_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput"></a>

```python
lfu_decay_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_log_factor_input`<sup>Optional</sup> <a name="lfu_log_factor_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput"></a>

```python
lfu_log_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_keyspace_events_input`<sup>Optional</sup> <a name="notify_keyspace_events_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput"></a>

```python
notify_keyspace_events_input: str
```

- *Type:* str

---

##### `number_of_databases_input`<sup>Optional</sup> <a name="number_of_databases_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput"></a>

```python
number_of_databases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persistence_input`<sup>Optional</sup> <a name="persistence_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput"></a>

```python
persistence_input: str
```

- *Type:* str

---

##### `pubsub_client_output_buffer_limit_input`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput"></a>

```python
pubsub_client_output_buffer_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_active_expire_effort_input`<sup>Optional</sup> <a name="valkey_active_expire_effort_input" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput"></a>

```python
valkey_active_expire_effort_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `acl_channels_default`<sup>Required</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault"></a>

```python
acl_channels_default: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `frequent_snapshots`<sup>Required</sup> <a name="frequent_snapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots"></a>

```python
frequent_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `io_threads`<sup>Required</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads"></a>

```python
io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_decay_time`<sup>Required</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime"></a>

```python
lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_log_factor`<sup>Required</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor"></a>

```python
lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_keyspace_events`<sup>Required</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

---

##### `number_of_databases`<sup>Required</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases"></a>

```python
number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence"></a>

```python
persistence: str
```

- *Type:* str

---

##### `pubsub_client_output_buffer_limit`<sup>Required</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit"></a>

```python
pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_active_expire_effort`<sup>Required</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort"></a>

```python
valkey_active_expire_effort: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseValkeyConfigConfig <a name="DatabaseValkeyConfigConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_valkey_config

databaseValkeyConfig.DatabaseValkeyConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  acl_channels_default: str = None,
  frequent_snapshots: typing.Union[bool, IResolvable] = None,
  id: str = None,
  io_threads: typing.Union[int, float] = None,
  lfu_decay_time: typing.Union[int, float] = None,
  lfu_log_factor: typing.Union[int, float] = None,
  notify_keyspace_events: str = None,
  number_of_databases: typing.Union[int, float] = None,
  persistence: str = None,
  pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  valkey_active_expire_effort: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots">frequent_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence">persistence</a></code> | <code>str</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort">valkey_active_expire_effort</a></code> | <code>typing.Union[int, float]</code> | Active expire effort. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `acl_channels_default`<sup>Optional</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault"></a>

```python
acl_channels_default: str
```

- *Type:* str

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `frequent_snapshots`<sup>Optional</sup> <a name="frequent_snapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots"></a>

```python
frequent_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `io_threads`<sup>Optional</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads"></a>

```python
io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `lfu_decay_time`<sup>Optional</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime"></a>

```python
lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `lfu_log_factor`<sup>Optional</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor"></a>

```python
lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `number_of_databases`<sup>Optional</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases"></a>

```python
number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence"></a>

```python
persistence: str
```

- *Type:* str

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```python
pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `valkey_active_expire_effort`<sup>Optional</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort"></a>

```python
valkey_active_expire_effort: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---



