// https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseOpensearchConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}
  */
  readonly actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}
  */
  readonly clusterMaxShardsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentRecoveries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}
  */
  readonly enableSecurityAudit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}
  */
  readonly httpMaxContentLengthBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}
  */
  readonly httpMaxHeaderSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}
  */
  readonly httpMaxInitialLineLengthBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}
  */
  readonly indicesFielddataCacheSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}
  */
  readonly indicesMemoryIndexBufferSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}
  */
  readonly indicesMemoryMaxIndexBufferSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}
  */
  readonly indicesMemoryMinIndexBufferSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}
  */
  readonly indicesQueriesCacheSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}
  */
  readonly indicesQueryBoolMaxClauseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}
  */
  readonly indicesRecoveryMaxConcurrentFileChunks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}
  */
  readonly indicesRecoveryMaxMbPerSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}
  */
  readonly ismEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}
  */
  readonly ismHistoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}
  */
  readonly ismHistoryMaxAgeHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}
  */
  readonly ismHistoryMaxDocs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}
  */
  readonly ismHistoryRolloverCheckPeriodHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}
  */
  readonly ismHistoryRolloverRetentionPeriodDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}
  */
  readonly overrideMainResponseVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}
  */
  readonly pluginsAlertingFilterByBackendRolesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}
  */
  readonly reindexRemoteWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}
  */
  readonly scriptMaxCompilationsRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}
  */
  readonly searchMaxBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}
  */
  readonly threadPoolAnalyzeQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}
  */
  readonly threadPoolAnalyzeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}
  */
  readonly threadPoolForceMergeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}
  */
  readonly threadPoolGetQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}
  */
  readonly threadPoolGetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}
  */
  readonly threadPoolSearchQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}
  */
  readonly threadPoolSearchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}
  */
  readonly threadPoolSearchThrottledQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}
  */
  readonly threadPoolSearchThrottledSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}
  */
  readonly threadPoolWriteQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}
  */
  readonly threadPoolWriteSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}
*/
export class DatabaseOpensearchConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_opensearch_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseOpensearchConfig to import
  * @param importFromId The id of the existing DatabaseOpensearchConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseOpensearchConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_opensearch_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_opensearch_config digitalocean_database_opensearch_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseOpensearchConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseOpensearchConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_opensearch_config',
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
    this._actionAutoCreateIndexEnabled = config.actionAutoCreateIndexEnabled;
    this._actionDestructiveRequiresName = config.actionDestructiveRequiresName;
    this._clusterId = config.clusterId;
    this._clusterMaxShardsPerNode = config.clusterMaxShardsPerNode;
    this._clusterRoutingAllocationNodeConcurrentRecoveries = config.clusterRoutingAllocationNodeConcurrentRecoveries;
    this._enableSecurityAudit = config.enableSecurityAudit;
    this._httpMaxContentLengthBytes = config.httpMaxContentLengthBytes;
    this._httpMaxHeaderSizeBytes = config.httpMaxHeaderSizeBytes;
    this._httpMaxInitialLineLengthBytes = config.httpMaxInitialLineLengthBytes;
    this._id = config.id;
    this._indicesFielddataCacheSizePercentage = config.indicesFielddataCacheSizePercentage;
    this._indicesMemoryIndexBufferSizePercentage = config.indicesMemoryIndexBufferSizePercentage;
    this._indicesMemoryMaxIndexBufferSizeMb = config.indicesMemoryMaxIndexBufferSizeMb;
    this._indicesMemoryMinIndexBufferSizeMb = config.indicesMemoryMinIndexBufferSizeMb;
    this._indicesQueriesCacheSizePercentage = config.indicesQueriesCacheSizePercentage;
    this._indicesQueryBoolMaxClauseCount = config.indicesQueryBoolMaxClauseCount;
    this._indicesRecoveryMaxConcurrentFileChunks = config.indicesRecoveryMaxConcurrentFileChunks;
    this._indicesRecoveryMaxMbPerSec = config.indicesRecoveryMaxMbPerSec;
    this._ismEnabled = config.ismEnabled;
    this._ismHistoryEnabled = config.ismHistoryEnabled;
    this._ismHistoryMaxAgeHours = config.ismHistoryMaxAgeHours;
    this._ismHistoryMaxDocs = config.ismHistoryMaxDocs;
    this._ismHistoryRolloverCheckPeriodHours = config.ismHistoryRolloverCheckPeriodHours;
    this._ismHistoryRolloverRetentionPeriodDays = config.ismHistoryRolloverRetentionPeriodDays;
    this._overrideMainResponseVersion = config.overrideMainResponseVersion;
    this._pluginsAlertingFilterByBackendRolesEnabled = config.pluginsAlertingFilterByBackendRolesEnabled;
    this._reindexRemoteWhitelist = config.reindexRemoteWhitelist;
    this._scriptMaxCompilationsRate = config.scriptMaxCompilationsRate;
    this._searchMaxBuckets = config.searchMaxBuckets;
    this._threadPoolAnalyzeQueueSize = config.threadPoolAnalyzeQueueSize;
    this._threadPoolAnalyzeSize = config.threadPoolAnalyzeSize;
    this._threadPoolForceMergeSize = config.threadPoolForceMergeSize;
    this._threadPoolGetQueueSize = config.threadPoolGetQueueSize;
    this._threadPoolGetSize = config.threadPoolGetSize;
    this._threadPoolSearchQueueSize = config.threadPoolSearchQueueSize;
    this._threadPoolSearchSize = config.threadPoolSearchSize;
    this._threadPoolSearchThrottledQueueSize = config.threadPoolSearchThrottledQueueSize;
    this._threadPoolSearchThrottledSize = config.threadPoolSearchThrottledSize;
    this._threadPoolWriteQueueSize = config.threadPoolWriteQueueSize;
    this._threadPoolWriteSize = config.threadPoolWriteSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_auto_create_index_enabled - computed: true, optional: true, required: false
  private _actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable; 
  public get actionAutoCreateIndexEnabled() {
    return this.getBooleanAttribute('action_auto_create_index_enabled');
  }
  public set actionAutoCreateIndexEnabled(value: boolean | cdktf.IResolvable) {
    this._actionAutoCreateIndexEnabled = value;
  }
  public resetActionAutoCreateIndexEnabled() {
    this._actionAutoCreateIndexEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAutoCreateIndexEnabledInput() {
    return this._actionAutoCreateIndexEnabled;
  }

  // action_destructive_requires_name - computed: true, optional: true, required: false
  private _actionDestructiveRequiresName?: boolean | cdktf.IResolvable; 
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }
  public set actionDestructiveRequiresName(value: boolean | cdktf.IResolvable) {
    this._actionDestructiveRequiresName = value;
  }
  public resetActionDestructiveRequiresName() {
    this._actionDestructiveRequiresName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDestructiveRequiresNameInput() {
    return this._actionDestructiveRequiresName;
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

  // cluster_max_shards_per_node - computed: true, optional: true, required: false
  private _clusterMaxShardsPerNode?: number; 
  public get clusterMaxShardsPerNode() {
    return this.getNumberAttribute('cluster_max_shards_per_node');
  }
  public set clusterMaxShardsPerNode(value: number) {
    this._clusterMaxShardsPerNode = value;
  }
  public resetClusterMaxShardsPerNode() {
    this._clusterMaxShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxShardsPerNodeInput() {
    return this._clusterMaxShardsPerNode;
  }

  // cluster_routing_allocation_node_concurrent_recoveries - computed: true, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentRecoveries;
  }

  // enable_security_audit - computed: true, optional: true, required: false
  private _enableSecurityAudit?: boolean | cdktf.IResolvable; 
  public get enableSecurityAudit() {
    return this.getBooleanAttribute('enable_security_audit');
  }
  public set enableSecurityAudit(value: boolean | cdktf.IResolvable) {
    this._enableSecurityAudit = value;
  }
  public resetEnableSecurityAudit() {
    this._enableSecurityAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityAuditInput() {
    return this._enableSecurityAudit;
  }

  // http_max_content_length_bytes - computed: true, optional: true, required: false
  private _httpMaxContentLengthBytes?: number; 
  public get httpMaxContentLengthBytes() {
    return this.getNumberAttribute('http_max_content_length_bytes');
  }
  public set httpMaxContentLengthBytes(value: number) {
    this._httpMaxContentLengthBytes = value;
  }
  public resetHttpMaxContentLengthBytes() {
    this._httpMaxContentLengthBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxContentLengthBytesInput() {
    return this._httpMaxContentLengthBytes;
  }

  // http_max_header_size_bytes - computed: true, optional: true, required: false
  private _httpMaxHeaderSizeBytes?: number; 
  public get httpMaxHeaderSizeBytes() {
    return this.getNumberAttribute('http_max_header_size_bytes');
  }
  public set httpMaxHeaderSizeBytes(value: number) {
    this._httpMaxHeaderSizeBytes = value;
  }
  public resetHttpMaxHeaderSizeBytes() {
    this._httpMaxHeaderSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxHeaderSizeBytesInput() {
    return this._httpMaxHeaderSizeBytes;
  }

  // http_max_initial_line_length_bytes - computed: true, optional: true, required: false
  private _httpMaxInitialLineLengthBytes?: number; 
  public get httpMaxInitialLineLengthBytes() {
    return this.getNumberAttribute('http_max_initial_line_length_bytes');
  }
  public set httpMaxInitialLineLengthBytes(value: number) {
    this._httpMaxInitialLineLengthBytes = value;
  }
  public resetHttpMaxInitialLineLengthBytes() {
    this._httpMaxInitialLineLengthBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxInitialLineLengthBytesInput() {
    return this._httpMaxInitialLineLengthBytes;
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

  // indices_fielddata_cache_size_percentage - computed: true, optional: true, required: false
  private _indicesFielddataCacheSizePercentage?: number; 
  public get indicesFielddataCacheSizePercentage() {
    return this.getNumberAttribute('indices_fielddata_cache_size_percentage');
  }
  public set indicesFielddataCacheSizePercentage(value: number) {
    this._indicesFielddataCacheSizePercentage = value;
  }
  public resetIndicesFielddataCacheSizePercentage() {
    this._indicesFielddataCacheSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesFielddataCacheSizePercentageInput() {
    return this._indicesFielddataCacheSizePercentage;
  }

  // indices_memory_index_buffer_size_percentage - computed: true, optional: true, required: false
  private _indicesMemoryIndexBufferSizePercentage?: number; 
  public get indicesMemoryIndexBufferSizePercentage() {
    return this.getNumberAttribute('indices_memory_index_buffer_size_percentage');
  }
  public set indicesMemoryIndexBufferSizePercentage(value: number) {
    this._indicesMemoryIndexBufferSizePercentage = value;
  }
  public resetIndicesMemoryIndexBufferSizePercentage() {
    this._indicesMemoryIndexBufferSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryIndexBufferSizePercentageInput() {
    return this._indicesMemoryIndexBufferSizePercentage;
  }

  // indices_memory_max_index_buffer_size_mb - computed: true, optional: true, required: false
  private _indicesMemoryMaxIndexBufferSizeMb?: number; 
  public get indicesMemoryMaxIndexBufferSizeMb() {
    return this.getNumberAttribute('indices_memory_max_index_buffer_size_mb');
  }
  public set indicesMemoryMaxIndexBufferSizeMb(value: number) {
    this._indicesMemoryMaxIndexBufferSizeMb = value;
  }
  public resetIndicesMemoryMaxIndexBufferSizeMb() {
    this._indicesMemoryMaxIndexBufferSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMaxIndexBufferSizeMbInput() {
    return this._indicesMemoryMaxIndexBufferSizeMb;
  }

  // indices_memory_min_index_buffer_size_mb - computed: true, optional: true, required: false
  private _indicesMemoryMinIndexBufferSizeMb?: number; 
  public get indicesMemoryMinIndexBufferSizeMb() {
    return this.getNumberAttribute('indices_memory_min_index_buffer_size_mb');
  }
  public set indicesMemoryMinIndexBufferSizeMb(value: number) {
    this._indicesMemoryMinIndexBufferSizeMb = value;
  }
  public resetIndicesMemoryMinIndexBufferSizeMb() {
    this._indicesMemoryMinIndexBufferSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMinIndexBufferSizeMbInput() {
    return this._indicesMemoryMinIndexBufferSizeMb;
  }

  // indices_queries_cache_size_percentage - computed: true, optional: true, required: false
  private _indicesQueriesCacheSizePercentage?: number; 
  public get indicesQueriesCacheSizePercentage() {
    return this.getNumberAttribute('indices_queries_cache_size_percentage');
  }
  public set indicesQueriesCacheSizePercentage(value: number) {
    this._indicesQueriesCacheSizePercentage = value;
  }
  public resetIndicesQueriesCacheSizePercentage() {
    this._indicesQueriesCacheSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueriesCacheSizePercentageInput() {
    return this._indicesQueriesCacheSizePercentage;
  }

  // indices_query_bool_max_clause_count - computed: true, optional: true, required: false
  private _indicesQueryBoolMaxClauseCount?: number; 
  public get indicesQueryBoolMaxClauseCount() {
    return this.getNumberAttribute('indices_query_bool_max_clause_count');
  }
  public set indicesQueryBoolMaxClauseCount(value: number) {
    this._indicesQueryBoolMaxClauseCount = value;
  }
  public resetIndicesQueryBoolMaxClauseCount() {
    this._indicesQueryBoolMaxClauseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueryBoolMaxClauseCountInput() {
    return this._indicesQueryBoolMaxClauseCount;
  }

  // indices_recovery_max_concurrent_file_chunks - computed: true, optional: true, required: false
  private _indicesRecoveryMaxConcurrentFileChunks?: number; 
  public get indicesRecoveryMaxConcurrentFileChunks() {
    return this.getNumberAttribute('indices_recovery_max_concurrent_file_chunks');
  }
  public set indicesRecoveryMaxConcurrentFileChunks(value: number) {
    this._indicesRecoveryMaxConcurrentFileChunks = value;
  }
  public resetIndicesRecoveryMaxConcurrentFileChunks() {
    this._indicesRecoveryMaxConcurrentFileChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxConcurrentFileChunksInput() {
    return this._indicesRecoveryMaxConcurrentFileChunks;
  }

  // indices_recovery_max_mb_per_sec - computed: true, optional: true, required: false
  private _indicesRecoveryMaxMbPerSec?: number; 
  public get indicesRecoveryMaxMbPerSec() {
    return this.getNumberAttribute('indices_recovery_max_mb_per_sec');
  }
  public set indicesRecoveryMaxMbPerSec(value: number) {
    this._indicesRecoveryMaxMbPerSec = value;
  }
  public resetIndicesRecoveryMaxMbPerSec() {
    this._indicesRecoveryMaxMbPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxMbPerSecInput() {
    return this._indicesRecoveryMaxMbPerSec;
  }

  // ism_enabled - computed: true, optional: true, required: false
  private _ismEnabled?: boolean | cdktf.IResolvable; 
  public get ismEnabled() {
    return this.getBooleanAttribute('ism_enabled');
  }
  public set ismEnabled(value: boolean | cdktf.IResolvable) {
    this._ismEnabled = value;
  }
  public resetIsmEnabled() {
    this._ismEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismEnabledInput() {
    return this._ismEnabled;
  }

  // ism_history_enabled - computed: true, optional: true, required: false
  private _ismHistoryEnabled?: boolean | cdktf.IResolvable; 
  public get ismHistoryEnabled() {
    return this.getBooleanAttribute('ism_history_enabled');
  }
  public set ismHistoryEnabled(value: boolean | cdktf.IResolvable) {
    this._ismHistoryEnabled = value;
  }
  public resetIsmHistoryEnabled() {
    this._ismHistoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryEnabledInput() {
    return this._ismHistoryEnabled;
  }

  // ism_history_max_age_hours - computed: true, optional: true, required: false
  private _ismHistoryMaxAgeHours?: number; 
  public get ismHistoryMaxAgeHours() {
    return this.getNumberAttribute('ism_history_max_age_hours');
  }
  public set ismHistoryMaxAgeHours(value: number) {
    this._ismHistoryMaxAgeHours = value;
  }
  public resetIsmHistoryMaxAgeHours() {
    this._ismHistoryMaxAgeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxAgeHoursInput() {
    return this._ismHistoryMaxAgeHours;
  }

  // ism_history_max_docs - computed: true, optional: true, required: false
  private _ismHistoryMaxDocs?: number; 
  public get ismHistoryMaxDocs() {
    return this.getNumberAttribute('ism_history_max_docs');
  }
  public set ismHistoryMaxDocs(value: number) {
    this._ismHistoryMaxDocs = value;
  }
  public resetIsmHistoryMaxDocs() {
    this._ismHistoryMaxDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxDocsInput() {
    return this._ismHistoryMaxDocs;
  }

  // ism_history_rollover_check_period_hours - computed: true, optional: true, required: false
  private _ismHistoryRolloverCheckPeriodHours?: number; 
  public get ismHistoryRolloverCheckPeriodHours() {
    return this.getNumberAttribute('ism_history_rollover_check_period_hours');
  }
  public set ismHistoryRolloverCheckPeriodHours(value: number) {
    this._ismHistoryRolloverCheckPeriodHours = value;
  }
  public resetIsmHistoryRolloverCheckPeriodHours() {
    this._ismHistoryRolloverCheckPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverCheckPeriodHoursInput() {
    return this._ismHistoryRolloverCheckPeriodHours;
  }

  // ism_history_rollover_retention_period_days - computed: true, optional: true, required: false
  private _ismHistoryRolloverRetentionPeriodDays?: number; 
  public get ismHistoryRolloverRetentionPeriodDays() {
    return this.getNumberAttribute('ism_history_rollover_retention_period_days');
  }
  public set ismHistoryRolloverRetentionPeriodDays(value: number) {
    this._ismHistoryRolloverRetentionPeriodDays = value;
  }
  public resetIsmHistoryRolloverRetentionPeriodDays() {
    this._ismHistoryRolloverRetentionPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverRetentionPeriodDaysInput() {
    return this._ismHistoryRolloverRetentionPeriodDays;
  }

  // override_main_response_version - computed: true, optional: true, required: false
  private _overrideMainResponseVersion?: boolean | cdktf.IResolvable; 
  public get overrideMainResponseVersion() {
    return this.getBooleanAttribute('override_main_response_version');
  }
  public set overrideMainResponseVersion(value: boolean | cdktf.IResolvable) {
    this._overrideMainResponseVersion = value;
  }
  public resetOverrideMainResponseVersion() {
    this._overrideMainResponseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMainResponseVersionInput() {
    return this._overrideMainResponseVersion;
  }

  // plugins_alerting_filter_by_backend_roles_enabled - computed: true, optional: true, required: false
  private _pluginsAlertingFilterByBackendRolesEnabled?: boolean | cdktf.IResolvable; 
  public get pluginsAlertingFilterByBackendRolesEnabled() {
    return this.getBooleanAttribute('plugins_alerting_filter_by_backend_roles_enabled');
  }
  public set pluginsAlertingFilterByBackendRolesEnabled(value: boolean | cdktf.IResolvable) {
    this._pluginsAlertingFilterByBackendRolesEnabled = value;
  }
  public resetPluginsAlertingFilterByBackendRolesEnabled() {
    this._pluginsAlertingFilterByBackendRolesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsAlertingFilterByBackendRolesEnabledInput() {
    return this._pluginsAlertingFilterByBackendRolesEnabled;
  }

  // reindex_remote_whitelist - computed: false, optional: true, required: false
  private _reindexRemoteWhitelist?: string[]; 
  public get reindexRemoteWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('reindex_remote_whitelist'));
  }
  public set reindexRemoteWhitelist(value: string[]) {
    this._reindexRemoteWhitelist = value;
  }
  public resetReindexRemoteWhitelist() {
    this._reindexRemoteWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reindexRemoteWhitelistInput() {
    return this._reindexRemoteWhitelist;
  }

  // script_max_compilations_rate - computed: true, optional: true, required: false
  private _scriptMaxCompilationsRate?: string; 
  public get scriptMaxCompilationsRate() {
    return this.getStringAttribute('script_max_compilations_rate');
  }
  public set scriptMaxCompilationsRate(value: string) {
    this._scriptMaxCompilationsRate = value;
  }
  public resetScriptMaxCompilationsRate() {
    this._scriptMaxCompilationsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptMaxCompilationsRateInput() {
    return this._scriptMaxCompilationsRate;
  }

  // search_max_buckets - computed: true, optional: true, required: false
  private _searchMaxBuckets?: number; 
  public get searchMaxBuckets() {
    return this.getNumberAttribute('search_max_buckets');
  }
  public set searchMaxBuckets(value: number) {
    this._searchMaxBuckets = value;
  }
  public resetSearchMaxBuckets() {
    this._searchMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchMaxBucketsInput() {
    return this._searchMaxBuckets;
  }

  // thread_pool_analyze_queue_size - computed: true, optional: true, required: false
  private _threadPoolAnalyzeQueueSize?: number; 
  public get threadPoolAnalyzeQueueSize() {
    return this.getNumberAttribute('thread_pool_analyze_queue_size');
  }
  public set threadPoolAnalyzeQueueSize(value: number) {
    this._threadPoolAnalyzeQueueSize = value;
  }
  public resetThreadPoolAnalyzeQueueSize() {
    this._threadPoolAnalyzeQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeQueueSizeInput() {
    return this._threadPoolAnalyzeQueueSize;
  }

  // thread_pool_analyze_size - computed: true, optional: true, required: false
  private _threadPoolAnalyzeSize?: number; 
  public get threadPoolAnalyzeSize() {
    return this.getNumberAttribute('thread_pool_analyze_size');
  }
  public set threadPoolAnalyzeSize(value: number) {
    this._threadPoolAnalyzeSize = value;
  }
  public resetThreadPoolAnalyzeSize() {
    this._threadPoolAnalyzeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeSizeInput() {
    return this._threadPoolAnalyzeSize;
  }

  // thread_pool_force_merge_size - computed: true, optional: true, required: false
  private _threadPoolForceMergeSize?: number; 
  public get threadPoolForceMergeSize() {
    return this.getNumberAttribute('thread_pool_force_merge_size');
  }
  public set threadPoolForceMergeSize(value: number) {
    this._threadPoolForceMergeSize = value;
  }
  public resetThreadPoolForceMergeSize() {
    this._threadPoolForceMergeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolForceMergeSizeInput() {
    return this._threadPoolForceMergeSize;
  }

  // thread_pool_get_queue_size - computed: true, optional: true, required: false
  private _threadPoolGetQueueSize?: number; 
  public get threadPoolGetQueueSize() {
    return this.getNumberAttribute('thread_pool_get_queue_size');
  }
  public set threadPoolGetQueueSize(value: number) {
    this._threadPoolGetQueueSize = value;
  }
  public resetThreadPoolGetQueueSize() {
    this._threadPoolGetQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetQueueSizeInput() {
    return this._threadPoolGetQueueSize;
  }

  // thread_pool_get_size - computed: true, optional: true, required: false
  private _threadPoolGetSize?: number; 
  public get threadPoolGetSize() {
    return this.getNumberAttribute('thread_pool_get_size');
  }
  public set threadPoolGetSize(value: number) {
    this._threadPoolGetSize = value;
  }
  public resetThreadPoolGetSize() {
    this._threadPoolGetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetSizeInput() {
    return this._threadPoolGetSize;
  }

  // thread_pool_search_queue_size - computed: true, optional: true, required: false
  private _threadPoolSearchQueueSize?: number; 
  public get threadPoolSearchQueueSize() {
    return this.getNumberAttribute('thread_pool_search_queue_size');
  }
  public set threadPoolSearchQueueSize(value: number) {
    this._threadPoolSearchQueueSize = value;
  }
  public resetThreadPoolSearchQueueSize() {
    this._threadPoolSearchQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchQueueSizeInput() {
    return this._threadPoolSearchQueueSize;
  }

  // thread_pool_search_size - computed: true, optional: true, required: false
  private _threadPoolSearchSize?: number; 
  public get threadPoolSearchSize() {
    return this.getNumberAttribute('thread_pool_search_size');
  }
  public set threadPoolSearchSize(value: number) {
    this._threadPoolSearchSize = value;
  }
  public resetThreadPoolSearchSize() {
    this._threadPoolSearchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchSizeInput() {
    return this._threadPoolSearchSize;
  }

  // thread_pool_search_throttled_queue_size - computed: true, optional: true, required: false
  private _threadPoolSearchThrottledQueueSize?: number; 
  public get threadPoolSearchThrottledQueueSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_queue_size');
  }
  public set threadPoolSearchThrottledQueueSize(value: number) {
    this._threadPoolSearchThrottledQueueSize = value;
  }
  public resetThreadPoolSearchThrottledQueueSize() {
    this._threadPoolSearchThrottledQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledQueueSizeInput() {
    return this._threadPoolSearchThrottledQueueSize;
  }

  // thread_pool_search_throttled_size - computed: true, optional: true, required: false
  private _threadPoolSearchThrottledSize?: number; 
  public get threadPoolSearchThrottledSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_size');
  }
  public set threadPoolSearchThrottledSize(value: number) {
    this._threadPoolSearchThrottledSize = value;
  }
  public resetThreadPoolSearchThrottledSize() {
    this._threadPoolSearchThrottledSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledSizeInput() {
    return this._threadPoolSearchThrottledSize;
  }

  // thread_pool_write_queue_size - computed: true, optional: true, required: false
  private _threadPoolWriteQueueSize?: number; 
  public get threadPoolWriteQueueSize() {
    return this.getNumberAttribute('thread_pool_write_queue_size');
  }
  public set threadPoolWriteQueueSize(value: number) {
    this._threadPoolWriteQueueSize = value;
  }
  public resetThreadPoolWriteQueueSize() {
    this._threadPoolWriteQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteQueueSizeInput() {
    return this._threadPoolWriteQueueSize;
  }

  // thread_pool_write_size - computed: true, optional: true, required: false
  private _threadPoolWriteSize?: number; 
  public get threadPoolWriteSize() {
    return this.getNumberAttribute('thread_pool_write_size');
  }
  public set threadPoolWriteSize(value: number) {
    this._threadPoolWriteSize = value;
  }
  public resetThreadPoolWriteSize() {
    this._threadPoolWriteSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteSizeInput() {
    return this._threadPoolWriteSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_auto_create_index_enabled: cdktf.booleanToTerraform(this._actionAutoCreateIndexEnabled),
      action_destructive_requires_name: cdktf.booleanToTerraform(this._actionDestructiveRequiresName),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_max_shards_per_node: cdktf.numberToTerraform(this._clusterMaxShardsPerNode),
      cluster_routing_allocation_node_concurrent_recoveries: cdktf.numberToTerraform(this._clusterRoutingAllocationNodeConcurrentRecoveries),
      enable_security_audit: cdktf.booleanToTerraform(this._enableSecurityAudit),
      http_max_content_length_bytes: cdktf.numberToTerraform(this._httpMaxContentLengthBytes),
      http_max_header_size_bytes: cdktf.numberToTerraform(this._httpMaxHeaderSizeBytes),
      http_max_initial_line_length_bytes: cdktf.numberToTerraform(this._httpMaxInitialLineLengthBytes),
      id: cdktf.stringToTerraform(this._id),
      indices_fielddata_cache_size_percentage: cdktf.numberToTerraform(this._indicesFielddataCacheSizePercentage),
      indices_memory_index_buffer_size_percentage: cdktf.numberToTerraform(this._indicesMemoryIndexBufferSizePercentage),
      indices_memory_max_index_buffer_size_mb: cdktf.numberToTerraform(this._indicesMemoryMaxIndexBufferSizeMb),
      indices_memory_min_index_buffer_size_mb: cdktf.numberToTerraform(this._indicesMemoryMinIndexBufferSizeMb),
      indices_queries_cache_size_percentage: cdktf.numberToTerraform(this._indicesQueriesCacheSizePercentage),
      indices_query_bool_max_clause_count: cdktf.numberToTerraform(this._indicesQueryBoolMaxClauseCount),
      indices_recovery_max_concurrent_file_chunks: cdktf.numberToTerraform(this._indicesRecoveryMaxConcurrentFileChunks),
      indices_recovery_max_mb_per_sec: cdktf.numberToTerraform(this._indicesRecoveryMaxMbPerSec),
      ism_enabled: cdktf.booleanToTerraform(this._ismEnabled),
      ism_history_enabled: cdktf.booleanToTerraform(this._ismHistoryEnabled),
      ism_history_max_age_hours: cdktf.numberToTerraform(this._ismHistoryMaxAgeHours),
      ism_history_max_docs: cdktf.numberToTerraform(this._ismHistoryMaxDocs),
      ism_history_rollover_check_period_hours: cdktf.numberToTerraform(this._ismHistoryRolloverCheckPeriodHours),
      ism_history_rollover_retention_period_days: cdktf.numberToTerraform(this._ismHistoryRolloverRetentionPeriodDays),
      override_main_response_version: cdktf.booleanToTerraform(this._overrideMainResponseVersion),
      plugins_alerting_filter_by_backend_roles_enabled: cdktf.booleanToTerraform(this._pluginsAlertingFilterByBackendRolesEnabled),
      reindex_remote_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reindexRemoteWhitelist),
      script_max_compilations_rate: cdktf.stringToTerraform(this._scriptMaxCompilationsRate),
      search_max_buckets: cdktf.numberToTerraform(this._searchMaxBuckets),
      thread_pool_analyze_queue_size: cdktf.numberToTerraform(this._threadPoolAnalyzeQueueSize),
      thread_pool_analyze_size: cdktf.numberToTerraform(this._threadPoolAnalyzeSize),
      thread_pool_force_merge_size: cdktf.numberToTerraform(this._threadPoolForceMergeSize),
      thread_pool_get_queue_size: cdktf.numberToTerraform(this._threadPoolGetQueueSize),
      thread_pool_get_size: cdktf.numberToTerraform(this._threadPoolGetSize),
      thread_pool_search_queue_size: cdktf.numberToTerraform(this._threadPoolSearchQueueSize),
      thread_pool_search_size: cdktf.numberToTerraform(this._threadPoolSearchSize),
      thread_pool_search_throttled_queue_size: cdktf.numberToTerraform(this._threadPoolSearchThrottledQueueSize),
      thread_pool_search_throttled_size: cdktf.numberToTerraform(this._threadPoolSearchThrottledSize),
      thread_pool_write_queue_size: cdktf.numberToTerraform(this._threadPoolWriteQueueSize),
      thread_pool_write_size: cdktf.numberToTerraform(this._threadPoolWriteSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_auto_create_index_enabled: {
        value: cdktf.booleanToHclTerraform(this._actionAutoCreateIndexEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_destructive_requires_name: {
        value: cdktf.booleanToHclTerraform(this._actionDestructiveRequiresName),
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
      cluster_max_shards_per_node: {
        value: cdktf.numberToHclTerraform(this._clusterMaxShardsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_routing_allocation_node_concurrent_recoveries: {
        value: cdktf.numberToHclTerraform(this._clusterRoutingAllocationNodeConcurrentRecoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_security_audit: {
        value: cdktf.booleanToHclTerraform(this._enableSecurityAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_max_content_length_bytes: {
        value: cdktf.numberToHclTerraform(this._httpMaxContentLengthBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_max_header_size_bytes: {
        value: cdktf.numberToHclTerraform(this._httpMaxHeaderSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_max_initial_line_length_bytes: {
        value: cdktf.numberToHclTerraform(this._httpMaxInitialLineLengthBytes),
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
      indices_fielddata_cache_size_percentage: {
        value: cdktf.numberToHclTerraform(this._indicesFielddataCacheSizePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_memory_index_buffer_size_percentage: {
        value: cdktf.numberToHclTerraform(this._indicesMemoryIndexBufferSizePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_memory_max_index_buffer_size_mb: {
        value: cdktf.numberToHclTerraform(this._indicesMemoryMaxIndexBufferSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_memory_min_index_buffer_size_mb: {
        value: cdktf.numberToHclTerraform(this._indicesMemoryMinIndexBufferSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_queries_cache_size_percentage: {
        value: cdktf.numberToHclTerraform(this._indicesQueriesCacheSizePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_query_bool_max_clause_count: {
        value: cdktf.numberToHclTerraform(this._indicesQueryBoolMaxClauseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_recovery_max_concurrent_file_chunks: {
        value: cdktf.numberToHclTerraform(this._indicesRecoveryMaxConcurrentFileChunks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indices_recovery_max_mb_per_sec: {
        value: cdktf.numberToHclTerraform(this._indicesRecoveryMaxMbPerSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ism_enabled: {
        value: cdktf.booleanToHclTerraform(this._ismEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ism_history_enabled: {
        value: cdktf.booleanToHclTerraform(this._ismHistoryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ism_history_max_age_hours: {
        value: cdktf.numberToHclTerraform(this._ismHistoryMaxAgeHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ism_history_max_docs: {
        value: cdktf.numberToHclTerraform(this._ismHistoryMaxDocs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ism_history_rollover_check_period_hours: {
        value: cdktf.numberToHclTerraform(this._ismHistoryRolloverCheckPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ism_history_rollover_retention_period_days: {
        value: cdktf.numberToHclTerraform(this._ismHistoryRolloverRetentionPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override_main_response_version: {
        value: cdktf.booleanToHclTerraform(this._overrideMainResponseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plugins_alerting_filter_by_backend_roles_enabled: {
        value: cdktf.booleanToHclTerraform(this._pluginsAlertingFilterByBackendRolesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reindex_remote_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reindexRemoteWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_max_compilations_rate: {
        value: cdktf.stringToHclTerraform(this._scriptMaxCompilationsRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_max_buckets: {
        value: cdktf.numberToHclTerraform(this._searchMaxBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_analyze_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolAnalyzeQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_analyze_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolAnalyzeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_force_merge_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolForceMergeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_get_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolGetQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_get_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolGetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_search_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolSearchQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_search_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolSearchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_search_throttled_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolSearchThrottledQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_search_throttled_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolSearchThrottledSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_write_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolWriteQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_write_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolWriteSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
