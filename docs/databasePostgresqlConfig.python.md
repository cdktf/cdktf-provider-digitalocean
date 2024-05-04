# `databasePostgresqlConfig` Submodule <a name="`databasePostgresqlConfig` Submodule" id="@cdktf/provider-digitalocean.databasePostgresqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePostgresqlConfig <a name="DatabasePostgresqlConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfig(
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
  autovacuum_analyze_scale_factor: typing.Union[int, float] = None,
  autovacuum_analyze_threshold: typing.Union[int, float] = None,
  autovacuum_freeze_max_age: typing.Union[int, float] = None,
  autovacuum_max_workers: typing.Union[int, float] = None,
  autovacuum_naptime: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_delay: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_limit: typing.Union[int, float] = None,
  autovacuum_vacuum_scale_factor: typing.Union[int, float] = None,
  autovacuum_vacuum_threshold: typing.Union[int, float] = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  bgwriter_delay: typing.Union[int, float] = None,
  bgwriter_flush_after: typing.Union[int, float] = None,
  bgwriter_lru_maxpages: typing.Union[int, float] = None,
  bgwriter_lru_multiplier: typing.Union[int, float] = None,
  deadlock_timeout: typing.Union[int, float] = None,
  default_toast_compression: str = None,
  id: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  jit: typing.Union[bool, IResolvable] = None,
  log_autovacuum_min_duration: typing.Union[int, float] = None,
  log_error_verbosity: str = None,
  log_line_prefix: str = None,
  log_min_duration_statement: typing.Union[int, float] = None,
  max_files_per_process: typing.Union[int, float] = None,
  max_locks_per_transaction: typing.Union[int, float] = None,
  max_logical_replication_workers: typing.Union[int, float] = None,
  max_parallel_workers: typing.Union[int, float] = None,
  max_parallel_workers_per_gather: typing.Union[int, float] = None,
  max_pred_locks_per_transaction: typing.Union[int, float] = None,
  max_prepared_transactions: typing.Union[int, float] = None,
  max_replication_slots: typing.Union[int, float] = None,
  max_stack_depth: typing.Union[int, float] = None,
  max_standby_archive_delay: typing.Union[int, float] = None,
  max_standby_streaming_delay: typing.Union[int, float] = None,
  max_wal_senders: typing.Union[int, float] = None,
  max_worker_processes: typing.Union[int, float] = None,
  pgbouncer: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]] = None,
  pg_partman_bgw_interval: typing.Union[int, float] = None,
  pg_partman_bgw_role: str = None,
  pg_stat_statements_track: str = None,
  shared_buffers_percentage: typing.Union[int, float] = None,
  temp_file_limit: typing.Union[int, float] = None,
  timescaledb: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]] = None,
  timezone: str = None,
  track_activity_query_size: typing.Union[int, float] = None,
  track_commit_timestamp: str = None,
  track_functions: str = None,
  track_io_timing: str = None,
  wal_sender_timeout: typing.Union[int, float] = None,
  wal_writer_delay: typing.Union[int, float] = None,
  work_mem: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeScaleFactor">autovacuum_analyze_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeThreshold">autovacuum_analyze_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumFreezeMaxAge">autovacuum_freeze_max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumMaxWorkers">autovacuum_max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumNaptime">autovacuum_naptime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostDelay">autovacuum_vacuum_cost_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostLimit">autovacuum_vacuum_cost_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumScaleFactor">autovacuum_vacuum_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumThreshold">autovacuum_vacuum_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterDelay">bgwriter_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterFlushAfter">bgwriter_flush_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMaxpages">bgwriter_lru_maxpages</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMultiplier">bgwriter_lru_multiplier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.deadlockTimeout">deadlock_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.defaultToastCompression">default_toast_compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.jit">jit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logAutovacuumMinDuration">log_autovacuum_min_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logErrorVerbosity">log_error_verbosity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logLinePrefix">log_line_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logMinDurationStatement">log_min_duration_statement</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxFilesPerProcess">max_files_per_process</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLocksPerTransaction">max_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLogicalReplicationWorkers">max_logical_replication_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkers">max_parallel_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkersPerGather">max_parallel_workers_per_gather</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPredLocksPerTransaction">max_pred_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPreparedTransactions">max_prepared_transactions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxReplicationSlots">max_replication_slots</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStackDepth">max_stack_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyArchiveDelay">max_standby_archive_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyStreamingDelay">max_standby_streaming_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWalSenders">max_wal_senders</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWorkerProcesses">max_worker_processes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgbouncer">pgbouncer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]</code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwInterval">pg_partman_bgw_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwRole">pg_partman_bgw_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgStatStatementsTrack">pg_stat_statements_track</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.sharedBuffersPercentage">shared_buffers_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.tempFileLimit">temp_file_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timescaledb">timescaledb</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]</code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackActivityQuerySize">track_activity_query_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackCommitTimestamp">track_commit_timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackFunctions">track_functions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackIoTiming">track_io_timing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walSenderTimeout">wal_sender_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walWriterDelay">wal_writer_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.workMem">work_mem</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `autovacuum_analyze_scale_factor`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeScaleFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `autovacuum_analyze_threshold`<sup>Optional</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `autovacuum_freeze_max_age`<sup>Optional</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumFreezeMaxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `autovacuum_max_workers`<sup>Optional</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumMaxWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `autovacuum_naptime`<sup>Optional</sup> <a name="autovacuum_naptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumNaptime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `autovacuum_vacuum_cost_delay`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `autovacuum_vacuum_cost_limit`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `autovacuum_vacuum_scale_factor`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumScaleFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `autovacuum_vacuum_threshold`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `bgwriter_delay`<sup>Optional</sup> <a name="bgwriter_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `bgwriter_flush_after`<sup>Optional</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterFlushAfter"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `bgwriter_lru_maxpages`<sup>Optional</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMaxpages"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `bgwriter_lru_multiplier`<sup>Optional</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMultiplier"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `deadlock_timeout`<sup>Optional</sup> <a name="deadlock_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.deadlockTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `default_toast_compression`<sup>Optional</sup> <a name="default_toast_compression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.defaultToastCompression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.idleInTransactionSessionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.jit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `log_autovacuum_min_duration`<sup>Optional</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logAutovacuumMinDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `log_error_verbosity`<sup>Optional</sup> <a name="log_error_verbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logErrorVerbosity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `log_line_prefix`<sup>Optional</sup> <a name="log_line_prefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logLinePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `log_min_duration_statement`<sup>Optional</sup> <a name="log_min_duration_statement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logMinDurationStatement"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `max_files_per_process`<sup>Optional</sup> <a name="max_files_per_process" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxFilesPerProcess"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `max_locks_per_transaction`<sup>Optional</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLocksPerTransaction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `max_logical_replication_workers`<sup>Optional</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLogicalReplicationWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `max_parallel_workers`<sup>Optional</sup> <a name="max_parallel_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `max_parallel_workers_per_gather`<sup>Optional</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkersPerGather"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `max_pred_locks_per_transaction`<sup>Optional</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPredLocksPerTransaction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `max_prepared_transactions`<sup>Optional</sup> <a name="max_prepared_transactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPreparedTransactions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `max_replication_slots`<sup>Optional</sup> <a name="max_replication_slots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxReplicationSlots"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `max_stack_depth`<sup>Optional</sup> <a name="max_stack_depth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStackDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `max_standby_archive_delay`<sup>Optional</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyArchiveDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `max_standby_streaming_delay`<sup>Optional</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyStreamingDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `max_wal_senders`<sup>Optional</sup> <a name="max_wal_senders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWalSenders"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `max_worker_processes`<sup>Optional</sup> <a name="max_worker_processes" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWorkerProcesses"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgbouncer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `pg_partman_bgw_interval`<sup>Optional</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `pg_partman_bgw_role`<sup>Optional</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `pg_stat_statements_track`<sup>Optional</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgStatStatementsTrack"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `shared_buffers_percentage`<sup>Optional</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.sharedBuffersPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `temp_file_limit`<sup>Optional</sup> <a name="temp_file_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.tempFileLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timescaledb"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `track_activity_query_size`<sup>Optional</sup> <a name="track_activity_query_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackActivityQuerySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `track_commit_timestamp`<sup>Optional</sup> <a name="track_commit_timestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackCommitTimestamp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `track_functions`<sup>Optional</sup> <a name="track_functions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackFunctions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `track_io_timing`<sup>Optional</sup> <a name="track_io_timing" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackIoTiming"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `wal_sender_timeout`<sup>Optional</sup> <a name="wal_sender_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walSenderTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `wal_writer_delay`<sup>Optional</sup> <a name="wal_writer_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walWriterDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `work_mem`<sup>Optional</sup> <a name="work_mem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.workMem"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer">put_pgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb">put_timescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor">reset_autovacuum_analyze_scale_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold">reset_autovacuum_analyze_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge">reset_autovacuum_freeze_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers">reset_autovacuum_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime">reset_autovacuum_naptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay">reset_autovacuum_vacuum_cost_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit">reset_autovacuum_vacuum_cost_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor">reset_autovacuum_vacuum_scale_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold">reset_autovacuum_vacuum_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour">reset_backup_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute">reset_backup_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay">reset_bgwriter_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter">reset_bgwriter_flush_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages">reset_bgwriter_lru_maxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier">reset_bgwriter_lru_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout">reset_deadlock_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression">reset_default_toast_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout">reset_idle_in_transaction_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit">reset_jit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration">reset_log_autovacuum_min_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity">reset_log_error_verbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix">reset_log_line_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement">reset_log_min_duration_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess">reset_max_files_per_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction">reset_max_locks_per_transaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers">reset_max_logical_replication_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers">reset_max_parallel_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather">reset_max_parallel_workers_per_gather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction">reset_max_pred_locks_per_transaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions">reset_max_prepared_transactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots">reset_max_replication_slots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth">reset_max_stack_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay">reset_max_standby_archive_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay">reset_max_standby_streaming_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders">reset_max_wal_senders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses">reset_max_worker_processes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer">reset_pgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval">reset_pg_partman_bgw_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole">reset_pg_partman_bgw_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack">reset_pg_stat_statements_track</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage">reset_shared_buffers_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit">reset_temp_file_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb">reset_timescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize">reset_track_activity_query_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp">reset_track_commit_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions">reset_track_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming">reset_track_io_timing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout">reset_wal_sender_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay">reset_wal_writer_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem">reset_work_mem</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pgbouncer` <a name="put_pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer"></a>

```python
def put_pgbouncer(
  value: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]

---

##### `put_timescaledb` <a name="put_timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb"></a>

```python
def put_timescaledb(
  value: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]

---

##### `reset_autovacuum_analyze_scale_factor` <a name="reset_autovacuum_analyze_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor"></a>

```python
def reset_autovacuum_analyze_scale_factor() -> None
```

##### `reset_autovacuum_analyze_threshold` <a name="reset_autovacuum_analyze_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold"></a>

```python
def reset_autovacuum_analyze_threshold() -> None
```

##### `reset_autovacuum_freeze_max_age` <a name="reset_autovacuum_freeze_max_age" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge"></a>

```python
def reset_autovacuum_freeze_max_age() -> None
```

##### `reset_autovacuum_max_workers` <a name="reset_autovacuum_max_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers"></a>

```python
def reset_autovacuum_max_workers() -> None
```

##### `reset_autovacuum_naptime` <a name="reset_autovacuum_naptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime"></a>

```python
def reset_autovacuum_naptime() -> None
```

##### `reset_autovacuum_vacuum_cost_delay` <a name="reset_autovacuum_vacuum_cost_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay"></a>

```python
def reset_autovacuum_vacuum_cost_delay() -> None
```

##### `reset_autovacuum_vacuum_cost_limit` <a name="reset_autovacuum_vacuum_cost_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit"></a>

```python
def reset_autovacuum_vacuum_cost_limit() -> None
```

##### `reset_autovacuum_vacuum_scale_factor` <a name="reset_autovacuum_vacuum_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor"></a>

```python
def reset_autovacuum_vacuum_scale_factor() -> None
```

##### `reset_autovacuum_vacuum_threshold` <a name="reset_autovacuum_vacuum_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold"></a>

```python
def reset_autovacuum_vacuum_threshold() -> None
```

##### `reset_backup_hour` <a name="reset_backup_hour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour"></a>

```python
def reset_backup_hour() -> None
```

##### `reset_backup_minute` <a name="reset_backup_minute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute"></a>

```python
def reset_backup_minute() -> None
```

##### `reset_bgwriter_delay` <a name="reset_bgwriter_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay"></a>

```python
def reset_bgwriter_delay() -> None
```

##### `reset_bgwriter_flush_after` <a name="reset_bgwriter_flush_after" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter"></a>

```python
def reset_bgwriter_flush_after() -> None
```

##### `reset_bgwriter_lru_maxpages` <a name="reset_bgwriter_lru_maxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages"></a>

```python
def reset_bgwriter_lru_maxpages() -> None
```

##### `reset_bgwriter_lru_multiplier` <a name="reset_bgwriter_lru_multiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier"></a>

```python
def reset_bgwriter_lru_multiplier() -> None
```

##### `reset_deadlock_timeout` <a name="reset_deadlock_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout"></a>

```python
def reset_deadlock_timeout() -> None
```

##### `reset_default_toast_compression` <a name="reset_default_toast_compression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression"></a>

```python
def reset_default_toast_compression() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_in_transaction_session_timeout` <a name="reset_idle_in_transaction_session_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout"></a>

```python
def reset_idle_in_transaction_session_timeout() -> None
```

##### `reset_jit` <a name="reset_jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit"></a>

```python
def reset_jit() -> None
```

##### `reset_log_autovacuum_min_duration` <a name="reset_log_autovacuum_min_duration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration"></a>

```python
def reset_log_autovacuum_min_duration() -> None
```

##### `reset_log_error_verbosity` <a name="reset_log_error_verbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity"></a>

```python
def reset_log_error_verbosity() -> None
```

##### `reset_log_line_prefix` <a name="reset_log_line_prefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix"></a>

```python
def reset_log_line_prefix() -> None
```

##### `reset_log_min_duration_statement` <a name="reset_log_min_duration_statement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement"></a>

```python
def reset_log_min_duration_statement() -> None
```

##### `reset_max_files_per_process` <a name="reset_max_files_per_process" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess"></a>

```python
def reset_max_files_per_process() -> None
```

##### `reset_max_locks_per_transaction` <a name="reset_max_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction"></a>

```python
def reset_max_locks_per_transaction() -> None
```

##### `reset_max_logical_replication_workers` <a name="reset_max_logical_replication_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers"></a>

```python
def reset_max_logical_replication_workers() -> None
```

##### `reset_max_parallel_workers` <a name="reset_max_parallel_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers"></a>

```python
def reset_max_parallel_workers() -> None
```

##### `reset_max_parallel_workers_per_gather` <a name="reset_max_parallel_workers_per_gather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather"></a>

```python
def reset_max_parallel_workers_per_gather() -> None
```

##### `reset_max_pred_locks_per_transaction` <a name="reset_max_pred_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction"></a>

```python
def reset_max_pred_locks_per_transaction() -> None
```

##### `reset_max_prepared_transactions` <a name="reset_max_prepared_transactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions"></a>

```python
def reset_max_prepared_transactions() -> None
```

##### `reset_max_replication_slots` <a name="reset_max_replication_slots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots"></a>

```python
def reset_max_replication_slots() -> None
```

##### `reset_max_stack_depth` <a name="reset_max_stack_depth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth"></a>

```python
def reset_max_stack_depth() -> None
```

##### `reset_max_standby_archive_delay` <a name="reset_max_standby_archive_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay"></a>

```python
def reset_max_standby_archive_delay() -> None
```

##### `reset_max_standby_streaming_delay` <a name="reset_max_standby_streaming_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay"></a>

```python
def reset_max_standby_streaming_delay() -> None
```

##### `reset_max_wal_senders` <a name="reset_max_wal_senders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders"></a>

```python
def reset_max_wal_senders() -> None
```

##### `reset_max_worker_processes` <a name="reset_max_worker_processes" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses"></a>

```python
def reset_max_worker_processes() -> None
```

##### `reset_pgbouncer` <a name="reset_pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer"></a>

```python
def reset_pgbouncer() -> None
```

##### `reset_pg_partman_bgw_interval` <a name="reset_pg_partman_bgw_interval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval"></a>

```python
def reset_pg_partman_bgw_interval() -> None
```

##### `reset_pg_partman_bgw_role` <a name="reset_pg_partman_bgw_role" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole"></a>

```python
def reset_pg_partman_bgw_role() -> None
```

##### `reset_pg_stat_statements_track` <a name="reset_pg_stat_statements_track" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack"></a>

```python
def reset_pg_stat_statements_track() -> None
```

##### `reset_shared_buffers_percentage` <a name="reset_shared_buffers_percentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage"></a>

```python
def reset_shared_buffers_percentage() -> None
```

##### `reset_temp_file_limit` <a name="reset_temp_file_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit"></a>

```python
def reset_temp_file_limit() -> None
```

##### `reset_timescaledb` <a name="reset_timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb"></a>

```python
def reset_timescaledb() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_track_activity_query_size` <a name="reset_track_activity_query_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize"></a>

```python
def reset_track_activity_query_size() -> None
```

##### `reset_track_commit_timestamp` <a name="reset_track_commit_timestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp"></a>

```python
def reset_track_commit_timestamp() -> None
```

##### `reset_track_functions` <a name="reset_track_functions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions"></a>

```python
def reset_track_functions() -> None
```

##### `reset_track_io_timing` <a name="reset_track_io_timing" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming"></a>

```python
def reset_track_io_timing() -> None
```

##### `reset_wal_sender_timeout` <a name="reset_wal_sender_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout"></a>

```python
def reset_wal_sender_timeout() -> None
```

##### `reset_wal_writer_delay` <a name="reset_wal_writer_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay"></a>

```python
def reset_wal_writer_delay() -> None
```

##### `reset_work_mem` <a name="reset_work_mem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem"></a>

```python
def reset_work_mem() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabasePostgresqlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabasePostgresqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePostgresqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList">DatabasePostgresqlConfigTimescaledbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput">autovacuum_analyze_scale_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput">autovacuum_analyze_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput">autovacuum_freeze_max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput">autovacuum_max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput">autovacuum_naptime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput">autovacuum_vacuum_cost_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput">autovacuum_vacuum_cost_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput">autovacuum_vacuum_scale_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput">autovacuum_vacuum_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput">backup_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput">backup_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput">bgwriter_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput">bgwriter_flush_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput">bgwriter_lru_maxpages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput">bgwriter_lru_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput">deadlock_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput">default_toast_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput">idle_in_transaction_session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput">jit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput">log_autovacuum_min_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput">log_error_verbosity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput">log_line_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput">log_min_duration_statement_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput">max_files_per_process_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput">max_locks_per_transaction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput">max_logical_replication_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput">max_parallel_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput">max_parallel_workers_per_gather_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput">max_pred_locks_per_transaction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput">max_prepared_transactions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput">max_replication_slots_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput">max_stack_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput">max_standby_archive_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput">max_standby_streaming_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput">max_wal_senders_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput">max_worker_processes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput">pgbouncer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput">pg_partman_bgw_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput">pg_partman_bgw_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput">pg_stat_statements_track_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput">shared_buffers_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput">temp_file_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput">timescaledb_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput">track_activity_query_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput">track_commit_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput">track_functions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput">track_io_timing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput">wal_sender_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput">wal_writer_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput">work_mem_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor">autovacuum_analyze_scale_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold">autovacuum_analyze_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge">autovacuum_freeze_max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers">autovacuum_max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime">autovacuum_naptime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay">autovacuum_vacuum_cost_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit">autovacuum_vacuum_cost_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor">autovacuum_vacuum_scale_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold">autovacuum_vacuum_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay">bgwriter_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter">bgwriter_flush_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages">bgwriter_lru_maxpages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier">bgwriter_lru_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout">deadlock_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression">default_toast_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit">jit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration">log_autovacuum_min_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity">log_error_verbosity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix">log_line_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement">log_min_duration_statement</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess">max_files_per_process</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction">max_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers">max_logical_replication_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers">max_parallel_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather">max_parallel_workers_per_gather</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction">max_pred_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions">max_prepared_transactions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots">max_replication_slots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth">max_stack_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay">max_standby_archive_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay">max_standby_streaming_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders">max_wal_senders</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses">max_worker_processes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval">pg_partman_bgw_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole">pg_partman_bgw_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack">pg_stat_statements_track</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage">shared_buffers_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit">temp_file_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize">track_activity_query_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp">track_commit_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions">track_functions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming">track_io_timing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout">wal_sender_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay">wal_writer_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem">work_mem</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer"></a>

```python
pgbouncer: DatabasePostgresqlConfigPgbouncerList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb"></a>

```python
timescaledb: DatabasePostgresqlConfigTimescaledbList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList">DatabasePostgresqlConfigTimescaledbList</a>

---

##### `autovacuum_analyze_scale_factor_input`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput"></a>

```python
autovacuum_analyze_scale_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_analyze_threshold_input`<sup>Optional</sup> <a name="autovacuum_analyze_threshold_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput"></a>

```python
autovacuum_analyze_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_freeze_max_age_input`<sup>Optional</sup> <a name="autovacuum_freeze_max_age_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput"></a>

```python
autovacuum_freeze_max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_max_workers_input`<sup>Optional</sup> <a name="autovacuum_max_workers_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput"></a>

```python
autovacuum_max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_naptime_input`<sup>Optional</sup> <a name="autovacuum_naptime_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput"></a>

```python
autovacuum_naptime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_delay_input`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput"></a>

```python
autovacuum_vacuum_cost_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_limit_input`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput"></a>

```python
autovacuum_vacuum_cost_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_scale_factor_input`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput"></a>

```python
autovacuum_vacuum_scale_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_threshold_input`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput"></a>

```python
autovacuum_vacuum_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_hour_input`<sup>Optional</sup> <a name="backup_hour_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput"></a>

```python
backup_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute_input`<sup>Optional</sup> <a name="backup_minute_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput"></a>

```python
backup_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_delay_input`<sup>Optional</sup> <a name="bgwriter_delay_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput"></a>

```python
bgwriter_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_flush_after_input`<sup>Optional</sup> <a name="bgwriter_flush_after_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput"></a>

```python
bgwriter_flush_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_maxpages_input`<sup>Optional</sup> <a name="bgwriter_lru_maxpages_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput"></a>

```python
bgwriter_lru_maxpages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_multiplier_input`<sup>Optional</sup> <a name="bgwriter_lru_multiplier_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput"></a>

```python
bgwriter_lru_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `deadlock_timeout_input`<sup>Optional</sup> <a name="deadlock_timeout_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput"></a>

```python
deadlock_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_toast_compression_input`<sup>Optional</sup> <a name="default_toast_compression_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput"></a>

```python
default_toast_compression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout_input`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput"></a>

```python
idle_in_transaction_session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jit_input`<sup>Optional</sup> <a name="jit_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput"></a>

```python
jit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_autovacuum_min_duration_input`<sup>Optional</sup> <a name="log_autovacuum_min_duration_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput"></a>

```python
log_autovacuum_min_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_error_verbosity_input`<sup>Optional</sup> <a name="log_error_verbosity_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput"></a>

```python
log_error_verbosity_input: str
```

- *Type:* str

---

##### `log_line_prefix_input`<sup>Optional</sup> <a name="log_line_prefix_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput"></a>

```python
log_line_prefix_input: str
```

- *Type:* str

---

##### `log_min_duration_statement_input`<sup>Optional</sup> <a name="log_min_duration_statement_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput"></a>

```python
log_min_duration_statement_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_files_per_process_input`<sup>Optional</sup> <a name="max_files_per_process_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput"></a>

```python
max_files_per_process_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_locks_per_transaction_input`<sup>Optional</sup> <a name="max_locks_per_transaction_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput"></a>

```python
max_locks_per_transaction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_logical_replication_workers_input`<sup>Optional</sup> <a name="max_logical_replication_workers_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput"></a>

```python
max_logical_replication_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_input`<sup>Optional</sup> <a name="max_parallel_workers_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput"></a>

```python
max_parallel_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_per_gather_input`<sup>Optional</sup> <a name="max_parallel_workers_per_gather_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput"></a>

```python
max_parallel_workers_per_gather_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pred_locks_per_transaction_input`<sup>Optional</sup> <a name="max_pred_locks_per_transaction_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput"></a>

```python
max_pred_locks_per_transaction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_prepared_transactions_input`<sup>Optional</sup> <a name="max_prepared_transactions_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput"></a>

```python
max_prepared_transactions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replication_slots_input`<sup>Optional</sup> <a name="max_replication_slots_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput"></a>

```python
max_replication_slots_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_depth_input`<sup>Optional</sup> <a name="max_stack_depth_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput"></a>

```python
max_stack_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_archive_delay_input`<sup>Optional</sup> <a name="max_standby_archive_delay_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput"></a>

```python
max_standby_archive_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_streaming_delay_input`<sup>Optional</sup> <a name="max_standby_streaming_delay_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput"></a>

```python
max_standby_streaming_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wal_senders_input`<sup>Optional</sup> <a name="max_wal_senders_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput"></a>

```python
max_wal_senders_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_processes_input`<sup>Optional</sup> <a name="max_worker_processes_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput"></a>

```python
max_worker_processes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pgbouncer_input`<sup>Optional</sup> <a name="pgbouncer_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput"></a>

```python
pgbouncer_input: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]

---

##### `pg_partman_bgw_interval_input`<sup>Optional</sup> <a name="pg_partman_bgw_interval_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput"></a>

```python
pg_partman_bgw_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_role_input`<sup>Optional</sup> <a name="pg_partman_bgw_role_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput"></a>

```python
pg_partman_bgw_role_input: str
```

- *Type:* str

---

##### `pg_stat_statements_track_input`<sup>Optional</sup> <a name="pg_stat_statements_track_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput"></a>

```python
pg_stat_statements_track_input: str
```

- *Type:* str

---

##### `shared_buffers_percentage_input`<sup>Optional</sup> <a name="shared_buffers_percentage_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput"></a>

```python
shared_buffers_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temp_file_limit_input`<sup>Optional</sup> <a name="temp_file_limit_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput"></a>

```python
temp_file_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timescaledb_input`<sup>Optional</sup> <a name="timescaledb_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput"></a>

```python
timescaledb_input: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `track_activity_query_size_input`<sup>Optional</sup> <a name="track_activity_query_size_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput"></a>

```python
track_activity_query_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `track_commit_timestamp_input`<sup>Optional</sup> <a name="track_commit_timestamp_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput"></a>

```python
track_commit_timestamp_input: str
```

- *Type:* str

---

##### `track_functions_input`<sup>Optional</sup> <a name="track_functions_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput"></a>

```python
track_functions_input: str
```

- *Type:* str

---

##### `track_io_timing_input`<sup>Optional</sup> <a name="track_io_timing_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput"></a>

```python
track_io_timing_input: str
```

- *Type:* str

---

##### `wal_sender_timeout_input`<sup>Optional</sup> <a name="wal_sender_timeout_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput"></a>

```python
wal_sender_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wal_writer_delay_input`<sup>Optional</sup> <a name="wal_writer_delay_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput"></a>

```python
wal_writer_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_mem_input`<sup>Optional</sup> <a name="work_mem_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput"></a>

```python
work_mem_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_analyze_scale_factor`<sup>Required</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor"></a>

```python
autovacuum_analyze_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_analyze_threshold`<sup>Required</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold"></a>

```python
autovacuum_analyze_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_freeze_max_age`<sup>Required</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge"></a>

```python
autovacuum_freeze_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_max_workers`<sup>Required</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers"></a>

```python
autovacuum_max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_naptime`<sup>Required</sup> <a name="autovacuum_naptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime"></a>

```python
autovacuum_naptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_delay`<sup>Required</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay"></a>

```python
autovacuum_vacuum_cost_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_limit`<sup>Required</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit"></a>

```python
autovacuum_vacuum_cost_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_scale_factor`<sup>Required</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor"></a>

```python
autovacuum_vacuum_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_threshold`<sup>Required</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold"></a>

```python
autovacuum_vacuum_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_hour`<sup>Required</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute`<sup>Required</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_delay`<sup>Required</sup> <a name="bgwriter_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay"></a>

```python
bgwriter_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_flush_after`<sup>Required</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter"></a>

```python
bgwriter_flush_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_maxpages`<sup>Required</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages"></a>

```python
bgwriter_lru_maxpages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_multiplier`<sup>Required</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier"></a>

```python
bgwriter_lru_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `deadlock_timeout`<sup>Required</sup> <a name="deadlock_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout"></a>

```python
deadlock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_toast_compression`<sup>Required</sup> <a name="default_toast_compression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression"></a>

```python
default_toast_compression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout`<sup>Required</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit"></a>

```python
jit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_autovacuum_min_duration`<sup>Required</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration"></a>

```python
log_autovacuum_min_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_error_verbosity`<sup>Required</sup> <a name="log_error_verbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity"></a>

```python
log_error_verbosity: str
```

- *Type:* str

---

##### `log_line_prefix`<sup>Required</sup> <a name="log_line_prefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix"></a>

```python
log_line_prefix: str
```

- *Type:* str

---

##### `log_min_duration_statement`<sup>Required</sup> <a name="log_min_duration_statement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement"></a>

```python
log_min_duration_statement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_files_per_process`<sup>Required</sup> <a name="max_files_per_process" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess"></a>

```python
max_files_per_process: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_locks_per_transaction`<sup>Required</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction"></a>

```python
max_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_logical_replication_workers`<sup>Required</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers"></a>

```python
max_logical_replication_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers`<sup>Required</sup> <a name="max_parallel_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers"></a>

```python
max_parallel_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_per_gather`<sup>Required</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather"></a>

```python
max_parallel_workers_per_gather: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pred_locks_per_transaction`<sup>Required</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction"></a>

```python
max_pred_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_prepared_transactions`<sup>Required</sup> <a name="max_prepared_transactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions"></a>

```python
max_prepared_transactions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replication_slots`<sup>Required</sup> <a name="max_replication_slots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots"></a>

```python
max_replication_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_depth`<sup>Required</sup> <a name="max_stack_depth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth"></a>

```python
max_stack_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_archive_delay`<sup>Required</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay"></a>

```python
max_standby_archive_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_streaming_delay`<sup>Required</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay"></a>

```python
max_standby_streaming_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wal_senders`<sup>Required</sup> <a name="max_wal_senders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders"></a>

```python
max_wal_senders: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_processes`<sup>Required</sup> <a name="max_worker_processes" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses"></a>

```python
max_worker_processes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_interval`<sup>Required</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval"></a>

```python
pg_partman_bgw_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_role`<sup>Required</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole"></a>

```python
pg_partman_bgw_role: str
```

- *Type:* str

---

##### `pg_stat_statements_track`<sup>Required</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack"></a>

```python
pg_stat_statements_track: str
```

- *Type:* str

---

##### `shared_buffers_percentage`<sup>Required</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage"></a>

```python
shared_buffers_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temp_file_limit`<sup>Required</sup> <a name="temp_file_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit"></a>

```python
temp_file_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `track_activity_query_size`<sup>Required</sup> <a name="track_activity_query_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize"></a>

```python
track_activity_query_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `track_commit_timestamp`<sup>Required</sup> <a name="track_commit_timestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp"></a>

```python
track_commit_timestamp: str
```

- *Type:* str

---

##### `track_functions`<sup>Required</sup> <a name="track_functions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions"></a>

```python
track_functions: str
```

- *Type:* str

---

##### `track_io_timing`<sup>Required</sup> <a name="track_io_timing" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming"></a>

```python
track_io_timing: str
```

- *Type:* str

---

##### `wal_sender_timeout`<sup>Required</sup> <a name="wal_sender_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout"></a>

```python
wal_sender_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wal_writer_delay`<sup>Required</sup> <a name="wal_writer_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay"></a>

```python
wal_writer_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_mem`<sup>Required</sup> <a name="work_mem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem"></a>

```python
work_mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePostgresqlConfigConfig <a name="DatabasePostgresqlConfigConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  autovacuum_analyze_scale_factor: typing.Union[int, float] = None,
  autovacuum_analyze_threshold: typing.Union[int, float] = None,
  autovacuum_freeze_max_age: typing.Union[int, float] = None,
  autovacuum_max_workers: typing.Union[int, float] = None,
  autovacuum_naptime: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_delay: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_limit: typing.Union[int, float] = None,
  autovacuum_vacuum_scale_factor: typing.Union[int, float] = None,
  autovacuum_vacuum_threshold: typing.Union[int, float] = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  bgwriter_delay: typing.Union[int, float] = None,
  bgwriter_flush_after: typing.Union[int, float] = None,
  bgwriter_lru_maxpages: typing.Union[int, float] = None,
  bgwriter_lru_multiplier: typing.Union[int, float] = None,
  deadlock_timeout: typing.Union[int, float] = None,
  default_toast_compression: str = None,
  id: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  jit: typing.Union[bool, IResolvable] = None,
  log_autovacuum_min_duration: typing.Union[int, float] = None,
  log_error_verbosity: str = None,
  log_line_prefix: str = None,
  log_min_duration_statement: typing.Union[int, float] = None,
  max_files_per_process: typing.Union[int, float] = None,
  max_locks_per_transaction: typing.Union[int, float] = None,
  max_logical_replication_workers: typing.Union[int, float] = None,
  max_parallel_workers: typing.Union[int, float] = None,
  max_parallel_workers_per_gather: typing.Union[int, float] = None,
  max_pred_locks_per_transaction: typing.Union[int, float] = None,
  max_prepared_transactions: typing.Union[int, float] = None,
  max_replication_slots: typing.Union[int, float] = None,
  max_stack_depth: typing.Union[int, float] = None,
  max_standby_archive_delay: typing.Union[int, float] = None,
  max_standby_streaming_delay: typing.Union[int, float] = None,
  max_wal_senders: typing.Union[int, float] = None,
  max_worker_processes: typing.Union[int, float] = None,
  pgbouncer: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]] = None,
  pg_partman_bgw_interval: typing.Union[int, float] = None,
  pg_partman_bgw_role: str = None,
  pg_stat_statements_track: str = None,
  shared_buffers_percentage: typing.Union[int, float] = None,
  temp_file_limit: typing.Union[int, float] = None,
  timescaledb: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]] = None,
  timezone: str = None,
  track_activity_query_size: typing.Union[int, float] = None,
  track_commit_timestamp: str = None,
  track_functions: str = None,
  track_io_timing: str = None,
  wal_sender_timeout: typing.Union[int, float] = None,
  wal_writer_delay: typing.Union[int, float] = None,
  work_mem: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor">autovacuum_analyze_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold">autovacuum_analyze_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge">autovacuum_freeze_max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers">autovacuum_max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime">autovacuum_naptime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay">autovacuum_vacuum_cost_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit">autovacuum_vacuum_cost_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor">autovacuum_vacuum_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold">autovacuum_vacuum_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay">bgwriter_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter">bgwriter_flush_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages">bgwriter_lru_maxpages</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier">bgwriter_lru_multiplier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout">deadlock_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression">default_toast_compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit">jit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration">log_autovacuum_min_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity">log_error_verbosity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix">log_line_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement">log_min_duration_statement</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess">max_files_per_process</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction">max_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers">max_logical_replication_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers">max_parallel_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather">max_parallel_workers_per_gather</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction">max_pred_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions">max_prepared_transactions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots">max_replication_slots</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth">max_stack_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay">max_standby_archive_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay">max_standby_streaming_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders">max_wal_senders</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses">max_worker_processes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer">pgbouncer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]</code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval">pg_partman_bgw_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole">pg_partman_bgw_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack">pg_stat_statements_track</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage">shared_buffers_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit">temp_file_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb">timescaledb</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]</code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize">track_activity_query_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp">track_commit_timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions">track_functions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming">track_io_timing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout">wal_sender_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay">wal_writer_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem">work_mem</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `autovacuum_analyze_scale_factor`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor"></a>

```python
autovacuum_analyze_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `autovacuum_analyze_threshold`<sup>Optional</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold"></a>

```python
autovacuum_analyze_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `autovacuum_freeze_max_age`<sup>Optional</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge"></a>

```python
autovacuum_freeze_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `autovacuum_max_workers`<sup>Optional</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers"></a>

```python
autovacuum_max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `autovacuum_naptime`<sup>Optional</sup> <a name="autovacuum_naptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime"></a>

```python
autovacuum_naptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `autovacuum_vacuum_cost_delay`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay"></a>

```python
autovacuum_vacuum_cost_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `autovacuum_vacuum_cost_limit`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit"></a>

```python
autovacuum_vacuum_cost_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `autovacuum_vacuum_scale_factor`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor"></a>

```python
autovacuum_vacuum_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `autovacuum_vacuum_threshold`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold"></a>

```python
autovacuum_vacuum_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `bgwriter_delay`<sup>Optional</sup> <a name="bgwriter_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay"></a>

```python
bgwriter_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `bgwriter_flush_after`<sup>Optional</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter"></a>

```python
bgwriter_flush_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `bgwriter_lru_maxpages`<sup>Optional</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages"></a>

```python
bgwriter_lru_maxpages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `bgwriter_lru_multiplier`<sup>Optional</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier"></a>

```python
bgwriter_lru_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `deadlock_timeout`<sup>Optional</sup> <a name="deadlock_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout"></a>

```python
deadlock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `default_toast_compression`<sup>Optional</sup> <a name="default_toast_compression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression"></a>

```python
default_toast_compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit"></a>

```python
jit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `log_autovacuum_min_duration`<sup>Optional</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration"></a>

```python
log_autovacuum_min_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `log_error_verbosity`<sup>Optional</sup> <a name="log_error_verbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity"></a>

```python
log_error_verbosity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `log_line_prefix`<sup>Optional</sup> <a name="log_line_prefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix"></a>

```python
log_line_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `log_min_duration_statement`<sup>Optional</sup> <a name="log_min_duration_statement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement"></a>

```python
log_min_duration_statement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `max_files_per_process`<sup>Optional</sup> <a name="max_files_per_process" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess"></a>

```python
max_files_per_process: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `max_locks_per_transaction`<sup>Optional</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction"></a>

```python
max_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `max_logical_replication_workers`<sup>Optional</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers"></a>

```python
max_logical_replication_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `max_parallel_workers`<sup>Optional</sup> <a name="max_parallel_workers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers"></a>

```python
max_parallel_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `max_parallel_workers_per_gather`<sup>Optional</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather"></a>

```python
max_parallel_workers_per_gather: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `max_pred_locks_per_transaction`<sup>Optional</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction"></a>

```python
max_pred_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `max_prepared_transactions`<sup>Optional</sup> <a name="max_prepared_transactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions"></a>

```python
max_prepared_transactions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `max_replication_slots`<sup>Optional</sup> <a name="max_replication_slots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots"></a>

```python
max_replication_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `max_stack_depth`<sup>Optional</sup> <a name="max_stack_depth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth"></a>

```python
max_stack_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `max_standby_archive_delay`<sup>Optional</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay"></a>

```python
max_standby_archive_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `max_standby_streaming_delay`<sup>Optional</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay"></a>

```python
max_standby_streaming_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `max_wal_senders`<sup>Optional</sup> <a name="max_wal_senders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders"></a>

```python
max_wal_senders: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `max_worker_processes`<sup>Optional</sup> <a name="max_worker_processes" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses"></a>

```python
max_worker_processes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer"></a>

```python
pgbouncer: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `pg_partman_bgw_interval`<sup>Optional</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval"></a>

```python
pg_partman_bgw_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `pg_partman_bgw_role`<sup>Optional</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole"></a>

```python
pg_partman_bgw_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `pg_stat_statements_track`<sup>Optional</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack"></a>

```python
pg_stat_statements_track: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `shared_buffers_percentage`<sup>Optional</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage"></a>

```python
shared_buffers_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `temp_file_limit`<sup>Optional</sup> <a name="temp_file_limit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit"></a>

```python
temp_file_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb"></a>

```python
timescaledb: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `track_activity_query_size`<sup>Optional</sup> <a name="track_activity_query_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize"></a>

```python
track_activity_query_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `track_commit_timestamp`<sup>Optional</sup> <a name="track_commit_timestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp"></a>

```python
track_commit_timestamp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `track_functions`<sup>Optional</sup> <a name="track_functions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions"></a>

```python
track_functions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `track_io_timing`<sup>Optional</sup> <a name="track_io_timing" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming"></a>

```python
track_io_timing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `wal_sender_timeout`<sup>Optional</sup> <a name="wal_sender_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout"></a>

```python
wal_sender_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `wal_writer_delay`<sup>Optional</sup> <a name="wal_writer_delay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay"></a>

```python
wal_writer_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `work_mem`<sup>Optional</sup> <a name="work_mem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem"></a>

```python
work_mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

### DatabasePostgresqlConfigPgbouncer <a name="DatabasePostgresqlConfigPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer(
  autodb_idle_timeout: typing.Union[int, float] = None,
  autodb_max_db_connections: typing.Union[int, float] = None,
  autodb_pool_mode: str = None,
  autodb_pool_size: typing.Union[int, float] = None,
  ignore_startup_parameters: typing.List[str] = None,
  min_pool_size: typing.Union[int, float] = None,
  server_idle_timeout: typing.Union[int, float] = None,
  server_lifetime: typing.Union[int, float] = None,
  server_reset_query_always: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout">autodb_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections">autodb_max_db_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode">autodb_pool_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize">autodb_pool_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters">ignore_startup_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize">min_pool_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout">server_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime">server_lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways">server_reset_query_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}. |

---

##### `autodb_idle_timeout`<sup>Optional</sup> <a name="autodb_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout"></a>

```python
autodb_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}.

---

##### `autodb_max_db_connections`<sup>Optional</sup> <a name="autodb_max_db_connections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections"></a>

```python
autodb_max_db_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}.

---

##### `autodb_pool_mode`<sup>Optional</sup> <a name="autodb_pool_mode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode"></a>

```python
autodb_pool_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}.

---

##### `autodb_pool_size`<sup>Optional</sup> <a name="autodb_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize"></a>

```python
autodb_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}.

---

##### `ignore_startup_parameters`<sup>Optional</sup> <a name="ignore_startup_parameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters"></a>

```python
ignore_startup_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}.

---

##### `min_pool_size`<sup>Optional</sup> <a name="min_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize"></a>

```python
min_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}.

---

##### `server_idle_timeout`<sup>Optional</sup> <a name="server_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout"></a>

```python
server_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}.

---

##### `server_lifetime`<sup>Optional</sup> <a name="server_lifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime"></a>

```python
server_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}.

---

##### `server_reset_query_always`<sup>Optional</sup> <a name="server_reset_query_always" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways"></a>

```python
server_reset_query_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}.

---

### DatabasePostgresqlConfigTimescaledb <a name="DatabasePostgresqlConfigTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb(
  timescaledb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.timescaledb">timescaledb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}. |

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.timescaledb"></a>

```python
timescaledb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.38.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePostgresqlConfigPgbouncerList <a name="DatabasePostgresqlConfigPgbouncerList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePostgresqlConfigPgbouncerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigPgbouncer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]]

---


### DatabasePostgresqlConfigPgbouncerOutputReference <a name="DatabasePostgresqlConfigPgbouncerOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout">reset_autodb_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections">reset_autodb_max_db_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode">reset_autodb_pool_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize">reset_autodb_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters">reset_ignore_startup_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize">reset_min_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout">reset_server_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime">reset_server_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways">reset_server_reset_query_always</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autodb_idle_timeout` <a name="reset_autodb_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```python
def reset_autodb_idle_timeout() -> None
```

##### `reset_autodb_max_db_connections` <a name="reset_autodb_max_db_connections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```python
def reset_autodb_max_db_connections() -> None
```

##### `reset_autodb_pool_mode` <a name="reset_autodb_pool_mode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode"></a>

```python
def reset_autodb_pool_mode() -> None
```

##### `reset_autodb_pool_size` <a name="reset_autodb_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize"></a>

```python
def reset_autodb_pool_size() -> None
```

##### `reset_ignore_startup_parameters` <a name="reset_ignore_startup_parameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```python
def reset_ignore_startup_parameters() -> None
```

##### `reset_min_pool_size` <a name="reset_min_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize"></a>

```python
def reset_min_pool_size() -> None
```

##### `reset_server_idle_timeout` <a name="reset_server_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout"></a>

```python
def reset_server_idle_timeout() -> None
```

##### `reset_server_lifetime` <a name="reset_server_lifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime"></a>

```python
def reset_server_lifetime() -> None
```

##### `reset_server_reset_query_always` <a name="reset_server_reset_query_always" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```python
def reset_server_reset_query_always() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodb_idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodb_max_db_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput">autodb_pool_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput">autodb_pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput">ignore_startup_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput">min_pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput">server_idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput">server_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput">server_reset_query_always_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout">autodb_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections">autodb_max_db_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode">autodb_pool_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize">autodb_pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters">ignore_startup_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize">min_pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout">server_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime">server_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways">server_reset_query_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autodb_idle_timeout_input`<sup>Optional</sup> <a name="autodb_idle_timeout_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```python
autodb_idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_max_db_connections_input`<sup>Optional</sup> <a name="autodb_max_db_connections_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```python
autodb_max_db_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_pool_mode_input`<sup>Optional</sup> <a name="autodb_pool_mode_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```python
autodb_pool_mode_input: str
```

- *Type:* str

---

##### `autodb_pool_size_input`<sup>Optional</sup> <a name="autodb_pool_size_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```python
autodb_pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_startup_parameters_input`<sup>Optional</sup> <a name="ignore_startup_parameters_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```python
ignore_startup_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_pool_size_input`<sup>Optional</sup> <a name="min_pool_size_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput"></a>

```python
min_pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_idle_timeout_input`<sup>Optional</sup> <a name="server_idle_timeout_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```python
server_idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_lifetime_input`<sup>Optional</sup> <a name="server_lifetime_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput"></a>

```python
server_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_reset_query_always_input`<sup>Optional</sup> <a name="server_reset_query_always_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```python
server_reset_query_always_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodb_idle_timeout`<sup>Required</sup> <a name="autodb_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```python
autodb_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_max_db_connections`<sup>Required</sup> <a name="autodb_max_db_connections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```python
autodb_max_db_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_pool_mode`<sup>Required</sup> <a name="autodb_pool_mode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode"></a>

```python
autodb_pool_mode: str
```

- *Type:* str

---

##### `autodb_pool_size`<sup>Required</sup> <a name="autodb_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize"></a>

```python
autodb_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_startup_parameters`<sup>Required</sup> <a name="ignore_startup_parameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```python
ignore_startup_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_pool_size`<sup>Required</sup> <a name="min_pool_size" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize"></a>

```python
min_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_idle_timeout`<sup>Required</sup> <a name="server_idle_timeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout"></a>

```python
server_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_lifetime`<sup>Required</sup> <a name="server_lifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime"></a>

```python
server_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_reset_query_always`<sup>Required</sup> <a name="server_reset_query_always" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```python
server_reset_query_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabasePostgresqlConfigPgbouncer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>]

---


### DatabasePostgresqlConfigTimescaledbList <a name="DatabasePostgresqlConfigTimescaledbList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePostgresqlConfigTimescaledbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabasePostgresqlConfigTimescaledb]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]]

---


### DatabasePostgresqlConfigTimescaledbOutputReference <a name="DatabasePostgresqlConfigTimescaledbOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_postgresql_config

databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetTimescaledb">reset_timescaledb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timescaledb` <a name="reset_timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetTimescaledb"></a>

```python
def reset_timescaledb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.timescaledbInput">timescaledb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.timescaledb">timescaledb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timescaledb_input`<sup>Optional</sup> <a name="timescaledb_input" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.timescaledbInput"></a>

```python
timescaledb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.timescaledb"></a>

```python
timescaledb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabasePostgresqlConfigTimescaledb]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>]

---



