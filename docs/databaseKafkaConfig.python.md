# `databaseKafkaConfig` Submodule <a name="`databaseKafkaConfig` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaConfig <a name="DatabaseKafkaConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config digitalocean_database_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfig(
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
  auto_create_topics_enable: typing.Union[bool, IResolvable] = None,
  group_initial_rebalance_delay_ms: typing.Union[int, float] = None,
  group_max_session_timeout_ms: typing.Union[int, float] = None,
  group_min_session_timeout_ms: typing.Union[int, float] = None,
  id: str = None,
  log_cleaner_delete_retention_ms: typing.Union[int, float] = None,
  log_cleaner_min_compaction_lag_ms: str = None,
  log_flush_interval_ms: str = None,
  log_index_interval_bytes: typing.Union[int, float] = None,
  log_message_downconversion_enable: typing.Union[bool, IResolvable] = None,
  log_message_timestamp_difference_max_ms: str = None,
  log_preallocate: typing.Union[bool, IResolvable] = None,
  log_retention_bytes: str = None,
  log_retention_hours: typing.Union[int, float] = None,
  log_retention_ms: str = None,
  log_roll_jitter_ms: str = None,
  log_segment_delete_delay_ms: typing.Union[int, float] = None,
  message_max_bytes: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupInitialRebalanceDelayMs">group_initial_rebalance_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMaxSessionTimeoutMs">group_max_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMinSessionTimeoutMs">group_min_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerDeleteRetentionMs">log_cleaner_delete_retention_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerMinCompactionLagMs">log_cleaner_min_compaction_lag_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logFlushIntervalMs">log_flush_interval_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logIndexIntervalBytes">log_index_interval_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageDownconversionEnable">log_message_downconversion_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageTimestampDifferenceMaxMs">log_message_timestamp_difference_max_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logPreallocate">log_preallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionBytes">log_retention_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionMs">log_retention_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRollJitterMs">log_roll_jitter_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logSegmentDeleteDelayMs">log_segment_delete_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `auto_create_topics_enable`<sup>Optional</sup> <a name="auto_create_topics_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.autoCreateTopicsEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `group_initial_rebalance_delay_ms`<sup>Optional</sup> <a name="group_initial_rebalance_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupInitialRebalanceDelayMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `group_max_session_timeout_ms`<sup>Optional</sup> <a name="group_max_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMaxSessionTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `group_min_session_timeout_ms`<sup>Optional</sup> <a name="group_min_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMinSessionTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_cleaner_delete_retention_ms`<sup>Optional</sup> <a name="log_cleaner_delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerDeleteRetentionMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `log_cleaner_min_compaction_lag_ms`<sup>Optional</sup> <a name="log_cleaner_min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerMinCompactionLagMs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `log_flush_interval_ms`<sup>Optional</sup> <a name="log_flush_interval_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logFlushIntervalMs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `log_index_interval_bytes`<sup>Optional</sup> <a name="log_index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logIndexIntervalBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `log_message_downconversion_enable`<sup>Optional</sup> <a name="log_message_downconversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageDownconversionEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `log_message_timestamp_difference_max_ms`<sup>Optional</sup> <a name="log_message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageTimestampDifferenceMaxMs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `log_preallocate`<sup>Optional</sup> <a name="log_preallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logPreallocate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `log_retention_bytes`<sup>Optional</sup> <a name="log_retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionBytes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `log_retention_hours`<sup>Optional</sup> <a name="log_retention_hours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `log_retention_ms`<sup>Optional</sup> <a name="log_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionMs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `log_roll_jitter_ms`<sup>Optional</sup> <a name="log_roll_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRollJitterMs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `log_segment_delete_delay_ms`<sup>Optional</sup> <a name="log_segment_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logSegmentDeleteDelayMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `message_max_bytes`<sup>Optional</sup> <a name="message_max_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.messageMaxBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable">reset_auto_create_topics_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs">reset_group_initial_rebalance_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs">reset_group_max_session_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs">reset_group_min_session_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs">reset_log_cleaner_delete_retention_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs">reset_log_cleaner_min_compaction_lag_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs">reset_log_flush_interval_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes">reset_log_index_interval_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable">reset_log_message_downconversion_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs">reset_log_message_timestamp_difference_max_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate">reset_log_preallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes">reset_log_retention_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours">reset_log_retention_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs">reset_log_retention_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs">reset_log_roll_jitter_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs">reset_log_segment_delete_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes">reset_message_max_bytes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auto_create_topics_enable` <a name="reset_auto_create_topics_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable"></a>

```python
def reset_auto_create_topics_enable() -> None
```

##### `reset_group_initial_rebalance_delay_ms` <a name="reset_group_initial_rebalance_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs"></a>

```python
def reset_group_initial_rebalance_delay_ms() -> None
```

##### `reset_group_max_session_timeout_ms` <a name="reset_group_max_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs"></a>

```python
def reset_group_max_session_timeout_ms() -> None
```

##### `reset_group_min_session_timeout_ms` <a name="reset_group_min_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs"></a>

```python
def reset_group_min_session_timeout_ms() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_cleaner_delete_retention_ms` <a name="reset_log_cleaner_delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs"></a>

```python
def reset_log_cleaner_delete_retention_ms() -> None
```

##### `reset_log_cleaner_min_compaction_lag_ms` <a name="reset_log_cleaner_min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs"></a>

```python
def reset_log_cleaner_min_compaction_lag_ms() -> None
```

##### `reset_log_flush_interval_ms` <a name="reset_log_flush_interval_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs"></a>

```python
def reset_log_flush_interval_ms() -> None
```

##### `reset_log_index_interval_bytes` <a name="reset_log_index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes"></a>

```python
def reset_log_index_interval_bytes() -> None
```

##### `reset_log_message_downconversion_enable` <a name="reset_log_message_downconversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable"></a>

```python
def reset_log_message_downconversion_enable() -> None
```

##### `reset_log_message_timestamp_difference_max_ms` <a name="reset_log_message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs"></a>

```python
def reset_log_message_timestamp_difference_max_ms() -> None
```

##### `reset_log_preallocate` <a name="reset_log_preallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate"></a>

```python
def reset_log_preallocate() -> None
```

##### `reset_log_retention_bytes` <a name="reset_log_retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes"></a>

```python
def reset_log_retention_bytes() -> None
```

##### `reset_log_retention_hours` <a name="reset_log_retention_hours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours"></a>

```python
def reset_log_retention_hours() -> None
```

##### `reset_log_retention_ms` <a name="reset_log_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs"></a>

```python
def reset_log_retention_ms() -> None
```

##### `reset_log_roll_jitter_ms` <a name="reset_log_roll_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs"></a>

```python
def reset_log_roll_jitter_ms() -> None
```

##### `reset_log_segment_delete_delay_ms` <a name="reset_log_segment_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs"></a>

```python
def reset_log_segment_delete_delay_ms() -> None
```

##### `reset_message_max_bytes` <a name="reset_message_max_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes"></a>

```python
def reset_message_max_bytes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseKafkaConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput">auto_create_topics_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput">group_initial_rebalance_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput">group_max_session_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput">group_min_session_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput">log_cleaner_delete_retention_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput">log_cleaner_min_compaction_lag_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput">log_flush_interval_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput">log_index_interval_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput">log_message_downconversion_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput">log_message_timestamp_difference_max_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput">log_preallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput">log_retention_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput">log_retention_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput">log_retention_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput">log_roll_jitter_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput">log_segment_delete_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput">message_max_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs">group_initial_rebalance_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs">group_max_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs">group_min_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs">log_cleaner_delete_retention_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs">log_cleaner_min_compaction_lag_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs">log_flush_interval_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes">log_index_interval_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable">log_message_downconversion_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs">log_message_timestamp_difference_max_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate">log_preallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes">log_retention_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs">log_retention_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs">log_roll_jitter_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs">log_segment_delete_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_create_topics_enable_input`<sup>Optional</sup> <a name="auto_create_topics_enable_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput"></a>

```python
auto_create_topics_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `group_initial_rebalance_delay_ms_input`<sup>Optional</sup> <a name="group_initial_rebalance_delay_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput"></a>

```python
group_initial_rebalance_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_max_session_timeout_ms_input`<sup>Optional</sup> <a name="group_max_session_timeout_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput"></a>

```python
group_max_session_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_min_session_timeout_ms_input`<sup>Optional</sup> <a name="group_min_session_timeout_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput"></a>

```python
group_min_session_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_cleaner_delete_retention_ms_input`<sup>Optional</sup> <a name="log_cleaner_delete_retention_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput"></a>

```python
log_cleaner_delete_retention_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_cleaner_min_compaction_lag_ms_input`<sup>Optional</sup> <a name="log_cleaner_min_compaction_lag_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput"></a>

```python
log_cleaner_min_compaction_lag_ms_input: str
```

- *Type:* str

---

##### `log_flush_interval_ms_input`<sup>Optional</sup> <a name="log_flush_interval_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput"></a>

```python
log_flush_interval_ms_input: str
```

- *Type:* str

---

##### `log_index_interval_bytes_input`<sup>Optional</sup> <a name="log_index_interval_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput"></a>

```python
log_index_interval_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_message_downconversion_enable_input`<sup>Optional</sup> <a name="log_message_downconversion_enable_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput"></a>

```python
log_message_downconversion_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_message_timestamp_difference_max_ms_input`<sup>Optional</sup> <a name="log_message_timestamp_difference_max_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput"></a>

```python
log_message_timestamp_difference_max_ms_input: str
```

- *Type:* str

---

##### `log_preallocate_input`<sup>Optional</sup> <a name="log_preallocate_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput"></a>

```python
log_preallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_retention_bytes_input`<sup>Optional</sup> <a name="log_retention_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput"></a>

```python
log_retention_bytes_input: str
```

- *Type:* str

---

##### `log_retention_hours_input`<sup>Optional</sup> <a name="log_retention_hours_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput"></a>

```python
log_retention_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_retention_ms_input`<sup>Optional</sup> <a name="log_retention_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput"></a>

```python
log_retention_ms_input: str
```

- *Type:* str

---

##### `log_roll_jitter_ms_input`<sup>Optional</sup> <a name="log_roll_jitter_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput"></a>

```python
log_roll_jitter_ms_input: str
```

- *Type:* str

---

##### `log_segment_delete_delay_ms_input`<sup>Optional</sup> <a name="log_segment_delete_delay_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput"></a>

```python
log_segment_delete_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_max_bytes_input`<sup>Optional</sup> <a name="message_max_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput"></a>

```python
message_max_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_create_topics_enable`<sup>Required</sup> <a name="auto_create_topics_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable"></a>

```python
auto_create_topics_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `group_initial_rebalance_delay_ms`<sup>Required</sup> <a name="group_initial_rebalance_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs"></a>

```python
group_initial_rebalance_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_max_session_timeout_ms`<sup>Required</sup> <a name="group_max_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs"></a>

```python
group_max_session_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_min_session_timeout_ms`<sup>Required</sup> <a name="group_min_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs"></a>

```python
group_min_session_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_cleaner_delete_retention_ms`<sup>Required</sup> <a name="log_cleaner_delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs"></a>

```python
log_cleaner_delete_retention_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_cleaner_min_compaction_lag_ms`<sup>Required</sup> <a name="log_cleaner_min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs"></a>

```python
log_cleaner_min_compaction_lag_ms: str
```

- *Type:* str

---

##### `log_flush_interval_ms`<sup>Required</sup> <a name="log_flush_interval_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs"></a>

```python
log_flush_interval_ms: str
```

- *Type:* str

---

##### `log_index_interval_bytes`<sup>Required</sup> <a name="log_index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes"></a>

```python
log_index_interval_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_message_downconversion_enable`<sup>Required</sup> <a name="log_message_downconversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable"></a>

```python
log_message_downconversion_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_message_timestamp_difference_max_ms`<sup>Required</sup> <a name="log_message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```python
log_message_timestamp_difference_max_ms: str
```

- *Type:* str

---

##### `log_preallocate`<sup>Required</sup> <a name="log_preallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate"></a>

```python
log_preallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_retention_bytes`<sup>Required</sup> <a name="log_retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes"></a>

```python
log_retention_bytes: str
```

- *Type:* str

---

##### `log_retention_hours`<sup>Required</sup> <a name="log_retention_hours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours"></a>

```python
log_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_retention_ms`<sup>Required</sup> <a name="log_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs"></a>

```python
log_retention_ms: str
```

- *Type:* str

---

##### `log_roll_jitter_ms`<sup>Required</sup> <a name="log_roll_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs"></a>

```python
log_roll_jitter_ms: str
```

- *Type:* str

---

##### `log_segment_delete_delay_ms`<sup>Required</sup> <a name="log_segment_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs"></a>

```python
log_segment_delete_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_max_bytes`<sup>Required</sup> <a name="message_max_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes"></a>

```python
message_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaConfigConfig <a name="DatabaseKafkaConfigConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_config

databaseKafkaConfig.DatabaseKafkaConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  auto_create_topics_enable: typing.Union[bool, IResolvable] = None,
  group_initial_rebalance_delay_ms: typing.Union[int, float] = None,
  group_max_session_timeout_ms: typing.Union[int, float] = None,
  group_min_session_timeout_ms: typing.Union[int, float] = None,
  id: str = None,
  log_cleaner_delete_retention_ms: typing.Union[int, float] = None,
  log_cleaner_min_compaction_lag_ms: str = None,
  log_flush_interval_ms: str = None,
  log_index_interval_bytes: typing.Union[int, float] = None,
  log_message_downconversion_enable: typing.Union[bool, IResolvable] = None,
  log_message_timestamp_difference_max_ms: str = None,
  log_preallocate: typing.Union[bool, IResolvable] = None,
  log_retention_bytes: str = None,
  log_retention_hours: typing.Union[int, float] = None,
  log_retention_ms: str = None,
  log_roll_jitter_ms: str = None,
  log_segment_delete_delay_ms: typing.Union[int, float] = None,
  message_max_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs">group_initial_rebalance_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs">group_max_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs">group_min_session_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs">log_cleaner_delete_retention_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs">log_cleaner_min_compaction_lag_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs">log_flush_interval_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes">log_index_interval_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable">log_message_downconversion_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs">log_message_timestamp_difference_max_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate">log_preallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes">log_retention_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs">log_retention_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs">log_roll_jitter_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs">log_segment_delete_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `auto_create_topics_enable`<sup>Optional</sup> <a name="auto_create_topics_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable"></a>

```python
auto_create_topics_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `group_initial_rebalance_delay_ms`<sup>Optional</sup> <a name="group_initial_rebalance_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs"></a>

```python
group_initial_rebalance_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `group_max_session_timeout_ms`<sup>Optional</sup> <a name="group_max_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs"></a>

```python
group_max_session_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `group_min_session_timeout_ms`<sup>Optional</sup> <a name="group_min_session_timeout_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs"></a>

```python
group_min_session_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_cleaner_delete_retention_ms`<sup>Optional</sup> <a name="log_cleaner_delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs"></a>

```python
log_cleaner_delete_retention_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `log_cleaner_min_compaction_lag_ms`<sup>Optional</sup> <a name="log_cleaner_min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs"></a>

```python
log_cleaner_min_compaction_lag_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `log_flush_interval_ms`<sup>Optional</sup> <a name="log_flush_interval_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs"></a>

```python
log_flush_interval_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `log_index_interval_bytes`<sup>Optional</sup> <a name="log_index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes"></a>

```python
log_index_interval_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `log_message_downconversion_enable`<sup>Optional</sup> <a name="log_message_downconversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable"></a>

```python
log_message_downconversion_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `log_message_timestamp_difference_max_ms`<sup>Optional</sup> <a name="log_message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```python
log_message_timestamp_difference_max_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `log_preallocate`<sup>Optional</sup> <a name="log_preallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate"></a>

```python
log_preallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `log_retention_bytes`<sup>Optional</sup> <a name="log_retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes"></a>

```python
log_retention_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `log_retention_hours`<sup>Optional</sup> <a name="log_retention_hours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours"></a>

```python
log_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `log_retention_ms`<sup>Optional</sup> <a name="log_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs"></a>

```python
log_retention_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `log_roll_jitter_ms`<sup>Optional</sup> <a name="log_roll_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs"></a>

```python
log_roll_jitter_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `log_segment_delete_delay_ms`<sup>Optional</sup> <a name="log_segment_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs"></a>

```python
log_segment_delete_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `message_max_bytes`<sup>Optional</sup> <a name="message_max_bytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes"></a>

```python
message_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---



