# `databaseMysqlConfig` Submodule <a name="`databaseMysqlConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMysqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMysqlConfig <a name="DatabaseMysqlConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config digitalocean_database_mysql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  binlog_retention_period: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  default_time_zone: str = None,
  group_concat_max_len: typing.Union[int, float] = None,
  id: str = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_buffer_size: typing.Union[int, float] = None,
  innodb_online_alter_log_max_size: typing.Union[int, float] = None,
  innodb_print_all_deadlocks: bool | IResolvable = None,
  innodb_rollback_on_timeout: bool | IResolvable = None,
  interactive_timeout: typing.Union[int, float] = None,
  internal_tmp_mem_storage_engine: str = None,
  long_query_time: typing.Union[int, float] = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_heap_table_size: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  slow_query_log: bool | IResolvable = None,
  sort_buffer_size: typing.Union[int, float] = None,
  sql_mode: str = None,
  sql_require_primary_key: bool | IResolvable = None,
  tmp_table_size: typing.Union[int, float] = None,
  wait_timeout: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.binlogRetentionPeriod">binlog_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.defaultTimeZone">default_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.groupConcatMaxLen">group_concat_max_len</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLogBufferSize">innodb_log_buffer_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbOnlineAlterLogMaxSize">innodb_online_alter_log_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbPrintAllDeadlocks">innodb_print_all_deadlocks</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbRollbackOnTimeout">innodb_rollback_on_timeout</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.internalTmpMemStorageEngine">internal_tmp_mem_storage_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.longQueryTime">long_query_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxHeapTableSize">max_heap_table_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.slowQueryLog">slow_query_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sortBufferSize">sort_buffer_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlMode">sql_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.tmpTableSize">tmp_table_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `binlog_retention_period`<sup>Optional</sup> <a name="binlog_retention_period" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.binlogRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `default_time_zone`<sup>Optional</sup> <a name="default_time_zone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.defaultTimeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `group_concat_max_len`<sup>Optional</sup> <a name="group_concat_max_len" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.groupConcatMaxLen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.informationSchemaStatsExpiry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtMinTokenSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtServerStopwordTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLockWaitTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `innodb_log_buffer_size`<sup>Optional</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLogBufferSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `innodb_online_alter_log_max_size`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbOnlineAlterLogMaxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `innodb_print_all_deadlocks`<sup>Optional</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbPrintAllDeadlocks"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `innodb_rollback_on_timeout`<sup>Optional</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbRollbackOnTimeout"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.interactiveTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `internal_tmp_mem_storage_engine`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.internalTmpMemStorageEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `long_query_time`<sup>Optional</sup> <a name="long_query_time" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.longQueryTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxAllowedPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxHeapTableSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netReadTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netWriteTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `slow_query_log`<sup>Optional</sup> <a name="slow_query_log" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.slowQueryLog"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sortBufferSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlRequirePrimaryKey"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.tmpTableSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.waitTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour">reset_backup_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute">reset_backup_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod">reset_binlog_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone">reset_default_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen">reset_group_concat_max_len</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry">reset_information_schema_stats_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize">reset_innodb_ft_min_token_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable">reset_innodb_ft_server_stopword_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout">reset_innodb_lock_wait_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize">reset_innodb_log_buffer_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize">reset_innodb_online_alter_log_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks">reset_innodb_print_all_deadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout">reset_innodb_rollback_on_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout">reset_interactive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine">reset_internal_tmp_mem_storage_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime">reset_long_query_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket">reset_max_allowed_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize">reset_max_heap_table_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout">reset_net_read_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout">reset_net_write_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog">reset_slow_query_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize">reset_sort_buffer_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode">reset_sql_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey">reset_sql_require_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize">reset_tmp_table_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout">reset_wait_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backup_hour` <a name="reset_backup_hour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour"></a>

```python
def reset_backup_hour() -> None
```

##### `reset_backup_minute` <a name="reset_backup_minute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute"></a>

```python
def reset_backup_minute() -> None
```

##### `reset_binlog_retention_period` <a name="reset_binlog_retention_period" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod"></a>

```python
def reset_binlog_retention_period() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_default_time_zone` <a name="reset_default_time_zone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone"></a>

```python
def reset_default_time_zone() -> None
```

##### `reset_group_concat_max_len` <a name="reset_group_concat_max_len" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen"></a>

```python
def reset_group_concat_max_len() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_information_schema_stats_expiry` <a name="reset_information_schema_stats_expiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry"></a>

```python
def reset_information_schema_stats_expiry() -> None
```

##### `reset_innodb_ft_min_token_size` <a name="reset_innodb_ft_min_token_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize"></a>

```python
def reset_innodb_ft_min_token_size() -> None
```

##### `reset_innodb_ft_server_stopword_table` <a name="reset_innodb_ft_server_stopword_table" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable"></a>

```python
def reset_innodb_ft_server_stopword_table() -> None
```

##### `reset_innodb_lock_wait_timeout` <a name="reset_innodb_lock_wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout"></a>

```python
def reset_innodb_lock_wait_timeout() -> None
```

##### `reset_innodb_log_buffer_size` <a name="reset_innodb_log_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize"></a>

```python
def reset_innodb_log_buffer_size() -> None
```

##### `reset_innodb_online_alter_log_max_size` <a name="reset_innodb_online_alter_log_max_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize"></a>

```python
def reset_innodb_online_alter_log_max_size() -> None
```

##### `reset_innodb_print_all_deadlocks` <a name="reset_innodb_print_all_deadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks"></a>

```python
def reset_innodb_print_all_deadlocks() -> None
```

##### `reset_innodb_rollback_on_timeout` <a name="reset_innodb_rollback_on_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout"></a>

```python
def reset_innodb_rollback_on_timeout() -> None
```

##### `reset_interactive_timeout` <a name="reset_interactive_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout"></a>

```python
def reset_interactive_timeout() -> None
```

##### `reset_internal_tmp_mem_storage_engine` <a name="reset_internal_tmp_mem_storage_engine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine"></a>

```python
def reset_internal_tmp_mem_storage_engine() -> None
```

##### `reset_long_query_time` <a name="reset_long_query_time" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime"></a>

```python
def reset_long_query_time() -> None
```

##### `reset_max_allowed_packet` <a name="reset_max_allowed_packet" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket"></a>

```python
def reset_max_allowed_packet() -> None
```

##### `reset_max_heap_table_size` <a name="reset_max_heap_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize"></a>

```python
def reset_max_heap_table_size() -> None
```

##### `reset_net_read_timeout` <a name="reset_net_read_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout"></a>

```python
def reset_net_read_timeout() -> None
```

##### `reset_net_write_timeout` <a name="reset_net_write_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout"></a>

```python
def reset_net_write_timeout() -> None
```

##### `reset_slow_query_log` <a name="reset_slow_query_log" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog"></a>

```python
def reset_slow_query_log() -> None
```

##### `reset_sort_buffer_size` <a name="reset_sort_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize"></a>

```python
def reset_sort_buffer_size() -> None
```

##### `reset_sql_mode` <a name="reset_sql_mode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode"></a>

```python
def reset_sql_mode() -> None
```

##### `reset_sql_require_primary_key` <a name="reset_sql_require_primary_key" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey"></a>

```python
def reset_sql_require_primary_key() -> None
```

##### `reset_tmp_table_size` <a name="reset_tmp_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize"></a>

```python
def reset_tmp_table_size() -> None
```

##### `reset_wait_timeout` <a name="reset_wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout"></a>

```python
def reset_wait_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseMysqlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseMysqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMysqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput">backup_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput">backup_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput">binlog_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput">default_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput">group_concat_max_len_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput">information_schema_stats_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput">innodb_ft_min_token_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput">innodb_ft_server_stopword_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput">innodb_lock_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput">innodb_log_buffer_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput">innodb_online_alter_log_max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput">innodb_print_all_deadlocks_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput">innodb_rollback_on_timeout_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput">interactive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput">internal_tmp_mem_storage_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput">long_query_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput">max_allowed_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput">max_heap_table_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput">net_read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput">net_write_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput">slow_query_log_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput">sort_buffer_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput">sql_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput">sql_require_primary_key_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput">tmp_table_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput">wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod">binlog_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone">default_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen">group_concat_max_len</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize">innodb_log_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize">innodb_online_alter_log_max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks">innodb_print_all_deadlocks</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout">innodb_rollback_on_timeout</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine">internal_tmp_mem_storage_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime">long_query_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog">slow_query_log</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize">sort_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize">tmp_table_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_hour_input`<sup>Optional</sup> <a name="backup_hour_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput"></a>

```python
backup_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute_input`<sup>Optional</sup> <a name="backup_minute_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput"></a>

```python
backup_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_retention_period_input`<sup>Optional</sup> <a name="binlog_retention_period_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput"></a>

```python
binlog_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_time_zone_input`<sup>Optional</sup> <a name="default_time_zone_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput"></a>

```python
default_time_zone_input: str
```

- *Type:* str

---

##### `group_concat_max_len_input`<sup>Optional</sup> <a name="group_concat_max_len_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput"></a>

```python
group_concat_max_len_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `information_schema_stats_expiry_input`<sup>Optional</sup> <a name="information_schema_stats_expiry_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput"></a>

```python
information_schema_stats_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size_input`<sup>Optional</sup> <a name="innodb_ft_min_token_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput"></a>

```python
innodb_ft_min_token_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_server_stopword_table_input`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput"></a>

```python
innodb_ft_server_stopword_table_input: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout_input`<sup>Optional</sup> <a name="innodb_lock_wait_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput"></a>

```python
innodb_lock_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_buffer_size_input`<sup>Optional</sup> <a name="innodb_log_buffer_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput"></a>

```python
innodb_log_buffer_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_online_alter_log_max_size_input`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput"></a>

```python
innodb_online_alter_log_max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_print_all_deadlocks_input`<sup>Optional</sup> <a name="innodb_print_all_deadlocks_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput"></a>

```python
innodb_print_all_deadlocks_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_rollback_on_timeout_input`<sup>Optional</sup> <a name="innodb_rollback_on_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput"></a>

```python
innodb_rollback_on_timeout_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `interactive_timeout_input`<sup>Optional</sup> <a name="interactive_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput"></a>

```python
interactive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_tmp_mem_storage_engine_input`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput"></a>

```python
internal_tmp_mem_storage_engine_input: str
```

- *Type:* str

---

##### `long_query_time_input`<sup>Optional</sup> <a name="long_query_time_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput"></a>

```python
long_query_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_packet_input`<sup>Optional</sup> <a name="max_allowed_packet_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput"></a>

```python
max_allowed_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_heap_table_size_input`<sup>Optional</sup> <a name="max_heap_table_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput"></a>

```python
max_heap_table_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout_input`<sup>Optional</sup> <a name="net_read_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput"></a>

```python
net_read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout_input`<sup>Optional</sup> <a name="net_write_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput"></a>

```python
net_write_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slow_query_log_input`<sup>Optional</sup> <a name="slow_query_log_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput"></a>

```python
slow_query_log_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sort_buffer_size_input`<sup>Optional</sup> <a name="sort_buffer_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput"></a>

```python
sort_buffer_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_mode_input`<sup>Optional</sup> <a name="sql_mode_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput"></a>

```python
sql_mode_input: str
```

- *Type:* str

---

##### `sql_require_primary_key_input`<sup>Optional</sup> <a name="sql_require_primary_key_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput"></a>

```python
sql_require_primary_key_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_table_size_input`<sup>Optional</sup> <a name="tmp_table_size_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput"></a>

```python
tmp_table_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_timeout_input`<sup>Optional</sup> <a name="wait_timeout_input" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput"></a>

```python
wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_hour`<sup>Required</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute`<sup>Required</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_retention_period`<sup>Required</sup> <a name="binlog_retention_period" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod"></a>

```python
binlog_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_time_zone`<sup>Required</sup> <a name="default_time_zone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone"></a>

```python
default_time_zone: str
```

- *Type:* str

---

##### `group_concat_max_len`<sup>Required</sup> <a name="group_concat_max_len" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen"></a>

```python
group_concat_max_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `information_schema_stats_expiry`<sup>Required</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size`<sup>Required</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_server_stopword_table`<sup>Required</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout`<sup>Required</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_buffer_size`<sup>Required</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize"></a>

```python
innodb_log_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_online_alter_log_max_size`<sup>Required</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize"></a>

```python
innodb_online_alter_log_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_print_all_deadlocks`<sup>Required</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks"></a>

```python
innodb_print_all_deadlocks: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_rollback_on_timeout`<sup>Required</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout"></a>

```python
innodb_rollback_on_timeout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `interactive_timeout`<sup>Required</sup> <a name="interactive_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_tmp_mem_storage_engine`<sup>Required</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine"></a>

```python
internal_tmp_mem_storage_engine: str
```

- *Type:* str

---

##### `long_query_time`<sup>Required</sup> <a name="long_query_time" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime"></a>

```python
long_query_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_packet`<sup>Required</sup> <a name="max_allowed_packet" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_heap_table_size`<sup>Required</sup> <a name="max_heap_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize"></a>

```python
max_heap_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout`<sup>Required</sup> <a name="net_read_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout`<sup>Required</sup> <a name="net_write_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slow_query_log`<sup>Required</sup> <a name="slow_query_log" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog"></a>

```python
slow_query_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sort_buffer_size`<sup>Required</sup> <a name="sort_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize"></a>

```python
sort_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `sql_require_primary_key`<sup>Required</sup> <a name="sql_require_primary_key" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_table_size`<sup>Required</sup> <a name="tmp_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize"></a>

```python
tmp_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMysqlConfigConfig <a name="DatabaseMysqlConfigConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mysql_config

databaseMysqlConfig.DatabaseMysqlConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  binlog_retention_period: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  default_time_zone: str = None,
  group_concat_max_len: typing.Union[int, float] = None,
  id: str = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_buffer_size: typing.Union[int, float] = None,
  innodb_online_alter_log_max_size: typing.Union[int, float] = None,
  innodb_print_all_deadlocks: bool | IResolvable = None,
  innodb_rollback_on_timeout: bool | IResolvable = None,
  interactive_timeout: typing.Union[int, float] = None,
  internal_tmp_mem_storage_engine: str = None,
  long_query_time: typing.Union[int, float] = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_heap_table_size: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  slow_query_log: bool | IResolvable = None,
  sort_buffer_size: typing.Union[int, float] = None,
  sql_mode: str = None,
  sql_require_primary_key: bool | IResolvable = None,
  tmp_table_size: typing.Union[int, float] = None,
  wait_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod">binlog_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone">default_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen">group_concat_max_len</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize">innodb_log_buffer_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize">innodb_online_alter_log_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks">innodb_print_all_deadlocks</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout">innodb_rollback_on_timeout</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine">internal_tmp_mem_storage_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime">long_query_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog">slow_query_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize">sort_buffer_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode">sql_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize">tmp_table_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `binlog_retention_period`<sup>Optional</sup> <a name="binlog_retention_period" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod"></a>

```python
binlog_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `default_time_zone`<sup>Optional</sup> <a name="default_time_zone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone"></a>

```python
default_time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `group_concat_max_len`<sup>Optional</sup> <a name="group_concat_max_len" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen"></a>

```python
group_concat_max_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `innodb_log_buffer_size`<sup>Optional</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize"></a>

```python
innodb_log_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `innodb_online_alter_log_max_size`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize"></a>

```python
innodb_online_alter_log_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `innodb_print_all_deadlocks`<sup>Optional</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks"></a>

```python
innodb_print_all_deadlocks: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `innodb_rollback_on_timeout`<sup>Optional</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout"></a>

```python
innodb_rollback_on_timeout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `internal_tmp_mem_storage_engine`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine"></a>

```python
internal_tmp_mem_storage_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `long_query_time`<sup>Optional</sup> <a name="long_query_time" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime"></a>

```python
long_query_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize"></a>

```python
max_heap_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `slow_query_log`<sup>Optional</sup> <a name="slow_query_log" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog"></a>

```python
slow_query_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize"></a>

```python
sort_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize"></a>

```python
tmp_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---



