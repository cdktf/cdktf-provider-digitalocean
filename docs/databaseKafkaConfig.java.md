# `databaseKafkaConfig` Submodule <a name="`databaseKafkaConfig` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaConfig <a name="DatabaseKafkaConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config digitalocean_database_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfig;

DatabaseKafkaConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .autoCreateTopicsEnable(java.lang.Boolean)
//  .autoCreateTopicsEnable(IResolvable)
//  .groupInitialRebalanceDelayMs(java.lang.Number)
//  .groupMaxSessionTimeoutMs(java.lang.Number)
//  .groupMinSessionTimeoutMs(java.lang.Number)
//  .id(java.lang.String)
//  .logCleanerDeleteRetentionMs(java.lang.Number)
//  .logCleanerMinCompactionLagMs(java.lang.String)
//  .logFlushIntervalMs(java.lang.String)
//  .logIndexIntervalBytes(java.lang.Number)
//  .logMessageDownconversionEnable(java.lang.Boolean)
//  .logMessageDownconversionEnable(IResolvable)
//  .logMessageTimestampDifferenceMaxMs(java.lang.String)
//  .logPreallocate(java.lang.Boolean)
//  .logPreallocate(IResolvable)
//  .logRetentionBytes(java.lang.String)
//  .logRetentionHours(java.lang.Number)
//  .logRetentionMs(java.lang.String)
//  .logRollJitterMs(java.lang.String)
//  .logSegmentDeleteDelayMs(java.lang.Number)
//  .messageMaxBytes(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupInitialRebalanceDelayMs">groupInitialRebalanceDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMaxSessionTimeoutMs">groupMaxSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMinSessionTimeoutMs">groupMinSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerDeleteRetentionMs">logCleanerDeleteRetentionMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerMinCompactionLagMs">logCleanerMinCompactionLagMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logFlushIntervalMs">logFlushIntervalMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logIndexIntervalBytes">logIndexIntervalBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageDownconversionEnable">logMessageDownconversionEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageTimestampDifferenceMaxMs">logMessageTimestampDifferenceMaxMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logPreallocate">logPreallocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionBytes">logRetentionBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionHours">logRetentionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionMs">logRetentionMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRollJitterMs">logRollJitterMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logSegmentDeleteDelayMs">logSegmentDeleteDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `autoCreateTopicsEnable`<sup>Optional</sup> <a name="autoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.autoCreateTopicsEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `groupInitialRebalanceDelayMs`<sup>Optional</sup> <a name="groupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupInitialRebalanceDelayMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `groupMaxSessionTimeoutMs`<sup>Optional</sup> <a name="groupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMaxSessionTimeoutMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `groupMinSessionTimeoutMs`<sup>Optional</sup> <a name="groupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.groupMinSessionTimeoutMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCleanerDeleteRetentionMs`<sup>Optional</sup> <a name="logCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerDeleteRetentionMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `logCleanerMinCompactionLagMs`<sup>Optional</sup> <a name="logCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logCleanerMinCompactionLagMs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `logFlushIntervalMs`<sup>Optional</sup> <a name="logFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logFlushIntervalMs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `logIndexIntervalBytes`<sup>Optional</sup> <a name="logIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logIndexIntervalBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `logMessageDownconversionEnable`<sup>Optional</sup> <a name="logMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageDownconversionEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `logMessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="logMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logMessageTimestampDifferenceMaxMs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `logPreallocate`<sup>Optional</sup> <a name="logPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logPreallocate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `logRetentionBytes`<sup>Optional</sup> <a name="logRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionBytes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `logRetentionHours`<sup>Optional</sup> <a name="logRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `logRetentionMs`<sup>Optional</sup> <a name="logRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRetentionMs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `logRollJitterMs`<sup>Optional</sup> <a name="logRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logRollJitterMs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `logSegmentDeleteDelayMs`<sup>Optional</sup> <a name="logSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.logSegmentDeleteDelayMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.messageMaxBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable">resetAutoCreateTopicsEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs">resetGroupInitialRebalanceDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs">resetGroupMaxSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs">resetGroupMinSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs">resetLogCleanerDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs">resetLogCleanerMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs">resetLogFlushIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes">resetLogIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable">resetLogMessageDownconversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs">resetLogMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate">resetLogPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes">resetLogRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours">resetLogRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs">resetLogRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs">resetLogRollJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs">resetLogSegmentDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoCreateTopicsEnable` <a name="resetAutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable"></a>

```java
public void resetAutoCreateTopicsEnable()
```

##### `resetGroupInitialRebalanceDelayMs` <a name="resetGroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs"></a>

```java
public void resetGroupInitialRebalanceDelayMs()
```

##### `resetGroupMaxSessionTimeoutMs` <a name="resetGroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs"></a>

```java
public void resetGroupMaxSessionTimeoutMs()
```

##### `resetGroupMinSessionTimeoutMs` <a name="resetGroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs"></a>

```java
public void resetGroupMinSessionTimeoutMs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLogCleanerDeleteRetentionMs` <a name="resetLogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs"></a>

```java
public void resetLogCleanerDeleteRetentionMs()
```

##### `resetLogCleanerMinCompactionLagMs` <a name="resetLogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs"></a>

```java
public void resetLogCleanerMinCompactionLagMs()
```

##### `resetLogFlushIntervalMs` <a name="resetLogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs"></a>

```java
public void resetLogFlushIntervalMs()
```

##### `resetLogIndexIntervalBytes` <a name="resetLogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes"></a>

```java
public void resetLogIndexIntervalBytes()
```

##### `resetLogMessageDownconversionEnable` <a name="resetLogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable"></a>

```java
public void resetLogMessageDownconversionEnable()
```

##### `resetLogMessageTimestampDifferenceMaxMs` <a name="resetLogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs"></a>

```java
public void resetLogMessageTimestampDifferenceMaxMs()
```

##### `resetLogPreallocate` <a name="resetLogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate"></a>

```java
public void resetLogPreallocate()
```

##### `resetLogRetentionBytes` <a name="resetLogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes"></a>

```java
public void resetLogRetentionBytes()
```

##### `resetLogRetentionHours` <a name="resetLogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours"></a>

```java
public void resetLogRetentionHours()
```

##### `resetLogRetentionMs` <a name="resetLogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs"></a>

```java
public void resetLogRetentionMs()
```

##### `resetLogRollJitterMs` <a name="resetLogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs"></a>

```java
public void resetLogRollJitterMs()
```

##### `resetLogSegmentDeleteDelayMs` <a name="resetLogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs"></a>

```java
public void resetLogSegmentDeleteDelayMs()
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes"></a>

```java
public void resetMessageMaxBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfig;

DatabaseKafkaConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfig;

DatabaseKafkaConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfig;

DatabaseKafkaConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfig;

DatabaseKafkaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseKafkaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput">autoCreateTopicsEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput">groupInitialRebalanceDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput">groupMaxSessionTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput">groupMinSessionTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput">logCleanerDeleteRetentionMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput">logCleanerMinCompactionLagMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput">logFlushIntervalMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput">logIndexIntervalBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput">logMessageDownconversionEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput">logMessageTimestampDifferenceMaxMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput">logPreallocateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput">logRetentionBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput">logRetentionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput">logRetentionMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput">logRollJitterMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput">logSegmentDeleteDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs">groupInitialRebalanceDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs">groupMaxSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs">groupMinSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs">logCleanerDeleteRetentionMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs">logCleanerMinCompactionLagMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs">logFlushIntervalMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes">logIndexIntervalBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable">logMessageDownconversionEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs">logMessageTimestampDifferenceMaxMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate">logPreallocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes">logRetentionBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours">logRetentionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs">logRetentionMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs">logRollJitterMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs">logSegmentDeleteDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoCreateTopicsEnableInput`<sup>Optional</sup> <a name="autoCreateTopicsEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput"></a>

```java
public java.lang.Object getAutoCreateTopicsEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `groupInitialRebalanceDelayMsInput`<sup>Optional</sup> <a name="groupInitialRebalanceDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput"></a>

```java
public java.lang.Number getGroupInitialRebalanceDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `groupMaxSessionTimeoutMsInput`<sup>Optional</sup> <a name="groupMaxSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput"></a>

```java
public java.lang.Number getGroupMaxSessionTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `groupMinSessionTimeoutMsInput`<sup>Optional</sup> <a name="groupMinSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput"></a>

```java
public java.lang.Number getGroupMinSessionTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logCleanerDeleteRetentionMsInput`<sup>Optional</sup> <a name="logCleanerDeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput"></a>

```java
public java.lang.Number getLogCleanerDeleteRetentionMsInput();
```

- *Type:* java.lang.Number

---

##### `logCleanerMinCompactionLagMsInput`<sup>Optional</sup> <a name="logCleanerMinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput"></a>

```java
public java.lang.String getLogCleanerMinCompactionLagMsInput();
```

- *Type:* java.lang.String

---

##### `logFlushIntervalMsInput`<sup>Optional</sup> <a name="logFlushIntervalMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput"></a>

```java
public java.lang.String getLogFlushIntervalMsInput();
```

- *Type:* java.lang.String

---

##### `logIndexIntervalBytesInput`<sup>Optional</sup> <a name="logIndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput"></a>

```java
public java.lang.Number getLogIndexIntervalBytesInput();
```

- *Type:* java.lang.Number

---

##### `logMessageDownconversionEnableInput`<sup>Optional</sup> <a name="logMessageDownconversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput"></a>

```java
public java.lang.Object getLogMessageDownconversionEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logMessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="logMessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput"></a>

```java
public java.lang.String getLogMessageTimestampDifferenceMaxMsInput();
```

- *Type:* java.lang.String

---

##### `logPreallocateInput`<sup>Optional</sup> <a name="logPreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput"></a>

```java
public java.lang.Object getLogPreallocateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRetentionBytesInput`<sup>Optional</sup> <a name="logRetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput"></a>

```java
public java.lang.String getLogRetentionBytesInput();
```

- *Type:* java.lang.String

---

##### `logRetentionHoursInput`<sup>Optional</sup> <a name="logRetentionHoursInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput"></a>

```java
public java.lang.Number getLogRetentionHoursInput();
```

- *Type:* java.lang.Number

---

##### `logRetentionMsInput`<sup>Optional</sup> <a name="logRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput"></a>

```java
public java.lang.String getLogRetentionMsInput();
```

- *Type:* java.lang.String

---

##### `logRollJitterMsInput`<sup>Optional</sup> <a name="logRollJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput"></a>

```java
public java.lang.String getLogRollJitterMsInput();
```

- *Type:* java.lang.String

---

##### `logSegmentDeleteDelayMsInput`<sup>Optional</sup> <a name="logSegmentDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput"></a>

```java
public java.lang.Number getLogSegmentDeleteDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput"></a>

```java
public java.lang.Number getMessageMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `autoCreateTopicsEnable`<sup>Required</sup> <a name="autoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable"></a>

```java
public java.lang.Object getAutoCreateTopicsEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `groupInitialRebalanceDelayMs`<sup>Required</sup> <a name="groupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs"></a>

```java
public java.lang.Number getGroupInitialRebalanceDelayMs();
```

- *Type:* java.lang.Number

---

##### `groupMaxSessionTimeoutMs`<sup>Required</sup> <a name="groupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs"></a>

```java
public java.lang.Number getGroupMaxSessionTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `groupMinSessionTimeoutMs`<sup>Required</sup> <a name="groupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs"></a>

```java
public java.lang.Number getGroupMinSessionTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logCleanerDeleteRetentionMs`<sup>Required</sup> <a name="logCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs"></a>

```java
public java.lang.Number getLogCleanerDeleteRetentionMs();
```

- *Type:* java.lang.Number

---

##### `logCleanerMinCompactionLagMs`<sup>Required</sup> <a name="logCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs"></a>

```java
public java.lang.String getLogCleanerMinCompactionLagMs();
```

- *Type:* java.lang.String

---

##### `logFlushIntervalMs`<sup>Required</sup> <a name="logFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs"></a>

```java
public java.lang.String getLogFlushIntervalMs();
```

- *Type:* java.lang.String

---

##### `logIndexIntervalBytes`<sup>Required</sup> <a name="logIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes"></a>

```java
public java.lang.Number getLogIndexIntervalBytes();
```

- *Type:* java.lang.Number

---

##### `logMessageDownconversionEnable`<sup>Required</sup> <a name="logMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable"></a>

```java
public java.lang.Object getLogMessageDownconversionEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logMessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="logMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```java
public java.lang.String getLogMessageTimestampDifferenceMaxMs();
```

- *Type:* java.lang.String

---

##### `logPreallocate`<sup>Required</sup> <a name="logPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate"></a>

```java
public java.lang.Object getLogPreallocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRetentionBytes`<sup>Required</sup> <a name="logRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes"></a>

```java
public java.lang.String getLogRetentionBytes();
```

- *Type:* java.lang.String

---

##### `logRetentionHours`<sup>Required</sup> <a name="logRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours"></a>

```java
public java.lang.Number getLogRetentionHours();
```

- *Type:* java.lang.Number

---

##### `logRetentionMs`<sup>Required</sup> <a name="logRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs"></a>

```java
public java.lang.String getLogRetentionMs();
```

- *Type:* java.lang.String

---

##### `logRollJitterMs`<sup>Required</sup> <a name="logRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs"></a>

```java
public java.lang.String getLogRollJitterMs();
```

- *Type:* java.lang.String

---

##### `logSegmentDeleteDelayMs`<sup>Required</sup> <a name="logSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs"></a>

```java
public java.lang.Number getLogSegmentDeleteDelayMs();
```

- *Type:* java.lang.Number

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaConfigConfig <a name="DatabaseKafkaConfigConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_config.DatabaseKafkaConfigConfig;

DatabaseKafkaConfigConfig.builder()
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
//  .autoCreateTopicsEnable(java.lang.Boolean)
//  .autoCreateTopicsEnable(IResolvable)
//  .groupInitialRebalanceDelayMs(java.lang.Number)
//  .groupMaxSessionTimeoutMs(java.lang.Number)
//  .groupMinSessionTimeoutMs(java.lang.Number)
//  .id(java.lang.String)
//  .logCleanerDeleteRetentionMs(java.lang.Number)
//  .logCleanerMinCompactionLagMs(java.lang.String)
//  .logFlushIntervalMs(java.lang.String)
//  .logIndexIntervalBytes(java.lang.Number)
//  .logMessageDownconversionEnable(java.lang.Boolean)
//  .logMessageDownconversionEnable(IResolvable)
//  .logMessageTimestampDifferenceMaxMs(java.lang.String)
//  .logPreallocate(java.lang.Boolean)
//  .logPreallocate(IResolvable)
//  .logRetentionBytes(java.lang.String)
//  .logRetentionHours(java.lang.Number)
//  .logRetentionMs(java.lang.String)
//  .logRollJitterMs(java.lang.String)
//  .logSegmentDeleteDelayMs(java.lang.Number)
//  .messageMaxBytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs">groupInitialRebalanceDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs">groupMaxSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs">groupMinSessionTimeoutMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs">logCleanerDeleteRetentionMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs">logCleanerMinCompactionLagMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs">logFlushIntervalMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes">logIndexIntervalBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable">logMessageDownconversionEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs">logMessageTimestampDifferenceMaxMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate">logPreallocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes">logRetentionBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours">logRetentionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs">logRetentionMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs">logRollJitterMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs">logSegmentDeleteDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `autoCreateTopicsEnable`<sup>Optional</sup> <a name="autoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable"></a>

```java
public java.lang.Object getAutoCreateTopicsEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `groupInitialRebalanceDelayMs`<sup>Optional</sup> <a name="groupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs"></a>

```java
public java.lang.Number getGroupInitialRebalanceDelayMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `groupMaxSessionTimeoutMs`<sup>Optional</sup> <a name="groupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs"></a>

```java
public java.lang.Number getGroupMaxSessionTimeoutMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `groupMinSessionTimeoutMs`<sup>Optional</sup> <a name="groupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs"></a>

```java
public java.lang.Number getGroupMinSessionTimeoutMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCleanerDeleteRetentionMs`<sup>Optional</sup> <a name="logCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs"></a>

```java
public java.lang.Number getLogCleanerDeleteRetentionMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `logCleanerMinCompactionLagMs`<sup>Optional</sup> <a name="logCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs"></a>

```java
public java.lang.String getLogCleanerMinCompactionLagMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `logFlushIntervalMs`<sup>Optional</sup> <a name="logFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs"></a>

```java
public java.lang.String getLogFlushIntervalMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `logIndexIntervalBytes`<sup>Optional</sup> <a name="logIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes"></a>

```java
public java.lang.Number getLogIndexIntervalBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `logMessageDownconversionEnable`<sup>Optional</sup> <a name="logMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable"></a>

```java
public java.lang.Object getLogMessageDownconversionEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `logMessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="logMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```java
public java.lang.String getLogMessageTimestampDifferenceMaxMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `logPreallocate`<sup>Optional</sup> <a name="logPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate"></a>

```java
public java.lang.Object getLogPreallocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `logRetentionBytes`<sup>Optional</sup> <a name="logRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes"></a>

```java
public java.lang.String getLogRetentionBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `logRetentionHours`<sup>Optional</sup> <a name="logRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours"></a>

```java
public java.lang.Number getLogRetentionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `logRetentionMs`<sup>Optional</sup> <a name="logRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs"></a>

```java
public java.lang.String getLogRetentionMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `logRollJitterMs`<sup>Optional</sup> <a name="logRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs"></a>

```java
public java.lang.String getLogRollJitterMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `logSegmentDeleteDelayMs`<sup>Optional</sup> <a name="logSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs"></a>

```java
public java.lang.Number getLogSegmentDeleteDelayMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---



