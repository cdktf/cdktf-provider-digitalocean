# `databaseMysqlConfig` Submodule <a name="`databaseMysqlConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMysqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMysqlConfig <a name="DatabaseMysqlConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config digitalocean_database_mysql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfig;

DatabaseMysqlConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .binlogRetentionPeriod(java.lang.Number)
//  .connectTimeout(java.lang.Number)
//  .defaultTimeZone(java.lang.String)
//  .groupConcatMaxLen(java.lang.Number)
//  .id(java.lang.String)
//  .informationSchemaStatsExpiry(java.lang.Number)
//  .innodbFtMinTokenSize(java.lang.Number)
//  .innodbFtServerStopwordTable(java.lang.String)
//  .innodbLockWaitTimeout(java.lang.Number)
//  .innodbLogBufferSize(java.lang.Number)
//  .innodbOnlineAlterLogMaxSize(java.lang.Number)
//  .innodbPrintAllDeadlocks(java.lang.Boolean)
//  .innodbPrintAllDeadlocks(IResolvable)
//  .innodbRollbackOnTimeout(java.lang.Boolean)
//  .innodbRollbackOnTimeout(IResolvable)
//  .interactiveTimeout(java.lang.Number)
//  .internalTmpMemStorageEngine(java.lang.String)
//  .longQueryTime(java.lang.Number)
//  .maxAllowedPacket(java.lang.Number)
//  .maxHeapTableSize(java.lang.Number)
//  .netReadTimeout(java.lang.Number)
//  .netWriteTimeout(java.lang.Number)
//  .slowQueryLog(java.lang.Boolean)
//  .slowQueryLog(IResolvable)
//  .sortBufferSize(java.lang.Number)
//  .sqlMode(java.lang.String)
//  .sqlRequirePrimaryKey(java.lang.Boolean)
//  .sqlRequirePrimaryKey(IResolvable)
//  .tmpTableSize(java.lang.Number)
//  .waitTimeout(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.defaultTimeZone">defaultTimeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.longQueryTime">longQueryTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.slowQueryLog">slowQueryLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupHour"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.backupMinute"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `binlogRetentionPeriod`<sup>Optional</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.binlogRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.connectTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `defaultTimeZone`<sup>Optional</sup> <a name="defaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.defaultTimeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `groupConcatMaxLen`<sup>Optional</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.groupConcatMaxLen"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.informationSchemaStatsExpiry"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtMinTokenSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbFtServerStopwordTable"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLockWaitTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `innodbLogBufferSize`<sup>Optional</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbLogBufferSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `innodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbOnlineAlterLogMaxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `innodbPrintAllDeadlocks`<sup>Optional</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbPrintAllDeadlocks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `innodbRollbackOnTimeout`<sup>Optional</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.innodbRollbackOnTimeout"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.interactiveTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `internalTmpMemStorageEngine`<sup>Optional</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.internalTmpMemStorageEngine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `longQueryTime`<sup>Optional</sup> <a name="longQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.longQueryTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxAllowedPacket"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.maxHeapTableSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netReadTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.netWriteTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `slowQueryLog`<sup>Optional</sup> <a name="slowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.slowQueryLog"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sortBufferSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.sqlRequirePrimaryKey"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.tmpTableSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.waitTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod">resetBinlogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone">resetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen">resetGroupConcatMaxLen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry">resetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize">resetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable">resetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout">resetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize">resetInnodbLogBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize">resetInnodbOnlineAlterLogMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks">resetInnodbPrintAllDeadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout">resetInnodbRollbackOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout">resetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine">resetInternalTmpMemStorageEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime">resetLongQueryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket">resetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize">resetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout">resetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout">resetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog">resetSlowQueryLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize">resetSortBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode">resetSqlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey">resetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize">resetTmpTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetBinlogRetentionPeriod` <a name="resetBinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod"></a>

```java
public void resetBinlogRetentionPeriod()
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetDefaultTimeZone` <a name="resetDefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone"></a>

```java
public void resetDefaultTimeZone()
```

##### `resetGroupConcatMaxLen` <a name="resetGroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen"></a>

```java
public void resetGroupConcatMaxLen()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInformationSchemaStatsExpiry` <a name="resetInformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry"></a>

```java
public void resetInformationSchemaStatsExpiry()
```

##### `resetInnodbFtMinTokenSize` <a name="resetInnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize"></a>

```java
public void resetInnodbFtMinTokenSize()
```

##### `resetInnodbFtServerStopwordTable` <a name="resetInnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable"></a>

```java
public void resetInnodbFtServerStopwordTable()
```

##### `resetInnodbLockWaitTimeout` <a name="resetInnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout"></a>

```java
public void resetInnodbLockWaitTimeout()
```

##### `resetInnodbLogBufferSize` <a name="resetInnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize"></a>

```java
public void resetInnodbLogBufferSize()
```

##### `resetInnodbOnlineAlterLogMaxSize` <a name="resetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize"></a>

```java
public void resetInnodbOnlineAlterLogMaxSize()
```

##### `resetInnodbPrintAllDeadlocks` <a name="resetInnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks"></a>

```java
public void resetInnodbPrintAllDeadlocks()
```

##### `resetInnodbRollbackOnTimeout` <a name="resetInnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout"></a>

```java
public void resetInnodbRollbackOnTimeout()
```

##### `resetInteractiveTimeout` <a name="resetInteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout"></a>

```java
public void resetInteractiveTimeout()
```

##### `resetInternalTmpMemStorageEngine` <a name="resetInternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine"></a>

```java
public void resetInternalTmpMemStorageEngine()
```

##### `resetLongQueryTime` <a name="resetLongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime"></a>

```java
public void resetLongQueryTime()
```

##### `resetMaxAllowedPacket` <a name="resetMaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket"></a>

```java
public void resetMaxAllowedPacket()
```

##### `resetMaxHeapTableSize` <a name="resetMaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize"></a>

```java
public void resetMaxHeapTableSize()
```

##### `resetNetReadTimeout` <a name="resetNetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout"></a>

```java
public void resetNetReadTimeout()
```

##### `resetNetWriteTimeout` <a name="resetNetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout"></a>

```java
public void resetNetWriteTimeout()
```

##### `resetSlowQueryLog` <a name="resetSlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog"></a>

```java
public void resetSlowQueryLog()
```

##### `resetSortBufferSize` <a name="resetSortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize"></a>

```java
public void resetSortBufferSize()
```

##### `resetSqlMode` <a name="resetSqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode"></a>

```java
public void resetSqlMode()
```

##### `resetSqlRequirePrimaryKey` <a name="resetSqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey"></a>

```java
public void resetSqlRequirePrimaryKey()
```

##### `resetTmpTableSize` <a name="resetTmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize"></a>

```java
public void resetTmpTableSize()
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout"></a>

```java
public void resetWaitTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfig;

DatabaseMysqlConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfig;

DatabaseMysqlConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfig;

DatabaseMysqlConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfig;

DatabaseMysqlConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMysqlConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMysqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMysqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMysqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput">binlogRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput">defaultTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput">groupConcatMaxLenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput">informationSchemaStatsExpiryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput">innodbFtMinTokenSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput">innodbFtServerStopwordTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput">innodbLockWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput">innodbLogBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput">innodbOnlineAlterLogMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput">innodbPrintAllDeadlocksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput">innodbRollbackOnTimeoutInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput">interactiveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput">internalTmpMemStorageEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput">longQueryTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput">maxAllowedPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput">maxHeapTableSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput">netReadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput">netWriteTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput">slowQueryLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput">sortBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput">sqlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput">sqlRequirePrimaryKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput">tmpTableSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone">defaultTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime">longQueryTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog">slowQueryLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `binlogRetentionPeriodInput`<sup>Optional</sup> <a name="binlogRetentionPeriodInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput"></a>

```java
public java.lang.Number getBinlogRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultTimeZoneInput`<sup>Optional</sup> <a name="defaultTimeZoneInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput"></a>

```java
public java.lang.String getDefaultTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `groupConcatMaxLenInput`<sup>Optional</sup> <a name="groupConcatMaxLenInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput"></a>

```java
public java.lang.Number getGroupConcatMaxLenInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `informationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="informationSchemaStatsExpiryInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiryInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMinTokenSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput"></a>

```java
public java.lang.Number getInnodbFtMinTokenSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="innodbFtServerStopwordTableInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput"></a>

```java
public java.lang.String getInnodbFtServerStopwordTableInput();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="innodbLockWaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput"></a>

```java
public java.lang.Number getInnodbLockWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `innodbLogBufferSizeInput`<sup>Optional</sup> <a name="innodbLogBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput"></a>

```java
public java.lang.Number getInnodbLogBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="innodbPrintAllDeadlocksInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="innodbRollbackOnTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeoutInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `interactiveTimeoutInput`<sup>Optional</sup> <a name="interactiveTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput"></a>

```java
public java.lang.Number getInteractiveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `internalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="internalTmpMemStorageEngineInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput"></a>

```java
public java.lang.String getInternalTmpMemStorageEngineInput();
```

- *Type:* java.lang.String

---

##### `longQueryTimeInput`<sup>Optional</sup> <a name="longQueryTimeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput"></a>

```java
public java.lang.Number getLongQueryTimeInput();
```

- *Type:* java.lang.Number

---

##### `maxAllowedPacketInput`<sup>Optional</sup> <a name="maxAllowedPacketInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput"></a>

```java
public java.lang.Number getMaxAllowedPacketInput();
```

- *Type:* java.lang.Number

---

##### `maxHeapTableSizeInput`<sup>Optional</sup> <a name="maxHeapTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput"></a>

```java
public java.lang.Number getMaxHeapTableSizeInput();
```

- *Type:* java.lang.Number

---

##### `netReadTimeoutInput`<sup>Optional</sup> <a name="netReadTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput"></a>

```java
public java.lang.Number getNetReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeoutInput`<sup>Optional</sup> <a name="netWriteTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput"></a>

```java
public java.lang.Number getNetWriteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `slowQueryLogInput`<sup>Optional</sup> <a name="slowQueryLogInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput"></a>

```java
public java.lang.Object getSlowQueryLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortBufferSizeInput`<sup>Optional</sup> <a name="sortBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput"></a>

```java
public java.lang.Number getSortBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `sqlModeInput`<sup>Optional</sup> <a name="sqlModeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput"></a>

```java
public java.lang.String getSqlModeInput();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="sqlRequirePrimaryKeyInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput"></a>

```java
public java.lang.Object getSqlRequirePrimaryKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpTableSizeInput`<sup>Optional</sup> <a name="tmpTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput"></a>

```java
public java.lang.Number getTmpTableSizeInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput"></a>

```java
public java.lang.Number getWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `binlogRetentionPeriod`<sup>Required</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod"></a>

```java
public java.lang.Number getBinlogRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultTimeZone`<sup>Required</sup> <a name="defaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone"></a>

```java
public java.lang.String getDefaultTimeZone();
```

- *Type:* java.lang.String

---

##### `groupConcatMaxLen`<sup>Required</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen"></a>

```java
public java.lang.Number getGroupConcatMaxLen();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `innodbLogBufferSize`<sup>Required</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize"></a>

```java
public java.lang.Number getInnodbLogBufferSize();
```

- *Type:* java.lang.Number

---

##### `innodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSize();
```

- *Type:* java.lang.Number

---

##### `innodbPrintAllDeadlocks`<sup>Required</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbRollbackOnTimeout`<sup>Required</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `internalTmpMemStorageEngine`<sup>Required</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine"></a>

```java
public java.lang.String getInternalTmpMemStorageEngine();
```

- *Type:* java.lang.String

---

##### `longQueryTime`<sup>Required</sup> <a name="longQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime"></a>

```java
public java.lang.Number getLongQueryTime();
```

- *Type:* java.lang.Number

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize"></a>

```java
public java.lang.Number getMaxHeapTableSize();
```

- *Type:* java.lang.Number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `slowQueryLog`<sup>Required</sup> <a name="slowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog"></a>

```java
public java.lang.Object getSlowQueryLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize"></a>

```java
public java.lang.Number getSortBufferSize();
```

- *Type:* java.lang.Number

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize"></a>

```java
public java.lang.Number getTmpTableSize();
```

- *Type:* java.lang.Number

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMysqlConfigConfig <a name="DatabaseMysqlConfigConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_mysql_config.DatabaseMysqlConfigConfig;

DatabaseMysqlConfigConfig.builder()
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
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .binlogRetentionPeriod(java.lang.Number)
//  .connectTimeout(java.lang.Number)
//  .defaultTimeZone(java.lang.String)
//  .groupConcatMaxLen(java.lang.Number)
//  .id(java.lang.String)
//  .informationSchemaStatsExpiry(java.lang.Number)
//  .innodbFtMinTokenSize(java.lang.Number)
//  .innodbFtServerStopwordTable(java.lang.String)
//  .innodbLockWaitTimeout(java.lang.Number)
//  .innodbLogBufferSize(java.lang.Number)
//  .innodbOnlineAlterLogMaxSize(java.lang.Number)
//  .innodbPrintAllDeadlocks(java.lang.Boolean)
//  .innodbPrintAllDeadlocks(IResolvable)
//  .innodbRollbackOnTimeout(java.lang.Boolean)
//  .innodbRollbackOnTimeout(IResolvable)
//  .interactiveTimeout(java.lang.Number)
//  .internalTmpMemStorageEngine(java.lang.String)
//  .longQueryTime(java.lang.Number)
//  .maxAllowedPacket(java.lang.Number)
//  .maxHeapTableSize(java.lang.Number)
//  .netReadTimeout(java.lang.Number)
//  .netWriteTimeout(java.lang.Number)
//  .slowQueryLog(java.lang.Boolean)
//  .slowQueryLog(IResolvable)
//  .sortBufferSize(java.lang.Number)
//  .sqlMode(java.lang.String)
//  .sqlRequirePrimaryKey(java.lang.Boolean)
//  .sqlRequirePrimaryKey(IResolvable)
//  .tmpTableSize(java.lang.Number)
//  .waitTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone">defaultTimeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime">longQueryTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog">slowQueryLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `binlogRetentionPeriod`<sup>Optional</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod"></a>

```java
public java.lang.Number getBinlogRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `defaultTimeZone`<sup>Optional</sup> <a name="defaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone"></a>

```java
public java.lang.String getDefaultTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `groupConcatMaxLen`<sup>Optional</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen"></a>

```java
public java.lang.Number getGroupConcatMaxLen();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `innodbLogBufferSize`<sup>Optional</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize"></a>

```java
public java.lang.Number getInnodbLogBufferSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `innodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `innodbPrintAllDeadlocks`<sup>Optional</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `innodbRollbackOnTimeout`<sup>Optional</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `internalTmpMemStorageEngine`<sup>Optional</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine"></a>

```java
public java.lang.String getInternalTmpMemStorageEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `longQueryTime`<sup>Optional</sup> <a name="longQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime"></a>

```java
public java.lang.Number getLongQueryTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize"></a>

```java
public java.lang.Number getMaxHeapTableSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `slowQueryLog`<sup>Optional</sup> <a name="slowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog"></a>

```java
public java.lang.Object getSlowQueryLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize"></a>

```java
public java.lang.Number getSortBufferSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize"></a>

```java
public java.lang.Number getTmpTableSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---



