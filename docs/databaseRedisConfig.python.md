# `databaseRedisConfig` Submodule <a name="`databaseRedisConfig` Submodule" id="@cdktf/provider-digitalocean.databaseRedisConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseRedisConfig <a name="DatabaseRedisConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config digitalocean_database_redis_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfig(
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
  id: str = None,
  io_threads: typing.Union[int, float] = None,
  lfu_decay_time: typing.Union[int, float] = None,
  lfu_log_factor: typing.Union[int, float] = None,
  maxmemory_policy: str = None,
  notify_keyspace_events: str = None,
  number_of_databases: typing.Union[int, float] = None,
  persistence: str = None,
  pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.maxmemoryPolicy">maxmemory_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.persistence">persistence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `acl_channels_default`<sup>Optional</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.aclChannelsDefault"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `io_threads`<sup>Optional</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ioThreads"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `lfu_decay_time`<sup>Optional</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuDecayTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `lfu_log_factor`<sup>Optional</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.lfuLogFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `maxmemory_policy`<sup>Optional</sup> <a name="maxmemory_policy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.maxmemoryPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.notifyKeyspaceEvents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `number_of_databases`<sup>Optional</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.numberOfDatabases"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.persistence"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.pubsubClientOutputBufferLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault">reset_acl_channels_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads">reset_io_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime">reset_lfu_decay_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor">reset_lfu_log_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy">reset_maxmemory_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents">reset_notify_keyspace_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases">reset_number_of_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence">reset_persistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit">reset_pubsub_client_output_buffer_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_acl_channels_default` <a name="reset_acl_channels_default" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault"></a>

```python
def reset_acl_channels_default() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_io_threads` <a name="reset_io_threads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads"></a>

```python
def reset_io_threads() -> None
```

##### `reset_lfu_decay_time` <a name="reset_lfu_decay_time" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime"></a>

```python
def reset_lfu_decay_time() -> None
```

##### `reset_lfu_log_factor` <a name="reset_lfu_log_factor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor"></a>

```python
def reset_lfu_log_factor() -> None
```

##### `reset_maxmemory_policy` <a name="reset_maxmemory_policy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy"></a>

```python
def reset_maxmemory_policy() -> None
```

##### `reset_notify_keyspace_events` <a name="reset_notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents"></a>

```python
def reset_notify_keyspace_events() -> None
```

##### `reset_number_of_databases` <a name="reset_number_of_databases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases"></a>

```python
def reset_number_of_databases() -> None
```

##### `reset_persistence` <a name="reset_persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence"></a>

```python
def reset_persistence() -> None
```

##### `reset_pubsub_client_output_buffer_limit` <a name="reset_pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit"></a>

```python
def reset_pubsub_client_output_buffer_limit() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout"></a>

```python
def reset_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseRedisConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseRedisConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseRedisConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput">acl_channels_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput">io_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput">lfu_decay_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput">lfu_log_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput">maxmemory_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput">notify_keyspace_events_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput">number_of_databases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput">persistence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput">pubsub_client_output_buffer_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy">maxmemory_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence">persistence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_channels_default_input`<sup>Optional</sup> <a name="acl_channels_default_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput"></a>

```python
acl_channels_default_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `io_threads_input`<sup>Optional</sup> <a name="io_threads_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput"></a>

```python
io_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_decay_time_input`<sup>Optional</sup> <a name="lfu_decay_time_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput"></a>

```python
lfu_decay_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_log_factor_input`<sup>Optional</sup> <a name="lfu_log_factor_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput"></a>

```python
lfu_log_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_policy_input`<sup>Optional</sup> <a name="maxmemory_policy_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput"></a>

```python
maxmemory_policy_input: str
```

- *Type:* str

---

##### `notify_keyspace_events_input`<sup>Optional</sup> <a name="notify_keyspace_events_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput"></a>

```python
notify_keyspace_events_input: str
```

- *Type:* str

---

##### `number_of_databases_input`<sup>Optional</sup> <a name="number_of_databases_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput"></a>

```python
number_of_databases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persistence_input`<sup>Optional</sup> <a name="persistence_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput"></a>

```python
persistence_input: str
```

- *Type:* str

---

##### `pubsub_client_output_buffer_limit_input`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput"></a>

```python
pubsub_client_output_buffer_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `acl_channels_default`<sup>Required</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault"></a>

```python
acl_channels_default: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `io_threads`<sup>Required</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads"></a>

```python
io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_decay_time`<sup>Required</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime"></a>

```python
lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lfu_log_factor`<sup>Required</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor"></a>

```python
lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_policy`<sup>Required</sup> <a name="maxmemory_policy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy"></a>

```python
maxmemory_policy: str
```

- *Type:* str

---

##### `notify_keyspace_events`<sup>Required</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

---

##### `number_of_databases`<sup>Required</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases"></a>

```python
number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence"></a>

```python
persistence: str
```

- *Type:* str

---

##### `pubsub_client_output_buffer_limit`<sup>Required</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit"></a>

```python
pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseRedisConfigConfig <a name="DatabaseRedisConfigConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_redis_config

databaseRedisConfig.DatabaseRedisConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  acl_channels_default: str = None,
  id: str = None,
  io_threads: typing.Union[int, float] = None,
  lfu_decay_time: typing.Union[int, float] = None,
  lfu_log_factor: typing.Union[int, float] = None,
  maxmemory_policy: str = None,
  notify_keyspace_events: str = None,
  number_of_databases: typing.Union[int, float] = None,
  persistence: str = None,
  pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault">acl_channels_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads">io_threads</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime">lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor">lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy">maxmemory_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases">number_of_databases</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence">persistence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit">pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `acl_channels_default`<sup>Optional</sup> <a name="acl_channels_default" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault"></a>

```python
acl_channels_default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `io_threads`<sup>Optional</sup> <a name="io_threads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads"></a>

```python
io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `lfu_decay_time`<sup>Optional</sup> <a name="lfu_decay_time" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime"></a>

```python
lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `lfu_log_factor`<sup>Optional</sup> <a name="lfu_log_factor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor"></a>

```python
lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `maxmemory_policy`<sup>Optional</sup> <a name="maxmemory_policy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy"></a>

```python
maxmemory_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `number_of_databases`<sup>Optional</sup> <a name="number_of_databases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases"></a>

```python
number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence"></a>

```python
persistence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="pubsub_client_output_buffer_limit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```python
pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---



