/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}
  */
  readonly partitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}
  */
  readonly config?: DatabaseKafkaTopicConfigA[] | cdktf.IResolvable;
}
export interface DatabaseKafkaTopicConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}
  */
  readonly deleteRetentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}
  */
  readonly fileDeleteDelayMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}
  */
  readonly flushMessages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}
  */
  readonly flushMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}
  */
  readonly indexIntervalBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}
  */
  readonly maxCompactionLagMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}
  */
  readonly maxMessageBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}
  */
  readonly messageDownConversionEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}
  */
  readonly messageFormatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}
  */
  readonly messageTimestampDifferenceMaxMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}
  */
  readonly messageTimestampType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}
  */
  readonly minCleanableDirtyRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}
  */
  readonly minCompactionLagMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}
  */
  readonly minInsyncReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}
  */
  readonly preallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}
  */
  readonly retentionBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}
  */
  readonly retentionMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}
  */
  readonly segmentBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}
  */
  readonly segmentIndexBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}
  */
  readonly segmentJitterMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}
  */
  readonly segmentMs?: string;
}

export function databaseKafkaTopicConfigAToTerraform(struct?: DatabaseKafkaTopicConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    delete_retention_ms: cdktf.stringToTerraform(struct!.deleteRetentionMs),
    file_delete_delay_ms: cdktf.stringToTerraform(struct!.fileDeleteDelayMs),
    flush_messages: cdktf.stringToTerraform(struct!.flushMessages),
    flush_ms: cdktf.stringToTerraform(struct!.flushMs),
    index_interval_bytes: cdktf.stringToTerraform(struct!.indexIntervalBytes),
    max_compaction_lag_ms: cdktf.stringToTerraform(struct!.maxCompactionLagMs),
    max_message_bytes: cdktf.stringToTerraform(struct!.maxMessageBytes),
    message_down_conversion_enable: cdktf.booleanToTerraform(struct!.messageDownConversionEnable),
    message_format_version: cdktf.stringToTerraform(struct!.messageFormatVersion),
    message_timestamp_difference_max_ms: cdktf.stringToTerraform(struct!.messageTimestampDifferenceMaxMs),
    message_timestamp_type: cdktf.stringToTerraform(struct!.messageTimestampType),
    min_cleanable_dirty_ratio: cdktf.numberToTerraform(struct!.minCleanableDirtyRatio),
    min_compaction_lag_ms: cdktf.stringToTerraform(struct!.minCompactionLagMs),
    min_insync_replicas: cdktf.numberToTerraform(struct!.minInsyncReplicas),
    preallocate: cdktf.booleanToTerraform(struct!.preallocate),
    retention_bytes: cdktf.stringToTerraform(struct!.retentionBytes),
    retention_ms: cdktf.stringToTerraform(struct!.retentionMs),
    segment_bytes: cdktf.stringToTerraform(struct!.segmentBytes),
    segment_index_bytes: cdktf.stringToTerraform(struct!.segmentIndexBytes),
    segment_jitter_ms: cdktf.stringToTerraform(struct!.segmentJitterMs),
    segment_ms: cdktf.stringToTerraform(struct!.segmentMs),
  }
}


export function databaseKafkaTopicConfigAToHclTerraform(struct?: DatabaseKafkaTopicConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.deleteRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_delete_delay_ms: {
      value: cdktf.stringToHclTerraform(struct!.fileDeleteDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_messages: {
      value: cdktf.stringToHclTerraform(struct!.flushMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_ms: {
      value: cdktf.stringToHclTerraform(struct!.flushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_interval_bytes: {
      value: cdktf.stringToHclTerraform(struct!.indexIntervalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_compaction_lag_ms: {
      value: cdktf.stringToHclTerraform(struct!.maxCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_bytes: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_down_conversion_enable: {
      value: cdktf.booleanToHclTerraform(struct!.messageDownConversionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_format_version: {
      value: cdktf.stringToHclTerraform(struct!.messageFormatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timestamp_difference_max_ms: {
      value: cdktf.stringToHclTerraform(struct!.messageTimestampDifferenceMaxMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timestamp_type: {
      value: cdktf.stringToHclTerraform(struct!.messageTimestampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cleanable_dirty_ratio: {
      value: cdktf.numberToHclTerraform(struct!.minCleanableDirtyRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_compaction_lag_ms: {
      value: cdktf.stringToHclTerraform(struct!.minCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_insync_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minInsyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preallocate: {
      value: cdktf.booleanToHclTerraform(struct!.preallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_bytes: {
      value: cdktf.stringToHclTerraform(struct!.retentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.retentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_bytes: {
      value: cdktf.stringToHclTerraform(struct!.segmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_index_bytes: {
      value: cdktf.stringToHclTerraform(struct!.segmentIndexBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_jitter_ms: {
      value: cdktf.stringToHclTerraform(struct!.segmentJitterMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_ms: {
      value: cdktf.stringToHclTerraform(struct!.segmentMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseKafkaTopicConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseKafkaTopicConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._deleteRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionMs = this._deleteRetentionMs;
    }
    if (this._fileDeleteDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDeleteDelayMs = this._fileDeleteDelayMs;
    }
    if (this._flushMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMessages = this._flushMessages;
    }
    if (this._flushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMs = this._flushMs;
    }
    if (this._indexIntervalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexIntervalBytes = this._indexIntervalBytes;
    }
    if (this._maxCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCompactionLagMs = this._maxCompactionLagMs;
    }
    if (this._maxMessageBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageBytes = this._maxMessageBytes;
    }
    if (this._messageDownConversionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDownConversionEnable = this._messageDownConversionEnable;
    }
    if (this._messageFormatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormatVersion = this._messageFormatVersion;
    }
    if (this._messageTimestampDifferenceMaxMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimestampDifferenceMaxMs = this._messageTimestampDifferenceMaxMs;
    }
    if (this._messageTimestampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimestampType = this._messageTimestampType;
    }
    if (this._minCleanableDirtyRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCleanableDirtyRatio = this._minCleanableDirtyRatio;
    }
    if (this._minCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCompactionLagMs = this._minCompactionLagMs;
    }
    if (this._minInsyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsyncReplicas = this._minInsyncReplicas;
    }
    if (this._preallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preallocate = this._preallocate;
    }
    if (this._retentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionBytes = this._retentionBytes;
    }
    if (this._retentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionMs = this._retentionMs;
    }
    if (this._segmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentBytes = this._segmentBytes;
    }
    if (this._segmentIndexBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentIndexBytes = this._segmentIndexBytes;
    }
    if (this._segmentJitterMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentJitterMs = this._segmentJitterMs;
    }
    if (this._segmentMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentMs = this._segmentMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseKafkaTopicConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupPolicy = undefined;
      this._compressionType = undefined;
      this._deleteRetentionMs = undefined;
      this._fileDeleteDelayMs = undefined;
      this._flushMessages = undefined;
      this._flushMs = undefined;
      this._indexIntervalBytes = undefined;
      this._maxCompactionLagMs = undefined;
      this._maxMessageBytes = undefined;
      this._messageDownConversionEnable = undefined;
      this._messageFormatVersion = undefined;
      this._messageTimestampDifferenceMaxMs = undefined;
      this._messageTimestampType = undefined;
      this._minCleanableDirtyRatio = undefined;
      this._minCompactionLagMs = undefined;
      this._minInsyncReplicas = undefined;
      this._preallocate = undefined;
      this._retentionBytes = undefined;
      this._retentionMs = undefined;
      this._segmentBytes = undefined;
      this._segmentIndexBytes = undefined;
      this._segmentJitterMs = undefined;
      this._segmentMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupPolicy = value.cleanupPolicy;
      this._compressionType = value.compressionType;
      this._deleteRetentionMs = value.deleteRetentionMs;
      this._fileDeleteDelayMs = value.fileDeleteDelayMs;
      this._flushMessages = value.flushMessages;
      this._flushMs = value.flushMs;
      this._indexIntervalBytes = value.indexIntervalBytes;
      this._maxCompactionLagMs = value.maxCompactionLagMs;
      this._maxMessageBytes = value.maxMessageBytes;
      this._messageDownConversionEnable = value.messageDownConversionEnable;
      this._messageFormatVersion = value.messageFormatVersion;
      this._messageTimestampDifferenceMaxMs = value.messageTimestampDifferenceMaxMs;
      this._messageTimestampType = value.messageTimestampType;
      this._minCleanableDirtyRatio = value.minCleanableDirtyRatio;
      this._minCompactionLagMs = value.minCompactionLagMs;
      this._minInsyncReplicas = value.minInsyncReplicas;
      this._preallocate = value.preallocate;
      this._retentionBytes = value.retentionBytes;
      this._retentionMs = value.retentionMs;
      this._segmentBytes = value.segmentBytes;
      this._segmentIndexBytes = value.segmentIndexBytes;
      this._segmentJitterMs = value.segmentJitterMs;
      this._segmentMs = value.segmentMs;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // delete_retention_ms - computed: true, optional: true, required: false
  private _deleteRetentionMs?: string; 
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }
  public set deleteRetentionMs(value: string) {
    this._deleteRetentionMs = value;
  }
  public resetDeleteRetentionMs() {
    this._deleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionMsInput() {
    return this._deleteRetentionMs;
  }

  // file_delete_delay_ms - computed: true, optional: true, required: false
  private _fileDeleteDelayMs?: string; 
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }
  public set fileDeleteDelayMs(value: string) {
    this._fileDeleteDelayMs = value;
  }
  public resetFileDeleteDelayMs() {
    this._fileDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDeleteDelayMsInput() {
    return this._fileDeleteDelayMs;
  }

  // flush_messages - computed: true, optional: true, required: false
  private _flushMessages?: string; 
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }
  public set flushMessages(value: string) {
    this._flushMessages = value;
  }
  public resetFlushMessages() {
    this._flushMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMessagesInput() {
    return this._flushMessages;
  }

  // flush_ms - computed: true, optional: true, required: false
  private _flushMs?: string; 
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }
  public set flushMs(value: string) {
    this._flushMs = value;
  }
  public resetFlushMs() {
    this._flushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMsInput() {
    return this._flushMs;
  }

  // index_interval_bytes - computed: true, optional: true, required: false
  private _indexIntervalBytes?: string; 
  public get indexIntervalBytes() {
    return this.getStringAttribute('index_interval_bytes');
  }
  public set indexIntervalBytes(value: string) {
    this._indexIntervalBytes = value;
  }
  public resetIndexIntervalBytes() {
    this._indexIntervalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIntervalBytesInput() {
    return this._indexIntervalBytes;
  }

  // max_compaction_lag_ms - computed: true, optional: true, required: false
  private _maxCompactionLagMs?: string; 
  public get maxCompactionLagMs() {
    return this.getStringAttribute('max_compaction_lag_ms');
  }
  public set maxCompactionLagMs(value: string) {
    this._maxCompactionLagMs = value;
  }
  public resetMaxCompactionLagMs() {
    this._maxCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCompactionLagMsInput() {
    return this._maxCompactionLagMs;
  }

  // max_message_bytes - computed: true, optional: true, required: false
  private _maxMessageBytes?: string; 
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: string) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // message_down_conversion_enable - computed: true, optional: true, required: false
  private _messageDownConversionEnable?: boolean | cdktf.IResolvable; 
  public get messageDownConversionEnable() {
    return this.getBooleanAttribute('message_down_conversion_enable');
  }
  public set messageDownConversionEnable(value: boolean | cdktf.IResolvable) {
    this._messageDownConversionEnable = value;
  }
  public resetMessageDownConversionEnable() {
    this._messageDownConversionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDownConversionEnableInput() {
    return this._messageDownConversionEnable;
  }

  // message_format_version - computed: true, optional: true, required: false
  private _messageFormatVersion?: string; 
  public get messageFormatVersion() {
    return this.getStringAttribute('message_format_version');
  }
  public set messageFormatVersion(value: string) {
    this._messageFormatVersion = value;
  }
  public resetMessageFormatVersion() {
    this._messageFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatVersionInput() {
    return this._messageFormatVersion;
  }

  // message_timestamp_difference_max_ms - computed: true, optional: true, required: false
  private _messageTimestampDifferenceMaxMs?: string; 
  public get messageTimestampDifferenceMaxMs() {
    return this.getStringAttribute('message_timestamp_difference_max_ms');
  }
  public set messageTimestampDifferenceMaxMs(value: string) {
    this._messageTimestampDifferenceMaxMs = value;
  }
  public resetMessageTimestampDifferenceMaxMs() {
    this._messageTimestampDifferenceMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimestampDifferenceMaxMsInput() {
    return this._messageTimestampDifferenceMaxMs;
  }

  // message_timestamp_type - computed: true, optional: true, required: false
  private _messageTimestampType?: string; 
  public get messageTimestampType() {
    return this.getStringAttribute('message_timestamp_type');
  }
  public set messageTimestampType(value: string) {
    this._messageTimestampType = value;
  }
  public resetMessageTimestampType() {
    this._messageTimestampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimestampTypeInput() {
    return this._messageTimestampType;
  }

  // min_cleanable_dirty_ratio - computed: true, optional: true, required: false
  private _minCleanableDirtyRatio?: number; 
  public get minCleanableDirtyRatio() {
    return this.getNumberAttribute('min_cleanable_dirty_ratio');
  }
  public set minCleanableDirtyRatio(value: number) {
    this._minCleanableDirtyRatio = value;
  }
  public resetMinCleanableDirtyRatio() {
    this._minCleanableDirtyRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCleanableDirtyRatioInput() {
    return this._minCleanableDirtyRatio;
  }

  // min_compaction_lag_ms - computed: true, optional: true, required: false
  private _minCompactionLagMs?: string; 
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }
  public set minCompactionLagMs(value: string) {
    this._minCompactionLagMs = value;
  }
  public resetMinCompactionLagMs() {
    this._minCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCompactionLagMsInput() {
    return this._minCompactionLagMs;
  }

  // min_insync_replicas - computed: false, optional: true, required: false
  private _minInsyncReplicas?: number; 
  public get minInsyncReplicas() {
    return this.getNumberAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: number) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
  }

  // preallocate - computed: true, optional: true, required: false
  private _preallocate?: boolean | cdktf.IResolvable; 
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }
  public set preallocate(value: boolean | cdktf.IResolvable) {
    this._preallocate = value;
  }
  public resetPreallocate() {
    this._preallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preallocateInput() {
    return this._preallocate;
  }

  // retention_bytes - computed: true, optional: true, required: false
  private _retentionBytes?: string; 
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }
  public set retentionBytes(value: string) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_ms - computed: true, optional: true, required: false
  private _retentionMs?: string; 
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }
  public set retentionMs(value: string) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // segment_bytes - computed: true, optional: true, required: false
  private _segmentBytes?: string; 
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }
  public set segmentBytes(value: string) {
    this._segmentBytes = value;
  }
  public resetSegmentBytes() {
    this._segmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentBytesInput() {
    return this._segmentBytes;
  }

  // segment_index_bytes - computed: true, optional: true, required: false
  private _segmentIndexBytes?: string; 
  public get segmentIndexBytes() {
    return this.getStringAttribute('segment_index_bytes');
  }
  public set segmentIndexBytes(value: string) {
    this._segmentIndexBytes = value;
  }
  public resetSegmentIndexBytes() {
    this._segmentIndexBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIndexBytesInput() {
    return this._segmentIndexBytes;
  }

  // segment_jitter_ms - computed: true, optional: true, required: false
  private _segmentJitterMs?: string; 
  public get segmentJitterMs() {
    return this.getStringAttribute('segment_jitter_ms');
  }
  public set segmentJitterMs(value: string) {
    this._segmentJitterMs = value;
  }
  public resetSegmentJitterMs() {
    this._segmentJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentJitterMsInput() {
    return this._segmentJitterMs;
  }

  // segment_ms - computed: true, optional: true, required: false
  private _segmentMs?: string; 
  public get segmentMs() {
    return this.getStringAttribute('segment_ms');
  }
  public set segmentMs(value: string) {
    this._segmentMs = value;
  }
  public resetSegmentMs() {
    this._segmentMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentMsInput() {
    return this._segmentMs;
  }
}

export class DatabaseKafkaTopicConfigAList extends cdktf.ComplexList {
  public internalValue? : DatabaseKafkaTopicConfigA[] | cdktf.IResolvable

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
  public get(index: number): DatabaseKafkaTopicConfigAOutputReference {
    return new DatabaseKafkaTopicConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}
*/
export class DatabaseKafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseKafkaTopic to import
  * @param importFromId The id of the existing DatabaseKafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseKafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.37.0',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
    this._partitionCount = config.partitionCount;
    this._replicationFactor = config.replicationFactor;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition_count - computed: false, optional: true, required: false
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // config - computed: false, optional: true, required: false
  private _config = new DatabaseKafkaTopicConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DatabaseKafkaTopicConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition_count: cdktf.numberToTerraform(this._partitionCount),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      config: cdktf.listMapper(databaseKafkaTopicConfigAToTerraform, true)(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_count: {
        value: cdktf.numberToHclTerraform(this._partitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: cdktf.listMapperHcl(databaseKafkaTopicConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseKafkaTopicConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
