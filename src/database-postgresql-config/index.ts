/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePostgresqlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}
  */
  readonly autovacuumAnalyzeScaleFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}
  */
  readonly autovacuumAnalyzeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}
  */
  readonly autovacuumFreezeMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}
  */
  readonly autovacuumMaxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}
  */
  readonly autovacuumNaptime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}
  */
  readonly autovacuumVacuumCostDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}
  */
  readonly autovacuumVacuumCostLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}
  */
  readonly autovacuumVacuumScaleFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}
  */
  readonly autovacuumVacuumThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}
  */
  readonly bgwriterDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}
  */
  readonly bgwriterFlushAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}
  */
  readonly bgwriterLruMaxpages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}
  */
  readonly bgwriterLruMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}
  */
  readonly deadlockTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}
  */
  readonly defaultToastCompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}
  */
  readonly jit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}
  */
  readonly logAutovacuumMinDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}
  */
  readonly logErrorVerbosity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}
  */
  readonly logLinePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}
  */
  readonly logMinDurationStatement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}
  */
  readonly maxFilesPerProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}
  */
  readonly maxLocksPerTransaction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}
  */
  readonly maxLogicalReplicationWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}
  */
  readonly maxParallelWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}
  */
  readonly maxParallelWorkersPerGather?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}
  */
  readonly maxPredLocksPerTransaction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}
  */
  readonly maxReplicationSlots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}
  */
  readonly maxStackDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}
  */
  readonly maxStandbyArchiveDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}
  */
  readonly maxStandbyStreamingDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}
  */
  readonly maxWalSenders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}
  */
  readonly maxWorkerProcesses?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}
  */
  readonly pgPartmanBgwInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}
  */
  readonly pgPartmanBgwRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}
  */
  readonly pgStatStatementsTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}
  */
  readonly sharedBuffersPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}
  */
  readonly tempFileLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}
  */
  readonly trackActivityQuerySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}
  */
  readonly trackCommitTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}
  */
  readonly trackFunctions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}
  */
  readonly trackIoTiming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}
  */
  readonly walSenderTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}
  */
  readonly walWriterDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}
  */
  readonly workMem?: number;
  /**
  * pgbouncer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}
  */
  readonly pgbouncer?: DatabasePostgresqlConfigPgbouncer[] | cdktf.IResolvable;
  /**
  * timescaledb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}
  */
  readonly timescaledb?: DatabasePostgresqlConfigTimescaledb;
}
export interface DatabasePostgresqlConfigPgbouncer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}
  */
  readonly autodbIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}
  */
  readonly autodbMaxDbConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}
  */
  readonly autodbPoolMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}
  */
  readonly autodbPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}
  */
  readonly ignoreStartupParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}
  */
  readonly minPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}
  */
  readonly serverIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}
  */
  readonly serverLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}
  */
  readonly serverResetQueryAlways?: boolean | cdktf.IResolvable;
}

export function databasePostgresqlConfigPgbouncerToTerraform(struct?: DatabasePostgresqlConfigPgbouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodb_idle_timeout: cdktf.numberToTerraform(struct!.autodbIdleTimeout),
    autodb_max_db_connections: cdktf.numberToTerraform(struct!.autodbMaxDbConnections),
    autodb_pool_mode: cdktf.stringToTerraform(struct!.autodbPoolMode),
    autodb_pool_size: cdktf.numberToTerraform(struct!.autodbPoolSize),
    ignore_startup_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreStartupParameters),
    min_pool_size: cdktf.numberToTerraform(struct!.minPoolSize),
    server_idle_timeout: cdktf.numberToTerraform(struct!.serverIdleTimeout),
    server_lifetime: cdktf.numberToTerraform(struct!.serverLifetime),
    server_reset_query_always: cdktf.booleanToTerraform(struct!.serverResetQueryAlways),
  }
}


export function databasePostgresqlConfigPgbouncerToHclTerraform(struct?: DatabasePostgresqlConfigPgbouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodb_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.autodbIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_max_db_connections: {
      value: cdktf.numberToHclTerraform(struct!.autodbMaxDbConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_pool_mode: {
      value: cdktf.stringToHclTerraform(struct!.autodbPoolMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autodb_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.autodbPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_startup_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreStartupParameters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    min_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.minPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.serverIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.serverLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reset_query_always: {
      value: cdktf.booleanToHclTerraform(struct!.serverResetQueryAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlConfigPgbouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabasePostgresqlConfigPgbouncer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodbIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbIdleTimeout = this._autodbIdleTimeout;
    }
    if (this._autodbMaxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbMaxDbConnections = this._autodbMaxDbConnections;
    }
    if (this._autodbPoolMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolMode = this._autodbPoolMode;
    }
    if (this._autodbPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolSize = this._autodbPoolSize;
    }
    if (this._ignoreStartupParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreStartupParameters = this._ignoreStartupParameters;
    }
    if (this._minPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPoolSize = this._minPoolSize;
    }
    if (this._serverIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdleTimeout = this._serverIdleTimeout;
    }
    if (this._serverLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLifetime = this._serverLifetime;
    }
    if (this._serverResetQueryAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResetQueryAlways = this._serverResetQueryAlways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlConfigPgbouncer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autodbIdleTimeout = undefined;
      this._autodbMaxDbConnections = undefined;
      this._autodbPoolMode = undefined;
      this._autodbPoolSize = undefined;
      this._ignoreStartupParameters = undefined;
      this._minPoolSize = undefined;
      this._serverIdleTimeout = undefined;
      this._serverLifetime = undefined;
      this._serverResetQueryAlways = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autodbIdleTimeout = value.autodbIdleTimeout;
      this._autodbMaxDbConnections = value.autodbMaxDbConnections;
      this._autodbPoolMode = value.autodbPoolMode;
      this._autodbPoolSize = value.autodbPoolSize;
      this._ignoreStartupParameters = value.ignoreStartupParameters;
      this._minPoolSize = value.minPoolSize;
      this._serverIdleTimeout = value.serverIdleTimeout;
      this._serverLifetime = value.serverLifetime;
      this._serverResetQueryAlways = value.serverResetQueryAlways;
    }
  }

  // autodb_idle_timeout - computed: true, optional: true, required: false
  private _autodbIdleTimeout?: number; 
  public get autodbIdleTimeout() {
    return this.getNumberAttribute('autodb_idle_timeout');
  }
  public set autodbIdleTimeout(value: number) {
    this._autodbIdleTimeout = value;
  }
  public resetAutodbIdleTimeout() {
    this._autodbIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbIdleTimeoutInput() {
    return this._autodbIdleTimeout;
  }

  // autodb_max_db_connections - computed: true, optional: true, required: false
  private _autodbMaxDbConnections?: number; 
  public get autodbMaxDbConnections() {
    return this.getNumberAttribute('autodb_max_db_connections');
  }
  public set autodbMaxDbConnections(value: number) {
    this._autodbMaxDbConnections = value;
  }
  public resetAutodbMaxDbConnections() {
    this._autodbMaxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbMaxDbConnectionsInput() {
    return this._autodbMaxDbConnections;
  }

  // autodb_pool_mode - computed: true, optional: true, required: false
  private _autodbPoolMode?: string; 
  public get autodbPoolMode() {
    return this.getStringAttribute('autodb_pool_mode');
  }
  public set autodbPoolMode(value: string) {
    this._autodbPoolMode = value;
  }
  public resetAutodbPoolMode() {
    this._autodbPoolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolModeInput() {
    return this._autodbPoolMode;
  }

  // autodb_pool_size - computed: true, optional: true, required: false
  private _autodbPoolSize?: number; 
  public get autodbPoolSize() {
    return this.getNumberAttribute('autodb_pool_size');
  }
  public set autodbPoolSize(value: number) {
    this._autodbPoolSize = value;
  }
  public resetAutodbPoolSize() {
    this._autodbPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolSizeInput() {
    return this._autodbPoolSize;
  }

  // ignore_startup_parameters - computed: true, optional: true, required: false
  private _ignoreStartupParameters?: string[]; 
  public get ignoreStartupParameters() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_startup_parameters'));
  }
  public set ignoreStartupParameters(value: string[]) {
    this._ignoreStartupParameters = value;
  }
  public resetIgnoreStartupParameters() {
    this._ignoreStartupParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStartupParametersInput() {
    return this._ignoreStartupParameters;
  }

  // min_pool_size - computed: true, optional: true, required: false
  private _minPoolSize?: number; 
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }
  public set minPoolSize(value: number) {
    this._minPoolSize = value;
  }
  public resetMinPoolSize() {
    this._minPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolSizeInput() {
    return this._minPoolSize;
  }

  // server_idle_timeout - computed: true, optional: true, required: false
  private _serverIdleTimeout?: number; 
  public get serverIdleTimeout() {
    return this.getNumberAttribute('server_idle_timeout');
  }
  public set serverIdleTimeout(value: number) {
    this._serverIdleTimeout = value;
  }
  public resetServerIdleTimeout() {
    this._serverIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdleTimeoutInput() {
    return this._serverIdleTimeout;
  }

  // server_lifetime - computed: true, optional: true, required: false
  private _serverLifetime?: number; 
  public get serverLifetime() {
    return this.getNumberAttribute('server_lifetime');
  }
  public set serverLifetime(value: number) {
    this._serverLifetime = value;
  }
  public resetServerLifetime() {
    this._serverLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLifetimeInput() {
    return this._serverLifetime;
  }

  // server_reset_query_always - computed: true, optional: true, required: false
  private _serverResetQueryAlways?: boolean | cdktf.IResolvable; 
  public get serverResetQueryAlways() {
    return this.getBooleanAttribute('server_reset_query_always');
  }
  public set serverResetQueryAlways(value: boolean | cdktf.IResolvable) {
    this._serverResetQueryAlways = value;
  }
  public resetServerResetQueryAlways() {
    this._serverResetQueryAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetQueryAlwaysInput() {
    return this._serverResetQueryAlways;
  }
}

export class DatabasePostgresqlConfigPgbouncerList extends cdktf.ComplexList {
  public internalValue? : DatabasePostgresqlConfigPgbouncer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabasePostgresqlConfigPgbouncerOutputReference {
    return new DatabasePostgresqlConfigPgbouncerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePostgresqlConfigTimescaledb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}
  */
  readonly maxBackgroundWorkers?: number;
}

export function databasePostgresqlConfigTimescaledbToTerraform(struct?: DatabasePostgresqlConfigTimescaledbOutputReference | DatabasePostgresqlConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_background_workers: cdktf.numberToTerraform(struct!.maxBackgroundWorkers),
  }
}


export function databasePostgresqlConfigTimescaledbToHclTerraform(struct?: DatabasePostgresqlConfigTimescaledbOutputReference | DatabasePostgresqlConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_background_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxBackgroundWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlConfigTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabasePostgresqlConfigTimescaledb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackgroundWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackgroundWorkers = this._maxBackgroundWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlConfigTimescaledb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBackgroundWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBackgroundWorkers = value.maxBackgroundWorkers;
    }
  }

  // max_background_workers - computed: false, optional: true, required: false
  private _maxBackgroundWorkers?: number; 
  public get maxBackgroundWorkers() {
    return this.getNumberAttribute('max_background_workers');
  }
  public set maxBackgroundWorkers(value: number) {
    this._maxBackgroundWorkers = value;
  }
  public resetMaxBackgroundWorkers() {
    this._maxBackgroundWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackgroundWorkersInput() {
    return this._maxBackgroundWorkers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}
*/
export class DatabasePostgresqlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_postgresql_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePostgresqlConfig to import
  * @param importFromId The id of the existing DatabasePostgresqlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePostgresqlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_postgresql_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_postgresql_config digitalocean_database_postgresql_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePostgresqlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabasePostgresqlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_postgresql_config',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.46.1',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autovacuumAnalyzeScaleFactor = config.autovacuumAnalyzeScaleFactor;
    this._autovacuumAnalyzeThreshold = config.autovacuumAnalyzeThreshold;
    this._autovacuumFreezeMaxAge = config.autovacuumFreezeMaxAge;
    this._autovacuumMaxWorkers = config.autovacuumMaxWorkers;
    this._autovacuumNaptime = config.autovacuumNaptime;
    this._autovacuumVacuumCostDelay = config.autovacuumVacuumCostDelay;
    this._autovacuumVacuumCostLimit = config.autovacuumVacuumCostLimit;
    this._autovacuumVacuumScaleFactor = config.autovacuumVacuumScaleFactor;
    this._autovacuumVacuumThreshold = config.autovacuumVacuumThreshold;
    this._backupHour = config.backupHour;
    this._backupMinute = config.backupMinute;
    this._bgwriterDelay = config.bgwriterDelay;
    this._bgwriterFlushAfter = config.bgwriterFlushAfter;
    this._bgwriterLruMaxpages = config.bgwriterLruMaxpages;
    this._bgwriterLruMultiplier = config.bgwriterLruMultiplier;
    this._clusterId = config.clusterId;
    this._deadlockTimeout = config.deadlockTimeout;
    this._defaultToastCompression = config.defaultToastCompression;
    this._id = config.id;
    this._idleInTransactionSessionTimeout = config.idleInTransactionSessionTimeout;
    this._jit = config.jit;
    this._logAutovacuumMinDuration = config.logAutovacuumMinDuration;
    this._logErrorVerbosity = config.logErrorVerbosity;
    this._logLinePrefix = config.logLinePrefix;
    this._logMinDurationStatement = config.logMinDurationStatement;
    this._maxFilesPerProcess = config.maxFilesPerProcess;
    this._maxLocksPerTransaction = config.maxLocksPerTransaction;
    this._maxLogicalReplicationWorkers = config.maxLogicalReplicationWorkers;
    this._maxParallelWorkers = config.maxParallelWorkers;
    this._maxParallelWorkersPerGather = config.maxParallelWorkersPerGather;
    this._maxPredLocksPerTransaction = config.maxPredLocksPerTransaction;
    this._maxPreparedTransactions = config.maxPreparedTransactions;
    this._maxReplicationSlots = config.maxReplicationSlots;
    this._maxStackDepth = config.maxStackDepth;
    this._maxStandbyArchiveDelay = config.maxStandbyArchiveDelay;
    this._maxStandbyStreamingDelay = config.maxStandbyStreamingDelay;
    this._maxWalSenders = config.maxWalSenders;
    this._maxWorkerProcesses = config.maxWorkerProcesses;
    this._pgPartmanBgwInterval = config.pgPartmanBgwInterval;
    this._pgPartmanBgwRole = config.pgPartmanBgwRole;
    this._pgStatStatementsTrack = config.pgStatStatementsTrack;
    this._sharedBuffersPercentage = config.sharedBuffersPercentage;
    this._tempFileLimit = config.tempFileLimit;
    this._timezone = config.timezone;
    this._trackActivityQuerySize = config.trackActivityQuerySize;
    this._trackCommitTimestamp = config.trackCommitTimestamp;
    this._trackFunctions = config.trackFunctions;
    this._trackIoTiming = config.trackIoTiming;
    this._walSenderTimeout = config.walSenderTimeout;
    this._walWriterDelay = config.walWriterDelay;
    this._workMem = config.workMem;
    this._pgbouncer.internalValue = config.pgbouncer;
    this._timescaledb.internalValue = config.timescaledb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autovacuum_analyze_scale_factor - computed: true, optional: true, required: false
  private _autovacuumAnalyzeScaleFactor?: number; 
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }
  public set autovacuumAnalyzeScaleFactor(value: number) {
    this._autovacuumAnalyzeScaleFactor = value;
  }
  public resetAutovacuumAnalyzeScaleFactor() {
    this._autovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeScaleFactorInput() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // autovacuum_analyze_threshold - computed: true, optional: true, required: false
  private _autovacuumAnalyzeThreshold?: number; 
  public get autovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('autovacuum_analyze_threshold');
  }
  public set autovacuumAnalyzeThreshold(value: number) {
    this._autovacuumAnalyzeThreshold = value;
  }
  public resetAutovacuumAnalyzeThreshold() {
    this._autovacuumAnalyzeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeThresholdInput() {
    return this._autovacuumAnalyzeThreshold;
  }

  // autovacuum_freeze_max_age - computed: true, optional: true, required: false
  private _autovacuumFreezeMaxAge?: number; 
  public get autovacuumFreezeMaxAge() {
    return this.getNumberAttribute('autovacuum_freeze_max_age');
  }
  public set autovacuumFreezeMaxAge(value: number) {
    this._autovacuumFreezeMaxAge = value;
  }
  public resetAutovacuumFreezeMaxAge() {
    this._autovacuumFreezeMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumFreezeMaxAgeInput() {
    return this._autovacuumFreezeMaxAge;
  }

  // autovacuum_max_workers - computed: true, optional: true, required: false
  private _autovacuumMaxWorkers?: number; 
  public get autovacuumMaxWorkers() {
    return this.getNumberAttribute('autovacuum_max_workers');
  }
  public set autovacuumMaxWorkers(value: number) {
    this._autovacuumMaxWorkers = value;
  }
  public resetAutovacuumMaxWorkers() {
    this._autovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumMaxWorkersInput() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_naptime - computed: true, optional: true, required: false
  private _autovacuumNaptime?: number; 
  public get autovacuumNaptime() {
    return this.getNumberAttribute('autovacuum_naptime');
  }
  public set autovacuumNaptime(value: number) {
    this._autovacuumNaptime = value;
  }
  public resetAutovacuumNaptime() {
    this._autovacuumNaptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumNaptimeInput() {
    return this._autovacuumNaptime;
  }

  // autovacuum_vacuum_cost_delay - computed: true, optional: true, required: false
  private _autovacuumVacuumCostDelay?: number; 
  public get autovacuumVacuumCostDelay() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_delay');
  }
  public set autovacuumVacuumCostDelay(value: number) {
    this._autovacuumVacuumCostDelay = value;
  }
  public resetAutovacuumVacuumCostDelay() {
    this._autovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostDelayInput() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_cost_limit - computed: true, optional: true, required: false
  private _autovacuumVacuumCostLimit?: number; 
  public get autovacuumVacuumCostLimit() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_limit');
  }
  public set autovacuumVacuumCostLimit(value: number) {
    this._autovacuumVacuumCostLimit = value;
  }
  public resetAutovacuumVacuumCostLimit() {
    this._autovacuumVacuumCostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostLimitInput() {
    return this._autovacuumVacuumCostLimit;
  }

  // autovacuum_vacuum_scale_factor - computed: true, optional: true, required: false
  private _autovacuumVacuumScaleFactor?: number; 
  public get autovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('autovacuum_vacuum_scale_factor');
  }
  public set autovacuumVacuumScaleFactor(value: number) {
    this._autovacuumVacuumScaleFactor = value;
  }
  public resetAutovacuumVacuumScaleFactor() {
    this._autovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumScaleFactorInput() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: true, optional: true, required: false
  private _autovacuumVacuumThreshold?: number; 
  public get autovacuumVacuumThreshold() {
    return this.getNumberAttribute('autovacuum_vacuum_threshold');
  }
  public set autovacuumVacuumThreshold(value: number) {
    this._autovacuumVacuumThreshold = value;
  }
  public resetAutovacuumVacuumThreshold() {
    this._autovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumThresholdInput() {
    return this._autovacuumVacuumThreshold;
  }

  // backup_hour - computed: true, optional: true, required: false
  private _backupHour?: number; 
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }
  public set backupHour(value: number) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: true, optional: true, required: false
  private _backupMinute?: number; 
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }
  public set backupMinute(value: number) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // bgwriter_delay - computed: true, optional: true, required: false
  private _bgwriterDelay?: number; 
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }
  public set bgwriterDelay(value: number) {
    this._bgwriterDelay = value;
  }
  public resetBgwriterDelay() {
    this._bgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterDelayInput() {
    return this._bgwriterDelay;
  }

  // bgwriter_flush_after - computed: true, optional: true, required: false
  private _bgwriterFlushAfter?: number; 
  public get bgwriterFlushAfter() {
    return this.getNumberAttribute('bgwriter_flush_after');
  }
  public set bgwriterFlushAfter(value: number) {
    this._bgwriterFlushAfter = value;
  }
  public resetBgwriterFlushAfter() {
    this._bgwriterFlushAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterFlushAfterInput() {
    return this._bgwriterFlushAfter;
  }

  // bgwriter_lru_maxpages - computed: true, optional: true, required: false
  private _bgwriterLruMaxpages?: number; 
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }
  public set bgwriterLruMaxpages(value: number) {
    this._bgwriterLruMaxpages = value;
  }
  public resetBgwriterLruMaxpages() {
    this._bgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMaxpagesInput() {
    return this._bgwriterLruMaxpages;
  }

  // bgwriter_lru_multiplier - computed: true, optional: true, required: false
  private _bgwriterLruMultiplier?: number; 
  public get bgwriterLruMultiplier() {
    return this.getNumberAttribute('bgwriter_lru_multiplier');
  }
  public set bgwriterLruMultiplier(value: number) {
    this._bgwriterLruMultiplier = value;
  }
  public resetBgwriterLruMultiplier() {
    this._bgwriterLruMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMultiplierInput() {
    return this._bgwriterLruMultiplier;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // deadlock_timeout - computed: true, optional: true, required: false
  private _deadlockTimeout?: number; 
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }
  public set deadlockTimeout(value: number) {
    this._deadlockTimeout = value;
  }
  public resetDeadlockTimeout() {
    this._deadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockTimeoutInput() {
    return this._deadlockTimeout;
  }

  // default_toast_compression - computed: true, optional: true, required: false
  private _defaultToastCompression?: string; 
  public get defaultToastCompression() {
    return this.getStringAttribute('default_toast_compression');
  }
  public set defaultToastCompression(value: string) {
    this._defaultToastCompression = value;
  }
  public resetDefaultToastCompression() {
    this._defaultToastCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultToastCompressionInput() {
    return this._defaultToastCompression;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
  }

  // jit - computed: true, optional: true, required: false
  private _jit?: boolean | cdktf.IResolvable; 
  public get jit() {
    return this.getBooleanAttribute('jit');
  }
  public set jit(value: boolean | cdktf.IResolvable) {
    this._jit = value;
  }
  public resetJit() {
    this._jit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitInput() {
    return this._jit;
  }

  // log_autovacuum_min_duration - computed: true, optional: true, required: false
  private _logAutovacuumMinDuration?: number; 
  public get logAutovacuumMinDuration() {
    return this.getNumberAttribute('log_autovacuum_min_duration');
  }
  public set logAutovacuumMinDuration(value: number) {
    this._logAutovacuumMinDuration = value;
  }
  public resetLogAutovacuumMinDuration() {
    this._logAutovacuumMinDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutovacuumMinDurationInput() {
    return this._logAutovacuumMinDuration;
  }

  // log_error_verbosity - computed: true, optional: true, required: false
  private _logErrorVerbosity?: string; 
  public get logErrorVerbosity() {
    return this.getStringAttribute('log_error_verbosity');
  }
  public set logErrorVerbosity(value: string) {
    this._logErrorVerbosity = value;
  }
  public resetLogErrorVerbosity() {
    this._logErrorVerbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logErrorVerbosityInput() {
    return this._logErrorVerbosity;
  }

  // log_line_prefix - computed: true, optional: true, required: false
  private _logLinePrefix?: string; 
  public get logLinePrefix() {
    return this.getStringAttribute('log_line_prefix');
  }
  public set logLinePrefix(value: string) {
    this._logLinePrefix = value;
  }
  public resetLogLinePrefix() {
    this._logLinePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinePrefixInput() {
    return this._logLinePrefix;
  }

  // log_min_duration_statement - computed: true, optional: true, required: false
  private _logMinDurationStatement?: number; 
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }
  public set logMinDurationStatement(value: number) {
    this._logMinDurationStatement = value;
  }
  public resetLogMinDurationStatement() {
    this._logMinDurationStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMinDurationStatementInput() {
    return this._logMinDurationStatement;
  }

  // max_files_per_process - computed: true, optional: true, required: false
  private _maxFilesPerProcess?: number; 
  public get maxFilesPerProcess() {
    return this.getNumberAttribute('max_files_per_process');
  }
  public set maxFilesPerProcess(value: number) {
    this._maxFilesPerProcess = value;
  }
  public resetMaxFilesPerProcess() {
    this._maxFilesPerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesPerProcessInput() {
    return this._maxFilesPerProcess;
  }

  // max_locks_per_transaction - computed: true, optional: true, required: false
  private _maxLocksPerTransaction?: number; 
  public get maxLocksPerTransaction() {
    return this.getNumberAttribute('max_locks_per_transaction');
  }
  public set maxLocksPerTransaction(value: number) {
    this._maxLocksPerTransaction = value;
  }
  public resetMaxLocksPerTransaction() {
    this._maxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocksPerTransactionInput() {
    return this._maxLocksPerTransaction;
  }

  // max_logical_replication_workers - computed: true, optional: true, required: false
  private _maxLogicalReplicationWorkers?: number; 
  public get maxLogicalReplicationWorkers() {
    return this.getNumberAttribute('max_logical_replication_workers');
  }
  public set maxLogicalReplicationWorkers(value: number) {
    this._maxLogicalReplicationWorkers = value;
  }
  public resetMaxLogicalReplicationWorkers() {
    this._maxLogicalReplicationWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogicalReplicationWorkersInput() {
    return this._maxLogicalReplicationWorkers;
  }

  // max_parallel_workers - computed: true, optional: true, required: false
  private _maxParallelWorkers?: number; 
  public get maxParallelWorkers() {
    return this.getNumberAttribute('max_parallel_workers');
  }
  public set maxParallelWorkers(value: number) {
    this._maxParallelWorkers = value;
  }
  public resetMaxParallelWorkers() {
    this._maxParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersInput() {
    return this._maxParallelWorkers;
  }

  // max_parallel_workers_per_gather - computed: true, optional: true, required: false
  private _maxParallelWorkersPerGather?: number; 
  public get maxParallelWorkersPerGather() {
    return this.getNumberAttribute('max_parallel_workers_per_gather');
  }
  public set maxParallelWorkersPerGather(value: number) {
    this._maxParallelWorkersPerGather = value;
  }
  public resetMaxParallelWorkersPerGather() {
    this._maxParallelWorkersPerGather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersPerGatherInput() {
    return this._maxParallelWorkersPerGather;
  }

  // max_pred_locks_per_transaction - computed: true, optional: true, required: false
  private _maxPredLocksPerTransaction?: number; 
  public get maxPredLocksPerTransaction() {
    return this.getNumberAttribute('max_pred_locks_per_transaction');
  }
  public set maxPredLocksPerTransaction(value: number) {
    this._maxPredLocksPerTransaction = value;
  }
  public resetMaxPredLocksPerTransaction() {
    this._maxPredLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPredLocksPerTransactionInput() {
    return this._maxPredLocksPerTransaction;
  }

  // max_prepared_transactions - computed: true, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_replication_slots - computed: true, optional: true, required: false
  private _maxReplicationSlots?: number; 
  public get maxReplicationSlots() {
    return this.getNumberAttribute('max_replication_slots');
  }
  public set maxReplicationSlots(value: number) {
    this._maxReplicationSlots = value;
  }
  public resetMaxReplicationSlots() {
    this._maxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicationSlotsInput() {
    return this._maxReplicationSlots;
  }

  // max_stack_depth - computed: true, optional: true, required: false
  private _maxStackDepth?: number; 
  public get maxStackDepth() {
    return this.getNumberAttribute('max_stack_depth');
  }
  public set maxStackDepth(value: number) {
    this._maxStackDepth = value;
  }
  public resetMaxStackDepth() {
    this._maxStackDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackDepthInput() {
    return this._maxStackDepth;
  }

  // max_standby_archive_delay - computed: true, optional: true, required: false
  private _maxStandbyArchiveDelay?: number; 
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }
  public set maxStandbyArchiveDelay(value: number) {
    this._maxStandbyArchiveDelay = value;
  }
  public resetMaxStandbyArchiveDelay() {
    this._maxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyArchiveDelayInput() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: true, optional: true, required: false
  private _maxStandbyStreamingDelay?: number; 
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }
  public set maxStandbyStreamingDelay(value: number) {
    this._maxStandbyStreamingDelay = value;
  }
  public resetMaxStandbyStreamingDelay() {
    this._maxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyStreamingDelayInput() {
    return this._maxStandbyStreamingDelay;
  }

  // max_wal_senders - computed: true, optional: true, required: false
  private _maxWalSenders?: number; 
  public get maxWalSenders() {
    return this.getNumberAttribute('max_wal_senders');
  }
  public set maxWalSenders(value: number) {
    this._maxWalSenders = value;
  }
  public resetMaxWalSenders() {
    this._maxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSendersInput() {
    return this._maxWalSenders;
  }

  // max_worker_processes - computed: true, optional: true, required: false
  private _maxWorkerProcesses?: number; 
  public get maxWorkerProcesses() {
    return this.getNumberAttribute('max_worker_processes');
  }
  public set maxWorkerProcesses(value: number) {
    this._maxWorkerProcesses = value;
  }
  public resetMaxWorkerProcesses() {
    this._maxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerProcessesInput() {
    return this._maxWorkerProcesses;
  }

  // pg_partman_bgw_interval - computed: true, optional: true, required: false
  private _pgPartmanBgwInterval?: number; 
  public get pgPartmanBgwInterval() {
    return this.getNumberAttribute('pg_partman_bgw_interval');
  }
  public set pgPartmanBgwInterval(value: number) {
    this._pgPartmanBgwInterval = value;
  }
  public resetPgPartmanBgwInterval() {
    this._pgPartmanBgwInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwIntervalInput() {
    return this._pgPartmanBgwInterval;
  }

  // pg_partman_bgw_role - computed: true, optional: true, required: false
  private _pgPartmanBgwRole?: string; 
  public get pgPartmanBgwRole() {
    return this.getStringAttribute('pg_partman_bgw_role');
  }
  public set pgPartmanBgwRole(value: string) {
    this._pgPartmanBgwRole = value;
  }
  public resetPgPartmanBgwRole() {
    this._pgPartmanBgwRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwRoleInput() {
    return this._pgPartmanBgwRole;
  }

  // pg_stat_statements_track - computed: true, optional: true, required: false
  private _pgStatStatementsTrack?: string; 
  public get pgStatStatementsTrack() {
    return this.getStringAttribute('pg_stat_statements_track');
  }
  public set pgStatStatementsTrack(value: string) {
    this._pgStatStatementsTrack = value;
  }
  public resetPgStatStatementsTrack() {
    this._pgStatStatementsTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatStatementsTrackInput() {
    return this._pgStatStatementsTrack;
  }

  // shared_buffers_percentage - computed: true, optional: true, required: false
  private _sharedBuffersPercentage?: number; 
  public get sharedBuffersPercentage() {
    return this.getNumberAttribute('shared_buffers_percentage');
  }
  public set sharedBuffersPercentage(value: number) {
    this._sharedBuffersPercentage = value;
  }
  public resetSharedBuffersPercentage() {
    this._sharedBuffersPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBuffersPercentageInput() {
    return this._sharedBuffersPercentage;
  }

  // temp_file_limit - computed: true, optional: true, required: false
  private _tempFileLimit?: number; 
  public get tempFileLimit() {
    return this.getNumberAttribute('temp_file_limit');
  }
  public set tempFileLimit(value: number) {
    this._tempFileLimit = value;
  }
  public resetTempFileLimit() {
    this._tempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempFileLimitInput() {
    return this._tempFileLimit;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // track_activity_query_size - computed: true, optional: true, required: false
  private _trackActivityQuerySize?: number; 
  public get trackActivityQuerySize() {
    return this.getNumberAttribute('track_activity_query_size');
  }
  public set trackActivityQuerySize(value: number) {
    this._trackActivityQuerySize = value;
  }
  public resetTrackActivityQuerySize() {
    this._trackActivityQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActivityQuerySizeInput() {
    return this._trackActivityQuerySize;
  }

  // track_commit_timestamp - computed: true, optional: true, required: false
  private _trackCommitTimestamp?: string; 
  public get trackCommitTimestamp() {
    return this.getStringAttribute('track_commit_timestamp');
  }
  public set trackCommitTimestamp(value: string) {
    this._trackCommitTimestamp = value;
  }
  public resetTrackCommitTimestamp() {
    this._trackCommitTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackCommitTimestampInput() {
    return this._trackCommitTimestamp;
  }

  // track_functions - computed: true, optional: true, required: false
  private _trackFunctions?: string; 
  public get trackFunctions() {
    return this.getStringAttribute('track_functions');
  }
  public set trackFunctions(value: string) {
    this._trackFunctions = value;
  }
  public resetTrackFunctions() {
    this._trackFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackFunctionsInput() {
    return this._trackFunctions;
  }

  // track_io_timing - computed: true, optional: true, required: false
  private _trackIoTiming?: string; 
  public get trackIoTiming() {
    return this.getStringAttribute('track_io_timing');
  }
  public set trackIoTiming(value: string) {
    this._trackIoTiming = value;
  }
  public resetTrackIoTiming() {
    this._trackIoTiming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIoTimingInput() {
    return this._trackIoTiming;
  }

  // wal_sender_timeout - computed: true, optional: true, required: false
  private _walSenderTimeout?: number; 
  public get walSenderTimeout() {
    return this.getNumberAttribute('wal_sender_timeout');
  }
  public set walSenderTimeout(value: number) {
    this._walSenderTimeout = value;
  }
  public resetWalSenderTimeout() {
    this._walSenderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walSenderTimeoutInput() {
    return this._walSenderTimeout;
  }

  // wal_writer_delay - computed: true, optional: true, required: false
  private _walWriterDelay?: number; 
  public get walWriterDelay() {
    return this.getNumberAttribute('wal_writer_delay');
  }
  public set walWriterDelay(value: number) {
    this._walWriterDelay = value;
  }
  public resetWalWriterDelay() {
    this._walWriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walWriterDelayInput() {
    return this._walWriterDelay;
  }

  // work_mem - computed: true, optional: true, required: false
  private _workMem?: number; 
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
  public set workMem(value: number) {
    this._workMem = value;
  }
  public resetWorkMem() {
    this._workMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workMemInput() {
    return this._workMem;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer = new DatabasePostgresqlConfigPgbouncerList(this, "pgbouncer", false);
  public get pgbouncer() {
    return this._pgbouncer;
  }
  public putPgbouncer(value: DatabasePostgresqlConfigPgbouncer[] | cdktf.IResolvable) {
    this._pgbouncer.internalValue = value;
  }
  public resetPgbouncer() {
    this._pgbouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new DatabasePostgresqlConfigTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: DatabasePostgresqlConfigTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autovacuum_analyze_scale_factor: cdktf.numberToTerraform(this._autovacuumAnalyzeScaleFactor),
      autovacuum_analyze_threshold: cdktf.numberToTerraform(this._autovacuumAnalyzeThreshold),
      autovacuum_freeze_max_age: cdktf.numberToTerraform(this._autovacuumFreezeMaxAge),
      autovacuum_max_workers: cdktf.numberToTerraform(this._autovacuumMaxWorkers),
      autovacuum_naptime: cdktf.numberToTerraform(this._autovacuumNaptime),
      autovacuum_vacuum_cost_delay: cdktf.numberToTerraform(this._autovacuumVacuumCostDelay),
      autovacuum_vacuum_cost_limit: cdktf.numberToTerraform(this._autovacuumVacuumCostLimit),
      autovacuum_vacuum_scale_factor: cdktf.numberToTerraform(this._autovacuumVacuumScaleFactor),
      autovacuum_vacuum_threshold: cdktf.numberToTerraform(this._autovacuumVacuumThreshold),
      backup_hour: cdktf.numberToTerraform(this._backupHour),
      backup_minute: cdktf.numberToTerraform(this._backupMinute),
      bgwriter_delay: cdktf.numberToTerraform(this._bgwriterDelay),
      bgwriter_flush_after: cdktf.numberToTerraform(this._bgwriterFlushAfter),
      bgwriter_lru_maxpages: cdktf.numberToTerraform(this._bgwriterLruMaxpages),
      bgwriter_lru_multiplier: cdktf.numberToTerraform(this._bgwriterLruMultiplier),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deadlock_timeout: cdktf.numberToTerraform(this._deadlockTimeout),
      default_toast_compression: cdktf.stringToTerraform(this._defaultToastCompression),
      id: cdktf.stringToTerraform(this._id),
      idle_in_transaction_session_timeout: cdktf.numberToTerraform(this._idleInTransactionSessionTimeout),
      jit: cdktf.booleanToTerraform(this._jit),
      log_autovacuum_min_duration: cdktf.numberToTerraform(this._logAutovacuumMinDuration),
      log_error_verbosity: cdktf.stringToTerraform(this._logErrorVerbosity),
      log_line_prefix: cdktf.stringToTerraform(this._logLinePrefix),
      log_min_duration_statement: cdktf.numberToTerraform(this._logMinDurationStatement),
      max_files_per_process: cdktf.numberToTerraform(this._maxFilesPerProcess),
      max_locks_per_transaction: cdktf.numberToTerraform(this._maxLocksPerTransaction),
      max_logical_replication_workers: cdktf.numberToTerraform(this._maxLogicalReplicationWorkers),
      max_parallel_workers: cdktf.numberToTerraform(this._maxParallelWorkers),
      max_parallel_workers_per_gather: cdktf.numberToTerraform(this._maxParallelWorkersPerGather),
      max_pred_locks_per_transaction: cdktf.numberToTerraform(this._maxPredLocksPerTransaction),
      max_prepared_transactions: cdktf.numberToTerraform(this._maxPreparedTransactions),
      max_replication_slots: cdktf.numberToTerraform(this._maxReplicationSlots),
      max_stack_depth: cdktf.numberToTerraform(this._maxStackDepth),
      max_standby_archive_delay: cdktf.numberToTerraform(this._maxStandbyArchiveDelay),
      max_standby_streaming_delay: cdktf.numberToTerraform(this._maxStandbyStreamingDelay),
      max_wal_senders: cdktf.numberToTerraform(this._maxWalSenders),
      max_worker_processes: cdktf.numberToTerraform(this._maxWorkerProcesses),
      pg_partman_bgw_interval: cdktf.numberToTerraform(this._pgPartmanBgwInterval),
      pg_partman_bgw_role: cdktf.stringToTerraform(this._pgPartmanBgwRole),
      pg_stat_statements_track: cdktf.stringToTerraform(this._pgStatStatementsTrack),
      shared_buffers_percentage: cdktf.numberToTerraform(this._sharedBuffersPercentage),
      temp_file_limit: cdktf.numberToTerraform(this._tempFileLimit),
      timezone: cdktf.stringToTerraform(this._timezone),
      track_activity_query_size: cdktf.numberToTerraform(this._trackActivityQuerySize),
      track_commit_timestamp: cdktf.stringToTerraform(this._trackCommitTimestamp),
      track_functions: cdktf.stringToTerraform(this._trackFunctions),
      track_io_timing: cdktf.stringToTerraform(this._trackIoTiming),
      wal_sender_timeout: cdktf.numberToTerraform(this._walSenderTimeout),
      wal_writer_delay: cdktf.numberToTerraform(this._walWriterDelay),
      work_mem: cdktf.numberToTerraform(this._workMem),
      pgbouncer: cdktf.listMapper(databasePostgresqlConfigPgbouncerToTerraform, true)(this._pgbouncer.internalValue),
      timescaledb: databasePostgresqlConfigTimescaledbToTerraform(this._timescaledb.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autovacuum_analyze_scale_factor: {
        value: cdktf.numberToHclTerraform(this._autovacuumAnalyzeScaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_analyze_threshold: {
        value: cdktf.numberToHclTerraform(this._autovacuumAnalyzeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_freeze_max_age: {
        value: cdktf.numberToHclTerraform(this._autovacuumFreezeMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_max_workers: {
        value: cdktf.numberToHclTerraform(this._autovacuumMaxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_naptime: {
        value: cdktf.numberToHclTerraform(this._autovacuumNaptime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_vacuum_cost_delay: {
        value: cdktf.numberToHclTerraform(this._autovacuumVacuumCostDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_vacuum_cost_limit: {
        value: cdktf.numberToHclTerraform(this._autovacuumVacuumCostLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_vacuum_scale_factor: {
        value: cdktf.numberToHclTerraform(this._autovacuumVacuumScaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autovacuum_vacuum_threshold: {
        value: cdktf.numberToHclTerraform(this._autovacuumVacuumThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_hour: {
        value: cdktf.numberToHclTerraform(this._backupHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_minute: {
        value: cdktf.numberToHclTerraform(this._backupMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_delay: {
        value: cdktf.numberToHclTerraform(this._bgwriterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_flush_after: {
        value: cdktf.numberToHclTerraform(this._bgwriterFlushAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_lru_maxpages: {
        value: cdktf.numberToHclTerraform(this._bgwriterLruMaxpages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_lru_multiplier: {
        value: cdktf.numberToHclTerraform(this._bgwriterLruMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deadlock_timeout: {
        value: cdktf.numberToHclTerraform(this._deadlockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_toast_compression: {
        value: cdktf.stringToHclTerraform(this._defaultToastCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_in_transaction_session_timeout: {
        value: cdktf.numberToHclTerraform(this._idleInTransactionSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jit: {
        value: cdktf.booleanToHclTerraform(this._jit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_autovacuum_min_duration: {
        value: cdktf.numberToHclTerraform(this._logAutovacuumMinDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_error_verbosity: {
        value: cdktf.stringToHclTerraform(this._logErrorVerbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_line_prefix: {
        value: cdktf.stringToHclTerraform(this._logLinePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_min_duration_statement: {
        value: cdktf.numberToHclTerraform(this._logMinDurationStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_files_per_process: {
        value: cdktf.numberToHclTerraform(this._maxFilesPerProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_locks_per_transaction: {
        value: cdktf.numberToHclTerraform(this._maxLocksPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_logical_replication_workers: {
        value: cdktf.numberToHclTerraform(this._maxLogicalReplicationWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_parallel_workers: {
        value: cdktf.numberToHclTerraform(this._maxParallelWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_parallel_workers_per_gather: {
        value: cdktf.numberToHclTerraform(this._maxParallelWorkersPerGather),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_pred_locks_per_transaction: {
        value: cdktf.numberToHclTerraform(this._maxPredLocksPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_prepared_transactions: {
        value: cdktf.numberToHclTerraform(this._maxPreparedTransactions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_replication_slots: {
        value: cdktf.numberToHclTerraform(this._maxReplicationSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_stack_depth: {
        value: cdktf.numberToHclTerraform(this._maxStackDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_standby_archive_delay: {
        value: cdktf.numberToHclTerraform(this._maxStandbyArchiveDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_standby_streaming_delay: {
        value: cdktf.numberToHclTerraform(this._maxStandbyStreamingDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_wal_senders: {
        value: cdktf.numberToHclTerraform(this._maxWalSenders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_worker_processes: {
        value: cdktf.numberToHclTerraform(this._maxWorkerProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pg_partman_bgw_interval: {
        value: cdktf.numberToHclTerraform(this._pgPartmanBgwInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pg_partman_bgw_role: {
        value: cdktf.stringToHclTerraform(this._pgPartmanBgwRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pg_stat_statements_track: {
        value: cdktf.stringToHclTerraform(this._pgStatStatementsTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_buffers_percentage: {
        value: cdktf.numberToHclTerraform(this._sharedBuffersPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      temp_file_limit: {
        value: cdktf.numberToHclTerraform(this._tempFileLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_activity_query_size: {
        value: cdktf.numberToHclTerraform(this._trackActivityQuerySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_commit_timestamp: {
        value: cdktf.stringToHclTerraform(this._trackCommitTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_functions: {
        value: cdktf.stringToHclTerraform(this._trackFunctions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_io_timing: {
        value: cdktf.stringToHclTerraform(this._trackIoTiming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wal_sender_timeout: {
        value: cdktf.numberToHclTerraform(this._walSenderTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wal_writer_delay: {
        value: cdktf.numberToHclTerraform(this._walWriterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      work_mem: {
        value: cdktf.numberToHclTerraform(this._workMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pgbouncer: {
        value: cdktf.listMapperHcl(databasePostgresqlConfigPgbouncerToHclTerraform, true)(this._pgbouncer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabasePostgresqlConfigPgbouncerList",
      },
      timescaledb: {
        value: databasePostgresqlConfigTimescaledbToHclTerraform(this._timescaledb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabasePostgresqlConfigTimescaledbList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
