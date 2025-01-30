/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseKafkaConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}
  */
  readonly groupInitialRebalanceDelayMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}
  */
  readonly groupMaxSessionTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}
  */
  readonly groupMinSessionTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}
  */
  readonly logCleanerDeleteRetentionMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}
  */
  readonly logCleanerMinCompactionLagMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}
  */
  readonly logFlushIntervalMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}
  */
  readonly logIndexIntervalBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}
  */
  readonly logMessageDownconversionEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}
  */
  readonly logMessageTimestampDifferenceMaxMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}
  */
  readonly logPreallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}
  */
  readonly logRetentionBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}
  */
  readonly logRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}
  */
  readonly logRetentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}
  */
  readonly logRollJitterMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}
  */
  readonly logSegmentDeleteDelayMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config digitalocean_database_kafka_config}
*/
export class DatabaseKafkaConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_kafka_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseKafkaConfig to import
  * @param importFromId The id of the existing DatabaseKafkaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseKafkaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_kafka_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/database_kafka_config digitalocean_database_kafka_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseKafkaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseKafkaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_kafka_config',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.48.1',
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
    this._autoCreateTopicsEnable = config.autoCreateTopicsEnable;
    this._clusterId = config.clusterId;
    this._groupInitialRebalanceDelayMs = config.groupInitialRebalanceDelayMs;
    this._groupMaxSessionTimeoutMs = config.groupMaxSessionTimeoutMs;
    this._groupMinSessionTimeoutMs = config.groupMinSessionTimeoutMs;
    this._id = config.id;
    this._logCleanerDeleteRetentionMs = config.logCleanerDeleteRetentionMs;
    this._logCleanerMinCompactionLagMs = config.logCleanerMinCompactionLagMs;
    this._logFlushIntervalMs = config.logFlushIntervalMs;
    this._logIndexIntervalBytes = config.logIndexIntervalBytes;
    this._logMessageDownconversionEnable = config.logMessageDownconversionEnable;
    this._logMessageTimestampDifferenceMaxMs = config.logMessageTimestampDifferenceMaxMs;
    this._logPreallocate = config.logPreallocate;
    this._logRetentionBytes = config.logRetentionBytes;
    this._logRetentionHours = config.logRetentionHours;
    this._logRetentionMs = config.logRetentionMs;
    this._logRollJitterMs = config.logRollJitterMs;
    this._logSegmentDeleteDelayMs = config.logSegmentDeleteDelayMs;
    this._messageMaxBytes = config.messageMaxBytes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_topics_enable - computed: true, optional: true, required: false
  private _autoCreateTopicsEnable?: boolean | cdktf.IResolvable; 
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }
  public set autoCreateTopicsEnable(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopicsEnable = value;
  }
  public resetAutoCreateTopicsEnable() {
    this._autoCreateTopicsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsEnableInput() {
    return this._autoCreateTopicsEnable;
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

  // group_initial_rebalance_delay_ms - computed: true, optional: true, required: false
  private _groupInitialRebalanceDelayMs?: number; 
  public get groupInitialRebalanceDelayMs() {
    return this.getNumberAttribute('group_initial_rebalance_delay_ms');
  }
  public set groupInitialRebalanceDelayMs(value: number) {
    this._groupInitialRebalanceDelayMs = value;
  }
  public resetGroupInitialRebalanceDelayMs() {
    this._groupInitialRebalanceDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInitialRebalanceDelayMsInput() {
    return this._groupInitialRebalanceDelayMs;
  }

  // group_max_session_timeout_ms - computed: true, optional: true, required: false
  private _groupMaxSessionTimeoutMs?: number; 
  public get groupMaxSessionTimeoutMs() {
    return this.getNumberAttribute('group_max_session_timeout_ms');
  }
  public set groupMaxSessionTimeoutMs(value: number) {
    this._groupMaxSessionTimeoutMs = value;
  }
  public resetGroupMaxSessionTimeoutMs() {
    this._groupMaxSessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMaxSessionTimeoutMsInput() {
    return this._groupMaxSessionTimeoutMs;
  }

  // group_min_session_timeout_ms - computed: true, optional: true, required: false
  private _groupMinSessionTimeoutMs?: number; 
  public get groupMinSessionTimeoutMs() {
    return this.getNumberAttribute('group_min_session_timeout_ms');
  }
  public set groupMinSessionTimeoutMs(value: number) {
    this._groupMinSessionTimeoutMs = value;
  }
  public resetGroupMinSessionTimeoutMs() {
    this._groupMinSessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMinSessionTimeoutMsInput() {
    return this._groupMinSessionTimeoutMs;
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

  // log_cleaner_delete_retention_ms - computed: true, optional: true, required: false
  private _logCleanerDeleteRetentionMs?: number; 
  public get logCleanerDeleteRetentionMs() {
    return this.getNumberAttribute('log_cleaner_delete_retention_ms');
  }
  public set logCleanerDeleteRetentionMs(value: number) {
    this._logCleanerDeleteRetentionMs = value;
  }
  public resetLogCleanerDeleteRetentionMs() {
    this._logCleanerDeleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerDeleteRetentionMsInput() {
    return this._logCleanerDeleteRetentionMs;
  }

  // log_cleaner_min_compaction_lag_ms - computed: true, optional: true, required: false
  private _logCleanerMinCompactionLagMs?: string; 
  public get logCleanerMinCompactionLagMs() {
    return this.getStringAttribute('log_cleaner_min_compaction_lag_ms');
  }
  public set logCleanerMinCompactionLagMs(value: string) {
    this._logCleanerMinCompactionLagMs = value;
  }
  public resetLogCleanerMinCompactionLagMs() {
    this._logCleanerMinCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCleanerMinCompactionLagMsInput() {
    return this._logCleanerMinCompactionLagMs;
  }

  // log_flush_interval_ms - computed: true, optional: true, required: false
  private _logFlushIntervalMs?: string; 
  public get logFlushIntervalMs() {
    return this.getStringAttribute('log_flush_interval_ms');
  }
  public set logFlushIntervalMs(value: string) {
    this._logFlushIntervalMs = value;
  }
  public resetLogFlushIntervalMs() {
    this._logFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFlushIntervalMsInput() {
    return this._logFlushIntervalMs;
  }

  // log_index_interval_bytes - computed: true, optional: true, required: false
  private _logIndexIntervalBytes?: number; 
  public get logIndexIntervalBytes() {
    return this.getNumberAttribute('log_index_interval_bytes');
  }
  public set logIndexIntervalBytes(value: number) {
    this._logIndexIntervalBytes = value;
  }
  public resetLogIndexIntervalBytes() {
    this._logIndexIntervalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIndexIntervalBytesInput() {
    return this._logIndexIntervalBytes;
  }

  // log_message_downconversion_enable - computed: true, optional: true, required: false
  private _logMessageDownconversionEnable?: boolean | cdktf.IResolvable; 
  public get logMessageDownconversionEnable() {
    return this.getBooleanAttribute('log_message_downconversion_enable');
  }
  public set logMessageDownconversionEnable(value: boolean | cdktf.IResolvable) {
    this._logMessageDownconversionEnable = value;
  }
  public resetLogMessageDownconversionEnable() {
    this._logMessageDownconversionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageDownconversionEnableInput() {
    return this._logMessageDownconversionEnable;
  }

  // log_message_timestamp_difference_max_ms - computed: true, optional: true, required: false
  private _logMessageTimestampDifferenceMaxMs?: string; 
  public get logMessageTimestampDifferenceMaxMs() {
    return this.getStringAttribute('log_message_timestamp_difference_max_ms');
  }
  public set logMessageTimestampDifferenceMaxMs(value: string) {
    this._logMessageTimestampDifferenceMaxMs = value;
  }
  public resetLogMessageTimestampDifferenceMaxMs() {
    this._logMessageTimestampDifferenceMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageTimestampDifferenceMaxMsInput() {
    return this._logMessageTimestampDifferenceMaxMs;
  }

  // log_preallocate - computed: true, optional: true, required: false
  private _logPreallocate?: boolean | cdktf.IResolvable; 
  public get logPreallocate() {
    return this.getBooleanAttribute('log_preallocate');
  }
  public set logPreallocate(value: boolean | cdktf.IResolvable) {
    this._logPreallocate = value;
  }
  public resetLogPreallocate() {
    this._logPreallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPreallocateInput() {
    return this._logPreallocate;
  }

  // log_retention_bytes - computed: true, optional: true, required: false
  private _logRetentionBytes?: string; 
  public get logRetentionBytes() {
    return this.getStringAttribute('log_retention_bytes');
  }
  public set logRetentionBytes(value: string) {
    this._logRetentionBytes = value;
  }
  public resetLogRetentionBytes() {
    this._logRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionBytesInput() {
    return this._logRetentionBytes;
  }

  // log_retention_hours - computed: true, optional: true, required: false
  private _logRetentionHours?: number; 
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: number) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // log_retention_ms - computed: true, optional: true, required: false
  private _logRetentionMs?: string; 
  public get logRetentionMs() {
    return this.getStringAttribute('log_retention_ms');
  }
  public set logRetentionMs(value: string) {
    this._logRetentionMs = value;
  }
  public resetLogRetentionMs() {
    this._logRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMsInput() {
    return this._logRetentionMs;
  }

  // log_roll_jitter_ms - computed: true, optional: true, required: false
  private _logRollJitterMs?: string; 
  public get logRollJitterMs() {
    return this.getStringAttribute('log_roll_jitter_ms');
  }
  public set logRollJitterMs(value: string) {
    this._logRollJitterMs = value;
  }
  public resetLogRollJitterMs() {
    this._logRollJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRollJitterMsInput() {
    return this._logRollJitterMs;
  }

  // log_segment_delete_delay_ms - computed: true, optional: true, required: false
  private _logSegmentDeleteDelayMs?: number; 
  public get logSegmentDeleteDelayMs() {
    return this.getNumberAttribute('log_segment_delete_delay_ms');
  }
  public set logSegmentDeleteDelayMs(value: number) {
    this._logSegmentDeleteDelayMs = value;
  }
  public resetLogSegmentDeleteDelayMs() {
    this._logSegmentDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSegmentDeleteDelayMsInput() {
    return this._logSegmentDeleteDelayMs;
  }

  // message_max_bytes - computed: true, optional: true, required: false
  private _messageMaxBytes?: number; 
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: number) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_topics_enable: cdktf.booleanToTerraform(this._autoCreateTopicsEnable),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      group_initial_rebalance_delay_ms: cdktf.numberToTerraform(this._groupInitialRebalanceDelayMs),
      group_max_session_timeout_ms: cdktf.numberToTerraform(this._groupMaxSessionTimeoutMs),
      group_min_session_timeout_ms: cdktf.numberToTerraform(this._groupMinSessionTimeoutMs),
      id: cdktf.stringToTerraform(this._id),
      log_cleaner_delete_retention_ms: cdktf.numberToTerraform(this._logCleanerDeleteRetentionMs),
      log_cleaner_min_compaction_lag_ms: cdktf.stringToTerraform(this._logCleanerMinCompactionLagMs),
      log_flush_interval_ms: cdktf.stringToTerraform(this._logFlushIntervalMs),
      log_index_interval_bytes: cdktf.numberToTerraform(this._logIndexIntervalBytes),
      log_message_downconversion_enable: cdktf.booleanToTerraform(this._logMessageDownconversionEnable),
      log_message_timestamp_difference_max_ms: cdktf.stringToTerraform(this._logMessageTimestampDifferenceMaxMs),
      log_preallocate: cdktf.booleanToTerraform(this._logPreallocate),
      log_retention_bytes: cdktf.stringToTerraform(this._logRetentionBytes),
      log_retention_hours: cdktf.numberToTerraform(this._logRetentionHours),
      log_retention_ms: cdktf.stringToTerraform(this._logRetentionMs),
      log_roll_jitter_ms: cdktf.stringToTerraform(this._logRollJitterMs),
      log_segment_delete_delay_ms: cdktf.numberToTerraform(this._logSegmentDeleteDelayMs),
      message_max_bytes: cdktf.numberToTerraform(this._messageMaxBytes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_topics_enable: {
        value: cdktf.booleanToHclTerraform(this._autoCreateTopicsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_initial_rebalance_delay_ms: {
        value: cdktf.numberToHclTerraform(this._groupInitialRebalanceDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_max_session_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._groupMaxSessionTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_min_session_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._groupMinSessionTimeoutMs),
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
      log_cleaner_delete_retention_ms: {
        value: cdktf.numberToHclTerraform(this._logCleanerDeleteRetentionMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_cleaner_min_compaction_lag_ms: {
        value: cdktf.stringToHclTerraform(this._logCleanerMinCompactionLagMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_flush_interval_ms: {
        value: cdktf.stringToHclTerraform(this._logFlushIntervalMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_index_interval_bytes: {
        value: cdktf.numberToHclTerraform(this._logIndexIntervalBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_message_downconversion_enable: {
        value: cdktf.booleanToHclTerraform(this._logMessageDownconversionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_message_timestamp_difference_max_ms: {
        value: cdktf.stringToHclTerraform(this._logMessageTimestampDifferenceMaxMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_preallocate: {
        value: cdktf.booleanToHclTerraform(this._logPreallocate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_retention_bytes: {
        value: cdktf.stringToHclTerraform(this._logRetentionBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_retention_hours: {
        value: cdktf.numberToHclTerraform(this._logRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_retention_ms: {
        value: cdktf.stringToHclTerraform(this._logRetentionMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_roll_jitter_ms: {
        value: cdktf.stringToHclTerraform(this._logRollJitterMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_segment_delete_delay_ms: {
        value: cdktf.numberToHclTerraform(this._logSegmentDeleteDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_max_bytes: {
        value: cdktf.numberToHclTerraform(this._messageMaxBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
