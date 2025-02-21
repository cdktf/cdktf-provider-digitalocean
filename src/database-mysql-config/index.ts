/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMysqlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}
  */
  readonly binlogRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}
  */
  readonly groupConcatMaxLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}
  */
  readonly informationSchemaStatsExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}
  */
  readonly innodbFtMinTokenSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}
  */
  readonly innodbFtServerStopwordTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}
  */
  readonly innodbLockWaitTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}
  */
  readonly innodbLogBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}
  */
  readonly innodbOnlineAlterLogMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}
  */
  readonly innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}
  */
  readonly innodbRollbackOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}
  */
  readonly interactiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}
  */
  readonly internalTmpMemStorageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}
  */
  readonly longQueryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}
  */
  readonly maxAllowedPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}
  */
  readonly maxHeapTableSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}
  */
  readonly netReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}
  */
  readonly netWriteTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}
  */
  readonly slowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}
  */
  readonly sortBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}
  */
  readonly sqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}
  */
  readonly tmpTableSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}
  */
  readonly waitTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config digitalocean_database_mysql_config}
*/
export class DatabaseMysqlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_mysql_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMysqlConfig to import
  * @param importFromId The id of the existing DatabaseMysqlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMysqlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_mysql_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/resources/database_mysql_config digitalocean_database_mysql_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMysqlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMysqlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_mysql_config',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.49.0',
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
    this._backupHour = config.backupHour;
    this._backupMinute = config.backupMinute;
    this._binlogRetentionPeriod = config.binlogRetentionPeriod;
    this._clusterId = config.clusterId;
    this._connectTimeout = config.connectTimeout;
    this._defaultTimeZone = config.defaultTimeZone;
    this._groupConcatMaxLen = config.groupConcatMaxLen;
    this._id = config.id;
    this._informationSchemaStatsExpiry = config.informationSchemaStatsExpiry;
    this._innodbFtMinTokenSize = config.innodbFtMinTokenSize;
    this._innodbFtServerStopwordTable = config.innodbFtServerStopwordTable;
    this._innodbLockWaitTimeout = config.innodbLockWaitTimeout;
    this._innodbLogBufferSize = config.innodbLogBufferSize;
    this._innodbOnlineAlterLogMaxSize = config.innodbOnlineAlterLogMaxSize;
    this._innodbPrintAllDeadlocks = config.innodbPrintAllDeadlocks;
    this._innodbRollbackOnTimeout = config.innodbRollbackOnTimeout;
    this._interactiveTimeout = config.interactiveTimeout;
    this._internalTmpMemStorageEngine = config.internalTmpMemStorageEngine;
    this._longQueryTime = config.longQueryTime;
    this._maxAllowedPacket = config.maxAllowedPacket;
    this._maxHeapTableSize = config.maxHeapTableSize;
    this._netReadTimeout = config.netReadTimeout;
    this._netWriteTimeout = config.netWriteTimeout;
    this._slowQueryLog = config.slowQueryLog;
    this._sortBufferSize = config.sortBufferSize;
    this._sqlMode = config.sqlMode;
    this._sqlRequirePrimaryKey = config.sqlRequirePrimaryKey;
    this._tmpTableSize = config.tmpTableSize;
    this._waitTimeout = config.waitTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // binlog_retention_period - computed: true, optional: true, required: false
  private _binlogRetentionPeriod?: number; 
  public get binlogRetentionPeriod() {
    return this.getNumberAttribute('binlog_retention_period');
  }
  public set binlogRetentionPeriod(value: number) {
    this._binlogRetentionPeriod = value;
  }
  public resetBinlogRetentionPeriod() {
    this._binlogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRetentionPeriodInput() {
    return this._binlogRetentionPeriod;
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

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_time_zone - computed: true, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // group_concat_max_len - computed: true, optional: true, required: false
  private _groupConcatMaxLen?: number; 
  public get groupConcatMaxLen() {
    return this.getNumberAttribute('group_concat_max_len');
  }
  public set groupConcatMaxLen(value: number) {
    this._groupConcatMaxLen = value;
  }
  public resetGroupConcatMaxLen() {
    this._groupConcatMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConcatMaxLenInput() {
    return this._groupConcatMaxLen;
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

  // information_schema_stats_expiry - computed: true, optional: true, required: false
  private _informationSchemaStatsExpiry?: number; 
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }
  public set informationSchemaStatsExpiry(value: number) {
    this._informationSchemaStatsExpiry = value;
  }
  public resetInformationSchemaStatsExpiry() {
    this._informationSchemaStatsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationSchemaStatsExpiryInput() {
    return this._informationSchemaStatsExpiry;
  }

  // innodb_ft_min_token_size - computed: true, optional: true, required: false
  private _innodbFtMinTokenSize?: number; 
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }
  public set innodbFtMinTokenSize(value: number) {
    this._innodbFtMinTokenSize = value;
  }
  public resetInnodbFtMinTokenSize() {
    this._innodbFtMinTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtMinTokenSizeInput() {
    return this._innodbFtMinTokenSize;
  }

  // innodb_ft_server_stopword_table - computed: true, optional: true, required: false
  private _innodbFtServerStopwordTable?: string; 
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }
  public set innodbFtServerStopwordTable(value: string) {
    this._innodbFtServerStopwordTable = value;
  }
  public resetInnodbFtServerStopwordTable() {
    this._innodbFtServerStopwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtServerStopwordTableInput() {
    return this._innodbFtServerStopwordTable;
  }

  // innodb_lock_wait_timeout - computed: true, optional: true, required: false
  private _innodbLockWaitTimeout?: number; 
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }
  public set innodbLockWaitTimeout(value: number) {
    this._innodbLockWaitTimeout = value;
  }
  public resetInnodbLockWaitTimeout() {
    this._innodbLockWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLockWaitTimeoutInput() {
    return this._innodbLockWaitTimeout;
  }

  // innodb_log_buffer_size - computed: true, optional: true, required: false
  private _innodbLogBufferSize?: number; 
  public get innodbLogBufferSize() {
    return this.getNumberAttribute('innodb_log_buffer_size');
  }
  public set innodbLogBufferSize(value: number) {
    this._innodbLogBufferSize = value;
  }
  public resetInnodbLogBufferSize() {
    this._innodbLogBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLogBufferSizeInput() {
    return this._innodbLogBufferSize;
  }

  // innodb_online_alter_log_max_size - computed: true, optional: true, required: false
  private _innodbOnlineAlterLogMaxSize?: number; 
  public get innodbOnlineAlterLogMaxSize() {
    return this.getNumberAttribute('innodb_online_alter_log_max_size');
  }
  public set innodbOnlineAlterLogMaxSize(value: number) {
    this._innodbOnlineAlterLogMaxSize = value;
  }
  public resetInnodbOnlineAlterLogMaxSize() {
    this._innodbOnlineAlterLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbOnlineAlterLogMaxSizeInput() {
    return this._innodbOnlineAlterLogMaxSize;
  }

  // innodb_print_all_deadlocks - computed: true, optional: true, required: false
  private _innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable; 
  public get innodbPrintAllDeadlocks() {
    return this.getBooleanAttribute('innodb_print_all_deadlocks');
  }
  public set innodbPrintAllDeadlocks(value: boolean | cdktf.IResolvable) {
    this._innodbPrintAllDeadlocks = value;
  }
  public resetInnodbPrintAllDeadlocks() {
    this._innodbPrintAllDeadlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbPrintAllDeadlocksInput() {
    return this._innodbPrintAllDeadlocks;
  }

  // innodb_rollback_on_timeout - computed: true, optional: true, required: false
  private _innodbRollbackOnTimeout?: boolean | cdktf.IResolvable; 
  public get innodbRollbackOnTimeout() {
    return this.getBooleanAttribute('innodb_rollback_on_timeout');
  }
  public set innodbRollbackOnTimeout(value: boolean | cdktf.IResolvable) {
    this._innodbRollbackOnTimeout = value;
  }
  public resetInnodbRollbackOnTimeout() {
    this._innodbRollbackOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbRollbackOnTimeoutInput() {
    return this._innodbRollbackOnTimeout;
  }

  // interactive_timeout - computed: true, optional: true, required: false
  private _interactiveTimeout?: number; 
  public get interactiveTimeout() {
    return this.getNumberAttribute('interactive_timeout');
  }
  public set interactiveTimeout(value: number) {
    this._interactiveTimeout = value;
  }
  public resetInteractiveTimeout() {
    this._interactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveTimeoutInput() {
    return this._interactiveTimeout;
  }

  // internal_tmp_mem_storage_engine - computed: true, optional: true, required: false
  private _internalTmpMemStorageEngine?: string; 
  public get internalTmpMemStorageEngine() {
    return this.getStringAttribute('internal_tmp_mem_storage_engine');
  }
  public set internalTmpMemStorageEngine(value: string) {
    this._internalTmpMemStorageEngine = value;
  }
  public resetInternalTmpMemStorageEngine() {
    this._internalTmpMemStorageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTmpMemStorageEngineInput() {
    return this._internalTmpMemStorageEngine;
  }

  // long_query_time - computed: true, optional: true, required: false
  private _longQueryTime?: number; 
  public get longQueryTime() {
    return this.getNumberAttribute('long_query_time');
  }
  public set longQueryTime(value: number) {
    this._longQueryTime = value;
  }
  public resetLongQueryTime() {
    this._longQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longQueryTimeInput() {
    return this._longQueryTime;
  }

  // max_allowed_packet - computed: true, optional: true, required: false
  private _maxAllowedPacket?: number; 
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }
  public set maxAllowedPacket(value: number) {
    this._maxAllowedPacket = value;
  }
  public resetMaxAllowedPacket() {
    this._maxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedPacketInput() {
    return this._maxAllowedPacket;
  }

  // max_heap_table_size - computed: true, optional: true, required: false
  private _maxHeapTableSize?: number; 
  public get maxHeapTableSize() {
    return this.getNumberAttribute('max_heap_table_size');
  }
  public set maxHeapTableSize(value: number) {
    this._maxHeapTableSize = value;
  }
  public resetMaxHeapTableSize() {
    this._maxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapTableSizeInput() {
    return this._maxHeapTableSize;
  }

  // net_read_timeout - computed: true, optional: true, required: false
  private _netReadTimeout?: number; 
  public get netReadTimeout() {
    return this.getNumberAttribute('net_read_timeout');
  }
  public set netReadTimeout(value: number) {
    this._netReadTimeout = value;
  }
  public resetNetReadTimeout() {
    this._netReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netReadTimeoutInput() {
    return this._netReadTimeout;
  }

  // net_write_timeout - computed: true, optional: true, required: false
  private _netWriteTimeout?: number; 
  public get netWriteTimeout() {
    return this.getNumberAttribute('net_write_timeout');
  }
  public set netWriteTimeout(value: number) {
    this._netWriteTimeout = value;
  }
  public resetNetWriteTimeout() {
    this._netWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWriteTimeoutInput() {
    return this._netWriteTimeout;
  }

  // slow_query_log - computed: true, optional: true, required: false
  private _slowQueryLog?: boolean | cdktf.IResolvable; 
  public get slowQueryLog() {
    return this.getBooleanAttribute('slow_query_log');
  }
  public set slowQueryLog(value: boolean | cdktf.IResolvable) {
    this._slowQueryLog = value;
  }
  public resetSlowQueryLog() {
    this._slowQueryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowQueryLogInput() {
    return this._slowQueryLog;
  }

  // sort_buffer_size - computed: true, optional: true, required: false
  private _sortBufferSize?: number; 
  public get sortBufferSize() {
    return this.getNumberAttribute('sort_buffer_size');
  }
  public set sortBufferSize(value: number) {
    this._sortBufferSize = value;
  }
  public resetSortBufferSize() {
    this._sortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortBufferSizeInput() {
    return this._sortBufferSize;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
  }

  // sql_require_primary_key - computed: true, optional: true, required: false
  private _sqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }
  public set sqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._sqlRequirePrimaryKey = value;
  }
  public resetSqlRequirePrimaryKey() {
    this._sqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRequirePrimaryKeyInput() {
    return this._sqlRequirePrimaryKey;
  }

  // tmp_table_size - computed: true, optional: true, required: false
  private _tmpTableSize?: number; 
  public get tmpTableSize() {
    return this.getNumberAttribute('tmp_table_size');
  }
  public set tmpTableSize(value: number) {
    this._tmpTableSize = value;
  }
  public resetTmpTableSize() {
    this._tmpTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTableSizeInput() {
    return this._tmpTableSize;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_hour: cdktf.numberToTerraform(this._backupHour),
      backup_minute: cdktf.numberToTerraform(this._backupMinute),
      binlog_retention_period: cdktf.numberToTerraform(this._binlogRetentionPeriod),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      default_time_zone: cdktf.stringToTerraform(this._defaultTimeZone),
      group_concat_max_len: cdktf.numberToTerraform(this._groupConcatMaxLen),
      id: cdktf.stringToTerraform(this._id),
      information_schema_stats_expiry: cdktf.numberToTerraform(this._informationSchemaStatsExpiry),
      innodb_ft_min_token_size: cdktf.numberToTerraform(this._innodbFtMinTokenSize),
      innodb_ft_server_stopword_table: cdktf.stringToTerraform(this._innodbFtServerStopwordTable),
      innodb_lock_wait_timeout: cdktf.numberToTerraform(this._innodbLockWaitTimeout),
      innodb_log_buffer_size: cdktf.numberToTerraform(this._innodbLogBufferSize),
      innodb_online_alter_log_max_size: cdktf.numberToTerraform(this._innodbOnlineAlterLogMaxSize),
      innodb_print_all_deadlocks: cdktf.booleanToTerraform(this._innodbPrintAllDeadlocks),
      innodb_rollback_on_timeout: cdktf.booleanToTerraform(this._innodbRollbackOnTimeout),
      interactive_timeout: cdktf.numberToTerraform(this._interactiveTimeout),
      internal_tmp_mem_storage_engine: cdktf.stringToTerraform(this._internalTmpMemStorageEngine),
      long_query_time: cdktf.numberToTerraform(this._longQueryTime),
      max_allowed_packet: cdktf.numberToTerraform(this._maxAllowedPacket),
      max_heap_table_size: cdktf.numberToTerraform(this._maxHeapTableSize),
      net_read_timeout: cdktf.numberToTerraform(this._netReadTimeout),
      net_write_timeout: cdktf.numberToTerraform(this._netWriteTimeout),
      slow_query_log: cdktf.booleanToTerraform(this._slowQueryLog),
      sort_buffer_size: cdktf.numberToTerraform(this._sortBufferSize),
      sql_mode: cdktf.stringToTerraform(this._sqlMode),
      sql_require_primary_key: cdktf.booleanToTerraform(this._sqlRequirePrimaryKey),
      tmp_table_size: cdktf.numberToTerraform(this._tmpTableSize),
      wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      binlog_retention_period: {
        value: cdktf.numberToHclTerraform(this._binlogRetentionPeriod),
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
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_time_zone: {
        value: cdktf.stringToHclTerraform(this._defaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_concat_max_len: {
        value: cdktf.numberToHclTerraform(this._groupConcatMaxLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      information_schema_stats_expiry: {
        value: cdktf.numberToHclTerraform(this._informationSchemaStatsExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_ft_min_token_size: {
        value: cdktf.numberToHclTerraform(this._innodbFtMinTokenSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_ft_server_stopword_table: {
        value: cdktf.stringToHclTerraform(this._innodbFtServerStopwordTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      innodb_lock_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._innodbLockWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_log_buffer_size: {
        value: cdktf.numberToHclTerraform(this._innodbLogBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_online_alter_log_max_size: {
        value: cdktf.numberToHclTerraform(this._innodbOnlineAlterLogMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_print_all_deadlocks: {
        value: cdktf.booleanToHclTerraform(this._innodbPrintAllDeadlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      innodb_rollback_on_timeout: {
        value: cdktf.booleanToHclTerraform(this._innodbRollbackOnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interactive_timeout: {
        value: cdktf.numberToHclTerraform(this._interactiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_tmp_mem_storage_engine: {
        value: cdktf.stringToHclTerraform(this._internalTmpMemStorageEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_query_time: {
        value: cdktf.numberToHclTerraform(this._longQueryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_allowed_packet: {
        value: cdktf.numberToHclTerraform(this._maxAllowedPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_heap_table_size: {
        value: cdktf.numberToHclTerraform(this._maxHeapTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      net_read_timeout: {
        value: cdktf.numberToHclTerraform(this._netReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      net_write_timeout: {
        value: cdktf.numberToHclTerraform(this._netWriteTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slow_query_log: {
        value: cdktf.booleanToHclTerraform(this._slowQueryLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sort_buffer_size: {
        value: cdktf.numberToHclTerraform(this._sortBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_mode: {
        value: cdktf.stringToHclTerraform(this._sqlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_require_primary_key: {
        value: cdktf.booleanToHclTerraform(this._sqlRequirePrimaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tmp_table_size: {
        value: cdktf.numberToHclTerraform(this._tmpTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_timeout: {
        value: cdktf.numberToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
