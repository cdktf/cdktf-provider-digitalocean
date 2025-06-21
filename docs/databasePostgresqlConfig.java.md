# `databasePostgresqlConfig` Submodule <a name="`databasePostgresqlConfig` Submodule" id="@cdktf/provider-digitalocean.databasePostgresqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePostgresqlConfig <a name="DatabasePostgresqlConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfig;

DatabasePostgresqlConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .autovacuumAnalyzeScaleFactor(java.lang.Number)
//  .autovacuumAnalyzeThreshold(java.lang.Number)
//  .autovacuumFreezeMaxAge(java.lang.Number)
//  .autovacuumMaxWorkers(java.lang.Number)
//  .autovacuumNaptime(java.lang.Number)
//  .autovacuumVacuumCostDelay(java.lang.Number)
//  .autovacuumVacuumCostLimit(java.lang.Number)
//  .autovacuumVacuumScaleFactor(java.lang.Number)
//  .autovacuumVacuumThreshold(java.lang.Number)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .bgwriterDelay(java.lang.Number)
//  .bgwriterFlushAfter(java.lang.Number)
//  .bgwriterLruMaxpages(java.lang.Number)
//  .bgwriterLruMultiplier(java.lang.Number)
//  .deadlockTimeout(java.lang.Number)
//  .defaultToastCompression(java.lang.String)
//  .id(java.lang.String)
//  .idleInTransactionSessionTimeout(java.lang.Number)
//  .jit(java.lang.Boolean)
//  .jit(IResolvable)
//  .logAutovacuumMinDuration(java.lang.Number)
//  .logErrorVerbosity(java.lang.String)
//  .logLinePrefix(java.lang.String)
//  .logMinDurationStatement(java.lang.Number)
//  .maxFilesPerProcess(java.lang.Number)
//  .maxLocksPerTransaction(java.lang.Number)
//  .maxLogicalReplicationWorkers(java.lang.Number)
//  .maxParallelWorkers(java.lang.Number)
//  .maxParallelWorkersPerGather(java.lang.Number)
//  .maxPredLocksPerTransaction(java.lang.Number)
//  .maxPreparedTransactions(java.lang.Number)
//  .maxReplicationSlots(java.lang.Number)
//  .maxStackDepth(java.lang.Number)
//  .maxStandbyArchiveDelay(java.lang.Number)
//  .maxStandbyStreamingDelay(java.lang.Number)
//  .maxWalSenders(java.lang.Number)
//  .maxWorkerProcesses(java.lang.Number)
//  .pgbouncer(IResolvable)
//  .pgbouncer(java.util.List<DatabasePostgresqlConfigPgbouncer>)
//  .pgPartmanBgwInterval(java.lang.Number)
//  .pgPartmanBgwRole(java.lang.String)
//  .pgStatStatementsTrack(java.lang.String)
//  .sharedBuffersPercentage(java.lang.Number)
//  .tempFileLimit(java.lang.Number)
//  .timescaledb(DatabasePostgresqlConfigTimescaledb)
//  .timezone(java.lang.String)
//  .trackActivityQuerySize(java.lang.Number)
//  .trackCommitTimestamp(java.lang.String)
//  .trackFunctions(java.lang.String)
//  .trackIoTiming(java.lang.String)
//  .walSenderTimeout(java.lang.Number)
//  .walWriterDelay(java.lang.Number)
//  .workMem(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumNaptime">autovacuumNaptime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterDelay">bgwriterDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.deadlockTimeout">deadlockTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.defaultToastCompression">defaultToastCompression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.jit">jit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logErrorVerbosity">logErrorVerbosity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logLinePrefix">logLinePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logMinDurationStatement">logMinDurationStatement</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkers">maxParallelWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxReplicationSlots">maxReplicationSlots</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStackDepth">maxStackDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWalSenders">maxWalSenders</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgbouncer">pgbouncer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.tempFileLimit">tempFileLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackFunctions">trackFunctions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackIoTiming">trackIoTiming</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walSenderTimeout">walSenderTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walWriterDelay">walWriterDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.workMem">workMem</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `autovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeScaleFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `autovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumAnalyzeThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `autovacuumFreezeMaxAge`<sup>Optional</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumFreezeMaxAge"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `autovacuumMaxWorkers`<sup>Optional</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumMaxWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `autovacuumNaptime`<sup>Optional</sup> <a name="autovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumNaptime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `autovacuumVacuumCostDelay`<sup>Optional</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `autovacuumVacuumCostLimit`<sup>Optional</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumCostLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `autovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumScaleFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `autovacuumVacuumThreshold`<sup>Optional</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.autovacuumVacuumThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupHour"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.backupMinute"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `bgwriterDelay`<sup>Optional</sup> <a name="bgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `bgwriterFlushAfter`<sup>Optional</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterFlushAfter"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `bgwriterLruMaxpages`<sup>Optional</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMaxpages"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `bgwriterLruMultiplier`<sup>Optional</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.bgwriterLruMultiplier"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `deadlockTimeout`<sup>Optional</sup> <a name="deadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.deadlockTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `defaultToastCompression`<sup>Optional</sup> <a name="defaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.defaultToastCompression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.idleInTransactionSessionTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.jit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `logAutovacuumMinDuration`<sup>Optional</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logAutovacuumMinDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `logErrorVerbosity`<sup>Optional</sup> <a name="logErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logErrorVerbosity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `logLinePrefix`<sup>Optional</sup> <a name="logLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logLinePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `logMinDurationStatement`<sup>Optional</sup> <a name="logMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.logMinDurationStatement"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `maxFilesPerProcess`<sup>Optional</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxFilesPerProcess"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `maxLocksPerTransaction`<sup>Optional</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLocksPerTransaction"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `maxLogicalReplicationWorkers`<sup>Optional</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxLogicalReplicationWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `maxParallelWorkers`<sup>Optional</sup> <a name="maxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `maxParallelWorkersPerGather`<sup>Optional</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxParallelWorkersPerGather"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `maxPredLocksPerTransaction`<sup>Optional</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPredLocksPerTransaction"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `maxPreparedTransactions`<sup>Optional</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxPreparedTransactions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `maxReplicationSlots`<sup>Optional</sup> <a name="maxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxReplicationSlots"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `maxStackDepth`<sup>Optional</sup> <a name="maxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStackDepth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `maxStandbyArchiveDelay`<sup>Optional</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyArchiveDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `maxStandbyStreamingDelay`<sup>Optional</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxStandbyStreamingDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `maxWalSenders`<sup>Optional</sup> <a name="maxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWalSenders"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `maxWorkerProcesses`<sup>Optional</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.maxWorkerProcesses"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgbouncer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `pgPartmanBgwInterval`<sup>Optional</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `pgPartmanBgwRole`<sup>Optional</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgPartmanBgwRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `pgStatStatementsTrack`<sup>Optional</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.pgStatStatementsTrack"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `sharedBuffersPercentage`<sup>Optional</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.sharedBuffersPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `tempFileLimit`<sup>Optional</sup> <a name="tempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.tempFileLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timescaledb"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `trackActivityQuerySize`<sup>Optional</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackActivityQuerySize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `trackCommitTimestamp`<sup>Optional</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackCommitTimestamp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `trackFunctions`<sup>Optional</sup> <a name="trackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackFunctions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `trackIoTiming`<sup>Optional</sup> <a name="trackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.trackIoTiming"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `walSenderTimeout`<sup>Optional</sup> <a name="walSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walSenderTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `walWriterDelay`<sup>Optional</sup> <a name="walWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.walWriterDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `workMem`<sup>Optional</sup> <a name="workMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.workMem"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer">putPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb">putTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor">resetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold">resetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge">resetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers">resetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime">resetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay">resetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit">resetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor">resetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold">resetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay">resetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter">resetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages">resetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier">resetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout">resetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression">resetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout">resetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit">resetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration">resetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity">resetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix">resetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement">resetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess">resetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction">resetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers">resetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers">resetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather">resetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction">resetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions">resetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots">resetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth">resetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay">resetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay">resetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders">resetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses">resetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer">resetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval">resetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole">resetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack">resetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage">resetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit">resetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb">resetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize">resetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp">resetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions">resetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming">resetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout">resetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay">resetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem">resetWorkMem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPgbouncer` <a name="putPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer"></a>

```java
public void putPgbouncer(IResolvable OR java.util.List<DatabasePostgresqlConfigPgbouncer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>>

---

##### `putTimescaledb` <a name="putTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb"></a>

```java
public void putTimescaledb(DatabasePostgresqlConfigTimescaledb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `resetAutovacuumAnalyzeScaleFactor` <a name="resetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor"></a>

```java
public void resetAutovacuumAnalyzeScaleFactor()
```

##### `resetAutovacuumAnalyzeThreshold` <a name="resetAutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold"></a>

```java
public void resetAutovacuumAnalyzeThreshold()
```

##### `resetAutovacuumFreezeMaxAge` <a name="resetAutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge"></a>

```java
public void resetAutovacuumFreezeMaxAge()
```

##### `resetAutovacuumMaxWorkers` <a name="resetAutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers"></a>

```java
public void resetAutovacuumMaxWorkers()
```

##### `resetAutovacuumNaptime` <a name="resetAutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime"></a>

```java
public void resetAutovacuumNaptime()
```

##### `resetAutovacuumVacuumCostDelay` <a name="resetAutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay"></a>

```java
public void resetAutovacuumVacuumCostDelay()
```

##### `resetAutovacuumVacuumCostLimit` <a name="resetAutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit"></a>

```java
public void resetAutovacuumVacuumCostLimit()
```

##### `resetAutovacuumVacuumScaleFactor` <a name="resetAutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor"></a>

```java
public void resetAutovacuumVacuumScaleFactor()
```

##### `resetAutovacuumVacuumThreshold` <a name="resetAutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold"></a>

```java
public void resetAutovacuumVacuumThreshold()
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetBgwriterDelay` <a name="resetBgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay"></a>

```java
public void resetBgwriterDelay()
```

##### `resetBgwriterFlushAfter` <a name="resetBgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter"></a>

```java
public void resetBgwriterFlushAfter()
```

##### `resetBgwriterLruMaxpages` <a name="resetBgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages"></a>

```java
public void resetBgwriterLruMaxpages()
```

##### `resetBgwriterLruMultiplier` <a name="resetBgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier"></a>

```java
public void resetBgwriterLruMultiplier()
```

##### `resetDeadlockTimeout` <a name="resetDeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout"></a>

```java
public void resetDeadlockTimeout()
```

##### `resetDefaultToastCompression` <a name="resetDefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression"></a>

```java
public void resetDefaultToastCompression()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout"></a>

```java
public void resetIdleInTransactionSessionTimeout()
```

##### `resetJit` <a name="resetJit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit"></a>

```java
public void resetJit()
```

##### `resetLogAutovacuumMinDuration` <a name="resetLogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration"></a>

```java
public void resetLogAutovacuumMinDuration()
```

##### `resetLogErrorVerbosity` <a name="resetLogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity"></a>

```java
public void resetLogErrorVerbosity()
```

##### `resetLogLinePrefix` <a name="resetLogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix"></a>

```java
public void resetLogLinePrefix()
```

##### `resetLogMinDurationStatement` <a name="resetLogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement"></a>

```java
public void resetLogMinDurationStatement()
```

##### `resetMaxFilesPerProcess` <a name="resetMaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess"></a>

```java
public void resetMaxFilesPerProcess()
```

##### `resetMaxLocksPerTransaction` <a name="resetMaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction"></a>

```java
public void resetMaxLocksPerTransaction()
```

##### `resetMaxLogicalReplicationWorkers` <a name="resetMaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers"></a>

```java
public void resetMaxLogicalReplicationWorkers()
```

##### `resetMaxParallelWorkers` <a name="resetMaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers"></a>

```java
public void resetMaxParallelWorkers()
```

##### `resetMaxParallelWorkersPerGather` <a name="resetMaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather"></a>

```java
public void resetMaxParallelWorkersPerGather()
```

##### `resetMaxPredLocksPerTransaction` <a name="resetMaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction"></a>

```java
public void resetMaxPredLocksPerTransaction()
```

##### `resetMaxPreparedTransactions` <a name="resetMaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions"></a>

```java
public void resetMaxPreparedTransactions()
```

##### `resetMaxReplicationSlots` <a name="resetMaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots"></a>

```java
public void resetMaxReplicationSlots()
```

##### `resetMaxStackDepth` <a name="resetMaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth"></a>

```java
public void resetMaxStackDepth()
```

##### `resetMaxStandbyArchiveDelay` <a name="resetMaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay"></a>

```java
public void resetMaxStandbyArchiveDelay()
```

##### `resetMaxStandbyStreamingDelay` <a name="resetMaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay"></a>

```java
public void resetMaxStandbyStreamingDelay()
```

##### `resetMaxWalSenders` <a name="resetMaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders"></a>

```java
public void resetMaxWalSenders()
```

##### `resetMaxWorkerProcesses` <a name="resetMaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses"></a>

```java
public void resetMaxWorkerProcesses()
```

##### `resetPgbouncer` <a name="resetPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer"></a>

```java
public void resetPgbouncer()
```

##### `resetPgPartmanBgwInterval` <a name="resetPgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval"></a>

```java
public void resetPgPartmanBgwInterval()
```

##### `resetPgPartmanBgwRole` <a name="resetPgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole"></a>

```java
public void resetPgPartmanBgwRole()
```

##### `resetPgStatStatementsTrack` <a name="resetPgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack"></a>

```java
public void resetPgStatStatementsTrack()
```

##### `resetSharedBuffersPercentage` <a name="resetSharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage"></a>

```java
public void resetSharedBuffersPercentage()
```

##### `resetTempFileLimit` <a name="resetTempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit"></a>

```java
public void resetTempFileLimit()
```

##### `resetTimescaledb` <a name="resetTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb"></a>

```java
public void resetTimescaledb()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTrackActivityQuerySize` <a name="resetTrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize"></a>

```java
public void resetTrackActivityQuerySize()
```

##### `resetTrackCommitTimestamp` <a name="resetTrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp"></a>

```java
public void resetTrackCommitTimestamp()
```

##### `resetTrackFunctions` <a name="resetTrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions"></a>

```java
public void resetTrackFunctions()
```

##### `resetTrackIoTiming` <a name="resetTrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming"></a>

```java
public void resetTrackIoTiming()
```

##### `resetWalSenderTimeout` <a name="resetWalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout"></a>

```java
public void resetWalSenderTimeout()
```

##### `resetWalWriterDelay` <a name="resetWalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay"></a>

```java
public void resetWalWriterDelay()
```

##### `resetWorkMem` <a name="resetWorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem"></a>

```java
public void resetWorkMem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfig;

DatabasePostgresqlConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfig;

DatabasePostgresqlConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfig;

DatabasePostgresqlConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfig;

DatabasePostgresqlConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabasePostgresqlConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabasePostgresqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabasePostgresqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePostgresqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput">autovacuumAnalyzeScaleFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput">autovacuumAnalyzeThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput">autovacuumFreezeMaxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput">autovacuumMaxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput">autovacuumNaptimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput">autovacuumVacuumCostDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput">autovacuumVacuumCostLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput">autovacuumVacuumScaleFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput">autovacuumVacuumThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput">bgwriterDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput">bgwriterFlushAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput">bgwriterLruMaxpagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput">bgwriterLruMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput">deadlockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput">defaultToastCompressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput">jitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput">logAutovacuumMinDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput">logErrorVerbosityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput">logLinePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput">logMinDurationStatementInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput">maxFilesPerProcessInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput">maxLocksPerTransactionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput">maxLogicalReplicationWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput">maxParallelWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput">maxParallelWorkersPerGatherInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput">maxPredLocksPerTransactionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput">maxPreparedTransactionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput">maxReplicationSlotsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput">maxStackDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput">maxStandbyArchiveDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput">maxStandbyStreamingDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput">maxWalSendersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput">maxWorkerProcessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput">pgbouncerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput">pgPartmanBgwIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput">pgPartmanBgwRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput">pgStatStatementsTrackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput">sharedBuffersPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput">tempFileLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput">timescaledbInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput">trackActivityQuerySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput">trackCommitTimestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput">trackFunctionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput">trackIoTimingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput">walSenderTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput">walWriterDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput">workMemInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay">bgwriterDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout">deadlockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression">defaultToastCompression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit">jit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix">logLinePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth">maxStackDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders">maxWalSenders</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit">tempFileLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions">trackFunctions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming">trackIoTiming</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout">walSenderTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay">walWriterDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem">workMem</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer"></a>

```java
public DatabasePostgresqlConfigPgbouncerList getPgbouncer();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb"></a>

```java
public DatabasePostgresqlConfigTimescaledbOutputReference getTimescaledb();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a>

---

##### `autovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactorInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="autovacuumAnalyzeThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThresholdInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="autovacuumFreezeMaxAgeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumMaxWorkersInput`<sup>Optional</sup> <a name="autovacuumMaxWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput"></a>

```java
public java.lang.Number getAutovacuumMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumNaptimeInput`<sup>Optional</sup> <a name="autovacuumNaptimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput"></a>

```java
public java.lang.Number getAutovacuumNaptimeInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="autovacuumVacuumCostDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelayInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="autovacuumVacuumCostLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimitInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactorInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="autovacuumVacuumThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput"></a>

```java
public java.lang.Number getAutovacuumVacuumThresholdInput();
```

- *Type:* java.lang.Number

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterDelayInput`<sup>Optional</sup> <a name="bgwriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput"></a>

```java
public java.lang.Number getBgwriterDelayInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterFlushAfterInput`<sup>Optional</sup> <a name="bgwriterFlushAfterInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput"></a>

```java
public java.lang.Number getBgwriterFlushAfterInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="bgwriterLruMaxpagesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput"></a>

```java
public java.lang.Number getBgwriterLruMaxpagesInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMultiplierInput`<sup>Optional</sup> <a name="bgwriterLruMultiplierInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput"></a>

```java
public java.lang.Number getBgwriterLruMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `deadlockTimeoutInput`<sup>Optional</sup> <a name="deadlockTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput"></a>

```java
public java.lang.Number getDeadlockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultToastCompressionInput`<sup>Optional</sup> <a name="defaultToastCompressionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput"></a>

```java
public java.lang.String getDefaultToastCompressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `jitInput`<sup>Optional</sup> <a name="jitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput"></a>

```java
public java.lang.Object getJitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logAutovacuumMinDurationInput`<sup>Optional</sup> <a name="logAutovacuumMinDurationInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput"></a>

```java
public java.lang.Number getLogAutovacuumMinDurationInput();
```

- *Type:* java.lang.Number

---

##### `logErrorVerbosityInput`<sup>Optional</sup> <a name="logErrorVerbosityInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput"></a>

```java
public java.lang.String getLogErrorVerbosityInput();
```

- *Type:* java.lang.String

---

##### `logLinePrefixInput`<sup>Optional</sup> <a name="logLinePrefixInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput"></a>

```java
public java.lang.String getLogLinePrefixInput();
```

- *Type:* java.lang.String

---

##### `logMinDurationStatementInput`<sup>Optional</sup> <a name="logMinDurationStatementInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput"></a>

```java
public java.lang.Number getLogMinDurationStatementInput();
```

- *Type:* java.lang.Number

---

##### `maxFilesPerProcessInput`<sup>Optional</sup> <a name="maxFilesPerProcessInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput"></a>

```java
public java.lang.Number getMaxFilesPerProcessInput();
```

- *Type:* java.lang.Number

---

##### `maxLocksPerTransactionInput`<sup>Optional</sup> <a name="maxLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput"></a>

```java
public java.lang.Number getMaxLocksPerTransactionInput();
```

- *Type:* java.lang.Number

---

##### `maxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="maxLogicalReplicationWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersInput`<sup>Optional</sup> <a name="maxParallelWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput"></a>

```java
public java.lang.Number getMaxParallelWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="maxParallelWorkersPerGatherInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGatherInput();
```

- *Type:* java.lang.Number

---

##### `maxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="maxPredLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput"></a>

```java
public java.lang.Number getMaxPredLocksPerTransactionInput();
```

- *Type:* java.lang.Number

---

##### `maxPreparedTransactionsInput`<sup>Optional</sup> <a name="maxPreparedTransactionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput"></a>

```java
public java.lang.Number getMaxPreparedTransactionsInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicationSlotsInput`<sup>Optional</sup> <a name="maxReplicationSlotsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput"></a>

```java
public java.lang.Number getMaxReplicationSlotsInput();
```

- *Type:* java.lang.Number

---

##### `maxStackDepthInput`<sup>Optional</sup> <a name="maxStackDepthInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput"></a>

```java
public java.lang.Number getMaxStackDepthInput();
```

- *Type:* java.lang.Number

---

##### `maxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="maxStandbyArchiveDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelayInput();
```

- *Type:* java.lang.Number

---

##### `maxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="maxStandbyStreamingDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelayInput();
```

- *Type:* java.lang.Number

---

##### `maxWalSendersInput`<sup>Optional</sup> <a name="maxWalSendersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput"></a>

```java
public java.lang.Number getMaxWalSendersInput();
```

- *Type:* java.lang.Number

---

##### `maxWorkerProcessesInput`<sup>Optional</sup> <a name="maxWorkerProcessesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput"></a>

```java
public java.lang.Number getMaxWorkerProcessesInput();
```

- *Type:* java.lang.Number

---

##### `pgbouncerInput`<sup>Optional</sup> <a name="pgbouncerInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput"></a>

```java
public java.lang.Object getPgbouncerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>>

---

##### `pgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="pgPartmanBgwIntervalInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput"></a>

```java
public java.lang.Number getPgPartmanBgwIntervalInput();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwRoleInput`<sup>Optional</sup> <a name="pgPartmanBgwRoleInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput"></a>

```java
public java.lang.String getPgPartmanBgwRoleInput();
```

- *Type:* java.lang.String

---

##### `pgStatStatementsTrackInput`<sup>Optional</sup> <a name="pgStatStatementsTrackInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput"></a>

```java
public java.lang.String getPgStatStatementsTrackInput();
```

- *Type:* java.lang.String

---

##### `sharedBuffersPercentageInput`<sup>Optional</sup> <a name="sharedBuffersPercentageInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput"></a>

```java
public java.lang.Number getSharedBuffersPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tempFileLimitInput`<sup>Optional</sup> <a name="tempFileLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput"></a>

```java
public java.lang.Number getTempFileLimitInput();
```

- *Type:* java.lang.Number

---

##### `timescaledbInput`<sup>Optional</sup> <a name="timescaledbInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput"></a>

```java
public DatabasePostgresqlConfigTimescaledb getTimescaledbInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `trackActivityQuerySizeInput`<sup>Optional</sup> <a name="trackActivityQuerySizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput"></a>

```java
public java.lang.Number getTrackActivityQuerySizeInput();
```

- *Type:* java.lang.Number

---

##### `trackCommitTimestampInput`<sup>Optional</sup> <a name="trackCommitTimestampInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput"></a>

```java
public java.lang.String getTrackCommitTimestampInput();
```

- *Type:* java.lang.String

---

##### `trackFunctionsInput`<sup>Optional</sup> <a name="trackFunctionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput"></a>

```java
public java.lang.String getTrackFunctionsInput();
```

- *Type:* java.lang.String

---

##### `trackIoTimingInput`<sup>Optional</sup> <a name="trackIoTimingInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput"></a>

```java
public java.lang.String getTrackIoTimingInput();
```

- *Type:* java.lang.String

---

##### `walSenderTimeoutInput`<sup>Optional</sup> <a name="walSenderTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput"></a>

```java
public java.lang.Number getWalSenderTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `walWriterDelayInput`<sup>Optional</sup> <a name="walWriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput"></a>

```java
public java.lang.Number getWalWriterDelayInput();
```

- *Type:* java.lang.Number

---

##### `workMemInput`<sup>Optional</sup> <a name="workMemInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput"></a>

```java
public java.lang.Number getWorkMemInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactor();
```

- *Type:* java.lang.Number

---

##### `autovacuumAnalyzeThreshold`<sup>Required</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThreshold();
```

- *Type:* java.lang.Number

---

##### `autovacuumFreezeMaxAge`<sup>Required</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAge();
```

- *Type:* java.lang.Number

---

##### `autovacuumMaxWorkers`<sup>Required</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers"></a>

```java
public java.lang.Number getAutovacuumMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `autovacuumNaptime`<sup>Required</sup> <a name="autovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime"></a>

```java
public java.lang.Number getAutovacuumNaptime();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostDelay`<sup>Required</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelay();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostLimit`<sup>Required</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimit();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumScaleFactor`<sup>Required</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactor();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumThreshold`<sup>Required</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold"></a>

```java
public java.lang.Number getAutovacuumVacuumThreshold();
```

- *Type:* java.lang.Number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `bgwriterDelay`<sup>Required</sup> <a name="bgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay"></a>

```java
public java.lang.Number getBgwriterDelay();
```

- *Type:* java.lang.Number

---

##### `bgwriterFlushAfter`<sup>Required</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter"></a>

```java
public java.lang.Number getBgwriterFlushAfter();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMaxpages`<sup>Required</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages"></a>

```java
public java.lang.Number getBgwriterLruMaxpages();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMultiplier`<sup>Required</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier"></a>

```java
public java.lang.Number getBgwriterLruMultiplier();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `deadlockTimeout`<sup>Required</sup> <a name="deadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout"></a>

```java
public java.lang.Number getDeadlockTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultToastCompression`<sup>Required</sup> <a name="defaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression"></a>

```java
public java.lang.String getDefaultToastCompression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit"></a>

```java
public java.lang.Object getJit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logAutovacuumMinDuration`<sup>Required</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration"></a>

```java
public java.lang.Number getLogAutovacuumMinDuration();
```

- *Type:* java.lang.Number

---

##### `logErrorVerbosity`<sup>Required</sup> <a name="logErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity"></a>

```java
public java.lang.String getLogErrorVerbosity();
```

- *Type:* java.lang.String

---

##### `logLinePrefix`<sup>Required</sup> <a name="logLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix"></a>

```java
public java.lang.String getLogLinePrefix();
```

- *Type:* java.lang.String

---

##### `logMinDurationStatement`<sup>Required</sup> <a name="logMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement"></a>

```java
public java.lang.Number getLogMinDurationStatement();
```

- *Type:* java.lang.Number

---

##### `maxFilesPerProcess`<sup>Required</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess"></a>

```java
public java.lang.Number getMaxFilesPerProcess();
```

- *Type:* java.lang.Number

---

##### `maxLocksPerTransaction`<sup>Required</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction"></a>

```java
public java.lang.Number getMaxLocksPerTransaction();
```

- *Type:* java.lang.Number

---

##### `maxLogicalReplicationWorkers`<sup>Required</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkers();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkers`<sup>Required</sup> <a name="maxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers"></a>

```java
public java.lang.Number getMaxParallelWorkers();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersPerGather`<sup>Required</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGather();
```

- *Type:* java.lang.Number

---

##### `maxPredLocksPerTransaction`<sup>Required</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction"></a>

```java
public java.lang.Number getMaxPredLocksPerTransaction();
```

- *Type:* java.lang.Number

---

##### `maxPreparedTransactions`<sup>Required</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions"></a>

```java
public java.lang.Number getMaxPreparedTransactions();
```

- *Type:* java.lang.Number

---

##### `maxReplicationSlots`<sup>Required</sup> <a name="maxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots"></a>

```java
public java.lang.Number getMaxReplicationSlots();
```

- *Type:* java.lang.Number

---

##### `maxStackDepth`<sup>Required</sup> <a name="maxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth"></a>

```java
public java.lang.Number getMaxStackDepth();
```

- *Type:* java.lang.Number

---

##### `maxStandbyArchiveDelay`<sup>Required</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelay();
```

- *Type:* java.lang.Number

---

##### `maxStandbyStreamingDelay`<sup>Required</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelay();
```

- *Type:* java.lang.Number

---

##### `maxWalSenders`<sup>Required</sup> <a name="maxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders"></a>

```java
public java.lang.Number getMaxWalSenders();
```

- *Type:* java.lang.Number

---

##### `maxWorkerProcesses`<sup>Required</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses"></a>

```java
public java.lang.Number getMaxWorkerProcesses();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwInterval`<sup>Required</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval"></a>

```java
public java.lang.Number getPgPartmanBgwInterval();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwRole`<sup>Required</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole"></a>

```java
public java.lang.String getPgPartmanBgwRole();
```

- *Type:* java.lang.String

---

##### `pgStatStatementsTrack`<sup>Required</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack"></a>

```java
public java.lang.String getPgStatStatementsTrack();
```

- *Type:* java.lang.String

---

##### `sharedBuffersPercentage`<sup>Required</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage"></a>

```java
public java.lang.Number getSharedBuffersPercentage();
```

- *Type:* java.lang.Number

---

##### `tempFileLimit`<sup>Required</sup> <a name="tempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit"></a>

```java
public java.lang.Number getTempFileLimit();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `trackActivityQuerySize`<sup>Required</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize"></a>

```java
public java.lang.Number getTrackActivityQuerySize();
```

- *Type:* java.lang.Number

---

##### `trackCommitTimestamp`<sup>Required</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp"></a>

```java
public java.lang.String getTrackCommitTimestamp();
```

- *Type:* java.lang.String

---

##### `trackFunctions`<sup>Required</sup> <a name="trackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions"></a>

```java
public java.lang.String getTrackFunctions();
```

- *Type:* java.lang.String

---

##### `trackIoTiming`<sup>Required</sup> <a name="trackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming"></a>

```java
public java.lang.String getTrackIoTiming();
```

- *Type:* java.lang.String

---

##### `walSenderTimeout`<sup>Required</sup> <a name="walSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout"></a>

```java
public java.lang.Number getWalSenderTimeout();
```

- *Type:* java.lang.Number

---

##### `walWriterDelay`<sup>Required</sup> <a name="walWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay"></a>

```java
public java.lang.Number getWalWriterDelay();
```

- *Type:* java.lang.Number

---

##### `workMem`<sup>Required</sup> <a name="workMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem"></a>

```java
public java.lang.Number getWorkMem();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePostgresqlConfigConfig <a name="DatabasePostgresqlConfigConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigConfig;

DatabasePostgresqlConfigConfig.builder()
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
//  .autovacuumAnalyzeScaleFactor(java.lang.Number)
//  .autovacuumAnalyzeThreshold(java.lang.Number)
//  .autovacuumFreezeMaxAge(java.lang.Number)
//  .autovacuumMaxWorkers(java.lang.Number)
//  .autovacuumNaptime(java.lang.Number)
//  .autovacuumVacuumCostDelay(java.lang.Number)
//  .autovacuumVacuumCostLimit(java.lang.Number)
//  .autovacuumVacuumScaleFactor(java.lang.Number)
//  .autovacuumVacuumThreshold(java.lang.Number)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .bgwriterDelay(java.lang.Number)
//  .bgwriterFlushAfter(java.lang.Number)
//  .bgwriterLruMaxpages(java.lang.Number)
//  .bgwriterLruMultiplier(java.lang.Number)
//  .deadlockTimeout(java.lang.Number)
//  .defaultToastCompression(java.lang.String)
//  .id(java.lang.String)
//  .idleInTransactionSessionTimeout(java.lang.Number)
//  .jit(java.lang.Boolean)
//  .jit(IResolvable)
//  .logAutovacuumMinDuration(java.lang.Number)
//  .logErrorVerbosity(java.lang.String)
//  .logLinePrefix(java.lang.String)
//  .logMinDurationStatement(java.lang.Number)
//  .maxFilesPerProcess(java.lang.Number)
//  .maxLocksPerTransaction(java.lang.Number)
//  .maxLogicalReplicationWorkers(java.lang.Number)
//  .maxParallelWorkers(java.lang.Number)
//  .maxParallelWorkersPerGather(java.lang.Number)
//  .maxPredLocksPerTransaction(java.lang.Number)
//  .maxPreparedTransactions(java.lang.Number)
//  .maxReplicationSlots(java.lang.Number)
//  .maxStackDepth(java.lang.Number)
//  .maxStandbyArchiveDelay(java.lang.Number)
//  .maxStandbyStreamingDelay(java.lang.Number)
//  .maxWalSenders(java.lang.Number)
//  .maxWorkerProcesses(java.lang.Number)
//  .pgbouncer(IResolvable)
//  .pgbouncer(java.util.List<DatabasePostgresqlConfigPgbouncer>)
//  .pgPartmanBgwInterval(java.lang.Number)
//  .pgPartmanBgwRole(java.lang.String)
//  .pgStatStatementsTrack(java.lang.String)
//  .sharedBuffersPercentage(java.lang.Number)
//  .tempFileLimit(java.lang.Number)
//  .timescaledb(DatabasePostgresqlConfigTimescaledb)
//  .timezone(java.lang.String)
//  .trackActivityQuerySize(java.lang.Number)
//  .trackCommitTimestamp(java.lang.String)
//  .trackFunctions(java.lang.String)
//  .trackIoTiming(java.lang.String)
//  .walSenderTimeout(java.lang.Number)
//  .walWriterDelay(java.lang.Number)
//  .workMem(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay">bgwriterDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout">deadlockTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression">defaultToastCompression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit">jit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix">logLinePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth">maxStackDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders">maxWalSenders</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer">pgbouncer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit">tempFileLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions">trackFunctions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming">trackIoTiming</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout">walSenderTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay">walWriterDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem">workMem</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `autovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `autovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `autovacuumFreezeMaxAge`<sup>Optional</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `autovacuumMaxWorkers`<sup>Optional</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers"></a>

```java
public java.lang.Number getAutovacuumMaxWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `autovacuumNaptime`<sup>Optional</sup> <a name="autovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime"></a>

```java
public java.lang.Number getAutovacuumNaptime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `autovacuumVacuumCostDelay`<sup>Optional</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `autovacuumVacuumCostLimit`<sup>Optional</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `autovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `autovacuumVacuumThreshold`<sup>Optional</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold"></a>

```java
public java.lang.Number getAutovacuumVacuumThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `bgwriterDelay`<sup>Optional</sup> <a name="bgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay"></a>

```java
public java.lang.Number getBgwriterDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `bgwriterFlushAfter`<sup>Optional</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter"></a>

```java
public java.lang.Number getBgwriterFlushAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `bgwriterLruMaxpages`<sup>Optional</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages"></a>

```java
public java.lang.Number getBgwriterLruMaxpages();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `bgwriterLruMultiplier`<sup>Optional</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier"></a>

```java
public java.lang.Number getBgwriterLruMultiplier();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `deadlockTimeout`<sup>Optional</sup> <a name="deadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout"></a>

```java
public java.lang.Number getDeadlockTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `defaultToastCompression`<sup>Optional</sup> <a name="defaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression"></a>

```java
public java.lang.String getDefaultToastCompression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit"></a>

```java
public java.lang.Object getJit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `logAutovacuumMinDuration`<sup>Optional</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration"></a>

```java
public java.lang.Number getLogAutovacuumMinDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `logErrorVerbosity`<sup>Optional</sup> <a name="logErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity"></a>

```java
public java.lang.String getLogErrorVerbosity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `logLinePrefix`<sup>Optional</sup> <a name="logLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix"></a>

```java
public java.lang.String getLogLinePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `logMinDurationStatement`<sup>Optional</sup> <a name="logMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement"></a>

```java
public java.lang.Number getLogMinDurationStatement();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `maxFilesPerProcess`<sup>Optional</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess"></a>

```java
public java.lang.Number getMaxFilesPerProcess();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `maxLocksPerTransaction`<sup>Optional</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction"></a>

```java
public java.lang.Number getMaxLocksPerTransaction();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `maxLogicalReplicationWorkers`<sup>Optional</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `maxParallelWorkers`<sup>Optional</sup> <a name="maxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers"></a>

```java
public java.lang.Number getMaxParallelWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `maxParallelWorkersPerGather`<sup>Optional</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGather();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `maxPredLocksPerTransaction`<sup>Optional</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction"></a>

```java
public java.lang.Number getMaxPredLocksPerTransaction();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `maxPreparedTransactions`<sup>Optional</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions"></a>

```java
public java.lang.Number getMaxPreparedTransactions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `maxReplicationSlots`<sup>Optional</sup> <a name="maxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots"></a>

```java
public java.lang.Number getMaxReplicationSlots();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `maxStackDepth`<sup>Optional</sup> <a name="maxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth"></a>

```java
public java.lang.Number getMaxStackDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `maxStandbyArchiveDelay`<sup>Optional</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `maxStandbyStreamingDelay`<sup>Optional</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `maxWalSenders`<sup>Optional</sup> <a name="maxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders"></a>

```java
public java.lang.Number getMaxWalSenders();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `maxWorkerProcesses`<sup>Optional</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses"></a>

```java
public java.lang.Number getMaxWorkerProcesses();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer"></a>

```java
public java.lang.Object getPgbouncer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `pgPartmanBgwInterval`<sup>Optional</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval"></a>

```java
public java.lang.Number getPgPartmanBgwInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `pgPartmanBgwRole`<sup>Optional</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole"></a>

```java
public java.lang.String getPgPartmanBgwRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `pgStatStatementsTrack`<sup>Optional</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack"></a>

```java
public java.lang.String getPgStatStatementsTrack();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `sharedBuffersPercentage`<sup>Optional</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage"></a>

```java
public java.lang.Number getSharedBuffersPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `tempFileLimit`<sup>Optional</sup> <a name="tempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit"></a>

```java
public java.lang.Number getTempFileLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb"></a>

```java
public DatabasePostgresqlConfigTimescaledb getTimescaledb();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `trackActivityQuerySize`<sup>Optional</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize"></a>

```java
public java.lang.Number getTrackActivityQuerySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `trackCommitTimestamp`<sup>Optional</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp"></a>

```java
public java.lang.String getTrackCommitTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `trackFunctions`<sup>Optional</sup> <a name="trackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions"></a>

```java
public java.lang.String getTrackFunctions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `trackIoTiming`<sup>Optional</sup> <a name="trackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming"></a>

```java
public java.lang.String getTrackIoTiming();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `walSenderTimeout`<sup>Optional</sup> <a name="walSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout"></a>

```java
public java.lang.Number getWalSenderTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `walWriterDelay`<sup>Optional</sup> <a name="walWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay"></a>

```java
public java.lang.Number getWalWriterDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `workMem`<sup>Optional</sup> <a name="workMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem"></a>

```java
public java.lang.Number getWorkMem();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

### DatabasePostgresqlConfigPgbouncer <a name="DatabasePostgresqlConfigPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigPgbouncer;

DatabasePostgresqlConfigPgbouncer.builder()
//  .autodbIdleTimeout(java.lang.Number)
//  .autodbMaxDbConnections(java.lang.Number)
//  .autodbPoolMode(java.lang.String)
//  .autodbPoolSize(java.lang.Number)
//  .ignoreStartupParameters(java.util.List<java.lang.String>)
//  .minPoolSize(java.lang.Number)
//  .serverIdleTimeout(java.lang.Number)
//  .serverLifetime(java.lang.Number)
//  .serverResetQueryAlways(java.lang.Boolean)
//  .serverResetQueryAlways(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode">autodbPoolMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize">autodbPoolSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize">minPoolSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime">serverLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}. |

---

##### `autodbIdleTimeout`<sup>Optional</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout"></a>

```java
public java.lang.Number getAutodbIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}.

---

##### `autodbMaxDbConnections`<sup>Optional</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections"></a>

```java
public java.lang.Number getAutodbMaxDbConnections();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}.

---

##### `autodbPoolMode`<sup>Optional</sup> <a name="autodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode"></a>

```java
public java.lang.String getAutodbPoolMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}.

---

##### `autodbPoolSize`<sup>Optional</sup> <a name="autodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize"></a>

```java
public java.lang.Number getAutodbPoolSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}.

---

##### `ignoreStartupParameters`<sup>Optional</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}.

---

##### `minPoolSize`<sup>Optional</sup> <a name="minPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize"></a>

```java
public java.lang.Number getMinPoolSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}.

---

##### `serverIdleTimeout`<sup>Optional</sup> <a name="serverIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout"></a>

```java
public java.lang.Number getServerIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}.

---

##### `serverLifetime`<sup>Optional</sup> <a name="serverLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime"></a>

```java
public java.lang.Number getServerLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}.

---

##### `serverResetQueryAlways`<sup>Optional</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways"></a>

```java
public java.lang.Object getServerResetQueryAlways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}.

---

### DatabasePostgresqlConfigTimescaledb <a name="DatabasePostgresqlConfigTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigTimescaledb;

DatabasePostgresqlConfigTimescaledb.builder()
//  .maxBackgroundWorkers(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}. |

---

##### `maxBackgroundWorkers`<sup>Optional</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers"></a>

```java
public java.lang.Number getMaxBackgroundWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePostgresqlConfigPgbouncerList <a name="DatabasePostgresqlConfigPgbouncerList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigPgbouncerList;

new DatabasePostgresqlConfigPgbouncerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get"></a>

```java
public DatabasePostgresqlConfigPgbouncerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>>

---


### DatabasePostgresqlConfigPgbouncerOutputReference <a name="DatabasePostgresqlConfigPgbouncerOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigPgbouncerOutputReference;

new DatabasePostgresqlConfigPgbouncerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout">resetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections">resetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode">resetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize">resetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters">resetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize">resetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout">resetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime">resetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways">resetServerResetQueryAlways</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutodbIdleTimeout` <a name="resetAutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```java
public void resetAutodbIdleTimeout()
```

##### `resetAutodbMaxDbConnections` <a name="resetAutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```java
public void resetAutodbMaxDbConnections()
```

##### `resetAutodbPoolMode` <a name="resetAutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode"></a>

```java
public void resetAutodbPoolMode()
```

##### `resetAutodbPoolSize` <a name="resetAutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize"></a>

```java
public void resetAutodbPoolSize()
```

##### `resetIgnoreStartupParameters` <a name="resetIgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```java
public void resetIgnoreStartupParameters()
```

##### `resetMinPoolSize` <a name="resetMinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize"></a>

```java
public void resetMinPoolSize()
```

##### `resetServerIdleTimeout` <a name="resetServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout"></a>

```java
public void resetServerIdleTimeout()
```

##### `resetServerLifetime` <a name="resetServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime"></a>

```java
public void resetServerLifetime()
```

##### `resetServerResetQueryAlways` <a name="resetServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```java
public void resetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodbIdleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodbMaxDbConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput">autodbPoolModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput">autodbPoolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput">ignoreStartupParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput">minPoolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput">serverIdleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput">serverLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput">serverResetQueryAlwaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode">autodbPoolMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize">autodbPoolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize">minPoolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime">serverLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autodbIdleTimeoutInput`<sup>Optional</sup> <a name="autodbIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```java
public java.lang.Number getAutodbIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `autodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="autodbMaxDbConnectionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```java
public java.lang.Number getAutodbMaxDbConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `autodbPoolModeInput`<sup>Optional</sup> <a name="autodbPoolModeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```java
public java.lang.String getAutodbPoolModeInput();
```

- *Type:* java.lang.String

---

##### `autodbPoolSizeInput`<sup>Optional</sup> <a name="autodbPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```java
public java.lang.Number getAutodbPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `ignoreStartupParametersInput`<sup>Optional</sup> <a name="ignoreStartupParametersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minPoolSizeInput`<sup>Optional</sup> <a name="minPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput"></a>

```java
public java.lang.Number getMinPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `serverIdleTimeoutInput`<sup>Optional</sup> <a name="serverIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```java
public java.lang.Number getServerIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `serverLifetimeInput`<sup>Optional</sup> <a name="serverLifetimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput"></a>

```java
public java.lang.Number getServerLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `serverResetQueryAlwaysInput`<sup>Optional</sup> <a name="serverResetQueryAlwaysInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```java
public java.lang.Object getServerResetQueryAlwaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodbIdleTimeout`<sup>Required</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```java
public java.lang.Number getAutodbIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `autodbMaxDbConnections`<sup>Required</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```java
public java.lang.Number getAutodbMaxDbConnections();
```

- *Type:* java.lang.Number

---

##### `autodbPoolMode`<sup>Required</sup> <a name="autodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode"></a>

```java
public java.lang.String getAutodbPoolMode();
```

- *Type:* java.lang.String

---

##### `autodbPoolSize`<sup>Required</sup> <a name="autodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize"></a>

```java
public java.lang.Number getAutodbPoolSize();
```

- *Type:* java.lang.Number

---

##### `ignoreStartupParameters`<sup>Required</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minPoolSize`<sup>Required</sup> <a name="minPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize"></a>

```java
public java.lang.Number getMinPoolSize();
```

- *Type:* java.lang.Number

---

##### `serverIdleTimeout`<sup>Required</sup> <a name="serverIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout"></a>

```java
public java.lang.Number getServerIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `serverLifetime`<sup>Required</sup> <a name="serverLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime"></a>

```java
public java.lang.Number getServerLifetime();
```

- *Type:* java.lang.Number

---

##### `serverResetQueryAlways`<sup>Required</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```java
public java.lang.Object getServerResetQueryAlways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>

---


### DatabasePostgresqlConfigTimescaledbOutputReference <a name="DatabasePostgresqlConfigTimescaledbOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_postgresql_config.DatabasePostgresqlConfigTimescaledbOutputReference;

new DatabasePostgresqlConfigTimescaledbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers">resetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackgroundWorkers` <a name="resetMaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```java
public void resetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput">maxBackgroundWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBackgroundWorkersInput`<sup>Optional</sup> <a name="maxBackgroundWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```java
public java.lang.Number getMaxBackgroundWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxBackgroundWorkers`<sup>Required</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```java
public java.lang.Number getMaxBackgroundWorkers();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue"></a>

```java
public DatabasePostgresqlConfigTimescaledb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---



