# `databaseOpensearchConfig` Submodule <a name="`databaseOpensearchConfig` Submodule" id="@cdktf/provider-digitalocean.databaseOpensearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOpensearchConfig <a name="DatabaseOpensearchConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfig;

DatabaseOpensearchConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .actionAutoCreateIndexEnabled(java.lang.Boolean|IResolvable)
//  .actionDestructiveRequiresName(java.lang.Boolean|IResolvable)
//  .clusterMaxShardsPerNode(java.lang.Number)
//  .clusterRoutingAllocationNodeConcurrentRecoveries(java.lang.Number)
//  .enableSecurityAudit(java.lang.Boolean|IResolvable)
//  .httpMaxContentLengthBytes(java.lang.Number)
//  .httpMaxHeaderSizeBytes(java.lang.Number)
//  .httpMaxInitialLineLengthBytes(java.lang.Number)
//  .id(java.lang.String)
//  .indicesFielddataCacheSizePercentage(java.lang.Number)
//  .indicesMemoryIndexBufferSizePercentage(java.lang.Number)
//  .indicesMemoryMaxIndexBufferSizeMb(java.lang.Number)
//  .indicesMemoryMinIndexBufferSizeMb(java.lang.Number)
//  .indicesQueriesCacheSizePercentage(java.lang.Number)
//  .indicesQueryBoolMaxClauseCount(java.lang.Number)
//  .indicesRecoveryMaxConcurrentFileChunks(java.lang.Number)
//  .indicesRecoveryMaxMbPerSec(java.lang.Number)
//  .ismEnabled(java.lang.Boolean|IResolvable)
//  .ismHistoryEnabled(java.lang.Boolean|IResolvable)
//  .ismHistoryMaxAgeHours(java.lang.Number)
//  .ismHistoryMaxDocs(java.lang.Number)
//  .ismHistoryRolloverCheckPeriodHours(java.lang.Number)
//  .ismHistoryRolloverRetentionPeriodDays(java.lang.Number)
//  .overrideMainResponseVersion(java.lang.Boolean|IResolvable)
//  .pluginsAlertingFilterByBackendRolesEnabled(java.lang.Boolean|IResolvable)
//  .reindexRemoteWhitelist(java.util.List<java.lang.String>)
//  .scriptMaxCompilationsRate(java.lang.String)
//  .searchMaxBuckets(java.lang.Number)
//  .threadPoolAnalyzeQueueSize(java.lang.Number)
//  .threadPoolAnalyzeSize(java.lang.Number)
//  .threadPoolForceMergeSize(java.lang.Number)
//  .threadPoolGetQueueSize(java.lang.Number)
//  .threadPoolGetSize(java.lang.Number)
//  .threadPoolSearchQueueSize(java.lang.Number)
//  .threadPoolSearchSize(java.lang.Number)
//  .threadPoolSearchThrottledQueueSize(java.lang.Number)
//  .threadPoolSearchThrottledSize(java.lang.Number)
//  .threadPoolWriteQueueSize(java.lang.Number)
//  .threadPoolWriteSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.enableSecurityAudit">enableSecurityAudit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxContentLengthBytes">httpMaxContentLengthBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxHeaderSizeBytes">httpMaxHeaderSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxInitialLineLengthBytes">httpMaxInitialLineLengthBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesFielddataCacheSizePercentage">indicesFielddataCacheSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryIndexBufferSizePercentage">indicesMemoryIndexBufferSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMaxIndexBufferSizeMb">indicesMemoryMaxIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMinIndexBufferSizeMb">indicesMemoryMinIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueriesCacheSizePercentage">indicesQueriesCacheSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxMbPerSec">indicesRecoveryMaxMbPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismEnabled">ismEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxAgeHours">ismHistoryMaxAgeHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverCheckPeriodHours">ismHistoryRolloverCheckPeriodHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverRetentionPeriodDays">ismHistoryRolloverRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.pluginsAlertingFilterByBackendRolesEnabled">pluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.searchMaxBuckets">searchMaxBuckets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetSize">threadPoolGetSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `actionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionAutoCreateIndexEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `actionDestructiveRequiresName`<sup>Optional</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionDestructiveRequiresName"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `clusterMaxShardsPerNode`<sup>Optional</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterMaxShardsPerNode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `enableSecurityAudit`<sup>Optional</sup> <a name="enableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.enableSecurityAudit"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `httpMaxContentLengthBytes`<sup>Optional</sup> <a name="httpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxContentLengthBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `httpMaxHeaderSizeBytes`<sup>Optional</sup> <a name="httpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxHeaderSizeBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `httpMaxInitialLineLengthBytes`<sup>Optional</sup> <a name="httpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxInitialLineLengthBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indicesFielddataCacheSizePercentage`<sup>Optional</sup> <a name="indicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesFielddataCacheSizePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `indicesMemoryIndexBufferSizePercentage`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryIndexBufferSizePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `indicesMemoryMaxIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMaxIndexBufferSizeMb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `indicesMemoryMinIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMinIndexBufferSizeMb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `indicesQueriesCacheSizePercentage`<sup>Optional</sup> <a name="indicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueriesCacheSizePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `indicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueryBoolMaxClauseCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxConcurrentFileChunks"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `indicesRecoveryMaxMbPerSec`<sup>Optional</sup> <a name="indicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxMbPerSec"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `ismEnabled`<sup>Optional</sup> <a name="ismEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `ismHistoryEnabled`<sup>Optional</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `ismHistoryMaxAgeHours`<sup>Optional</sup> <a name="ismHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxAgeHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `ismHistoryMaxDocs`<sup>Optional</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxDocs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `ismHistoryRolloverCheckPeriodHours`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverCheckPeriodHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `ismHistoryRolloverRetentionPeriodDays`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverRetentionPeriodDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `overrideMainResponseVersion`<sup>Optional</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.overrideMainResponseVersion"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `pluginsAlertingFilterByBackendRolesEnabled`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.pluginsAlertingFilterByBackendRolesEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.reindexRemoteWhitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `scriptMaxCompilationsRate`<sup>Optional</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scriptMaxCompilationsRate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `searchMaxBuckets`<sup>Optional</sup> <a name="searchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.searchMaxBuckets"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `threadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeQueueSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `threadPoolAnalyzeSize`<sup>Optional</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolForceMergeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `threadPoolGetQueueSize`<sup>Optional</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetQueueSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `threadPoolGetSize`<sup>Optional</sup> <a name="threadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `threadPoolSearchQueueSize`<sup>Optional</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchQueueSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `threadPoolSearchSize`<sup>Optional</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `threadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledQueueSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `threadPoolSearchThrottledSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `threadPoolWriteQueueSize`<sup>Optional</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteQueueSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `threadPoolWriteSize`<sup>Optional</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled">resetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName">resetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode">resetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries">resetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit">resetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes">resetHttpMaxContentLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes">resetHttpMaxHeaderSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes">resetHttpMaxInitialLineLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage">resetIndicesFielddataCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage">resetIndicesMemoryIndexBufferSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb">resetIndicesMemoryMaxIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb">resetIndicesMemoryMinIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage">resetIndicesQueriesCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount">resetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks">resetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec">resetIndicesRecoveryMaxMbPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled">resetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled">resetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours">resetIsmHistoryMaxAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs">resetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours">resetIsmHistoryRolloverCheckPeriodHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays">resetIsmHistoryRolloverRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion">resetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled">resetPluginsAlertingFilterByBackendRolesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist">resetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate">resetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets">resetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize">resetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize">resetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize">resetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize">resetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize">resetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize">resetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize">resetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize">resetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize">resetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize">resetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize">resetThreadPoolWriteSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActionAutoCreateIndexEnabled` <a name="resetActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled"></a>

```java
public void resetActionAutoCreateIndexEnabled()
```

##### `resetActionDestructiveRequiresName` <a name="resetActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName"></a>

```java
public void resetActionDestructiveRequiresName()
```

##### `resetClusterMaxShardsPerNode` <a name="resetClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode"></a>

```java
public void resetClusterMaxShardsPerNode()
```

##### `resetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="resetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public void resetClusterRoutingAllocationNodeConcurrentRecoveries()
```

##### `resetEnableSecurityAudit` <a name="resetEnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit"></a>

```java
public void resetEnableSecurityAudit()
```

##### `resetHttpMaxContentLengthBytes` <a name="resetHttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes"></a>

```java
public void resetHttpMaxContentLengthBytes()
```

##### `resetHttpMaxHeaderSizeBytes` <a name="resetHttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes"></a>

```java
public void resetHttpMaxHeaderSizeBytes()
```

##### `resetHttpMaxInitialLineLengthBytes` <a name="resetHttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes"></a>

```java
public void resetHttpMaxInitialLineLengthBytes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIndicesFielddataCacheSizePercentage` <a name="resetIndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage"></a>

```java
public void resetIndicesFielddataCacheSizePercentage()
```

##### `resetIndicesMemoryIndexBufferSizePercentage` <a name="resetIndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage"></a>

```java
public void resetIndicesMemoryIndexBufferSizePercentage()
```

##### `resetIndicesMemoryMaxIndexBufferSizeMb` <a name="resetIndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb"></a>

```java
public void resetIndicesMemoryMaxIndexBufferSizeMb()
```

##### `resetIndicesMemoryMinIndexBufferSizeMb` <a name="resetIndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb"></a>

```java
public void resetIndicesMemoryMinIndexBufferSizeMb()
```

##### `resetIndicesQueriesCacheSizePercentage` <a name="resetIndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage"></a>

```java
public void resetIndicesQueriesCacheSizePercentage()
```

##### `resetIndicesQueryBoolMaxClauseCount` <a name="resetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount"></a>

```java
public void resetIndicesQueryBoolMaxClauseCount()
```

##### `resetIndicesRecoveryMaxConcurrentFileChunks` <a name="resetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```java
public void resetIndicesRecoveryMaxConcurrentFileChunks()
```

##### `resetIndicesRecoveryMaxMbPerSec` <a name="resetIndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec"></a>

```java
public void resetIndicesRecoveryMaxMbPerSec()
```

##### `resetIsmEnabled` <a name="resetIsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled"></a>

```java
public void resetIsmEnabled()
```

##### `resetIsmHistoryEnabled` <a name="resetIsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled"></a>

```java
public void resetIsmHistoryEnabled()
```

##### `resetIsmHistoryMaxAgeHours` <a name="resetIsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours"></a>

```java
public void resetIsmHistoryMaxAgeHours()
```

##### `resetIsmHistoryMaxDocs` <a name="resetIsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs"></a>

```java
public void resetIsmHistoryMaxDocs()
```

##### `resetIsmHistoryRolloverCheckPeriodHours` <a name="resetIsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours"></a>

```java
public void resetIsmHistoryRolloverCheckPeriodHours()
```

##### `resetIsmHistoryRolloverRetentionPeriodDays` <a name="resetIsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays"></a>

```java
public void resetIsmHistoryRolloverRetentionPeriodDays()
```

##### `resetOverrideMainResponseVersion` <a name="resetOverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion"></a>

```java
public void resetOverrideMainResponseVersion()
```

##### `resetPluginsAlertingFilterByBackendRolesEnabled` <a name="resetPluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled"></a>

```java
public void resetPluginsAlertingFilterByBackendRolesEnabled()
```

##### `resetReindexRemoteWhitelist` <a name="resetReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist"></a>

```java
public void resetReindexRemoteWhitelist()
```

##### `resetScriptMaxCompilationsRate` <a name="resetScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate"></a>

```java
public void resetScriptMaxCompilationsRate()
```

##### `resetSearchMaxBuckets` <a name="resetSearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets"></a>

```java
public void resetSearchMaxBuckets()
```

##### `resetThreadPoolAnalyzeQueueSize` <a name="resetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize"></a>

```java
public void resetThreadPoolAnalyzeQueueSize()
```

##### `resetThreadPoolAnalyzeSize` <a name="resetThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize"></a>

```java
public void resetThreadPoolAnalyzeSize()
```

##### `resetThreadPoolForceMergeSize` <a name="resetThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize"></a>

```java
public void resetThreadPoolForceMergeSize()
```

##### `resetThreadPoolGetQueueSize` <a name="resetThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize"></a>

```java
public void resetThreadPoolGetQueueSize()
```

##### `resetThreadPoolGetSize` <a name="resetThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize"></a>

```java
public void resetThreadPoolGetSize()
```

##### `resetThreadPoolSearchQueueSize` <a name="resetThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize"></a>

```java
public void resetThreadPoolSearchQueueSize()
```

##### `resetThreadPoolSearchSize` <a name="resetThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize"></a>

```java
public void resetThreadPoolSearchSize()
```

##### `resetThreadPoolSearchThrottledQueueSize` <a name="resetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize"></a>

```java
public void resetThreadPoolSearchThrottledQueueSize()
```

##### `resetThreadPoolSearchThrottledSize` <a name="resetThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize"></a>

```java
public void resetThreadPoolSearchThrottledSize()
```

##### `resetThreadPoolWriteQueueSize` <a name="resetThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize"></a>

```java
public void resetThreadPoolWriteQueueSize()
```

##### `resetThreadPoolWriteSize` <a name="resetThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize"></a>

```java
public void resetThreadPoolWriteSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfig;

DatabaseOpensearchConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfig;

DatabaseOpensearchConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfig;

DatabaseOpensearchConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfig;

DatabaseOpensearchConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseOpensearchConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseOpensearchConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseOpensearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOpensearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput">actionAutoCreateIndexEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput">actionDestructiveRequiresNameInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput">clusterMaxShardsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">clusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput">enableSecurityAuditInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput">httpMaxContentLengthBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput">httpMaxHeaderSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput">httpMaxInitialLineLengthBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput">indicesFielddataCacheSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput">indicesMemoryIndexBufferSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput">indicesMemoryMaxIndexBufferSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput">indicesMemoryMinIndexBufferSizeMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput">indicesQueriesCacheSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput">indicesQueryBoolMaxClauseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput">indicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput">indicesRecoveryMaxMbPerSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput">ismEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput">ismHistoryEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput">ismHistoryMaxAgeHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput">ismHistoryMaxDocsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput">ismHistoryRolloverCheckPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput">ismHistoryRolloverRetentionPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput">overrideMainResponseVersionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput">pluginsAlertingFilterByBackendRolesEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput">reindexRemoteWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput">scriptMaxCompilationsRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput">searchMaxBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput">threadPoolAnalyzeQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput">threadPoolAnalyzeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput">threadPoolForceMergeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput">threadPoolGetQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput">threadPoolGetSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput">threadPoolSearchQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput">threadPoolSearchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput">threadPoolSearchThrottledQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput">threadPoolSearchThrottledSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput">threadPoolWriteQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput">threadPoolWriteSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes">httpMaxContentLengthBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes">httpMaxHeaderSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes">httpMaxInitialLineLengthBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage">indicesFielddataCacheSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage">indicesMemoryIndexBufferSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb">indicesMemoryMaxIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb">indicesMemoryMinIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage">indicesQueriesCacheSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec">indicesRecoveryMaxMbPerSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled">ismEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours">ismHistoryMaxAgeHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours">ismHistoryRolloverCheckPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays">ismHistoryRolloverRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled">pluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActionAutoCreateIndexEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `actionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="actionDestructiveRequiresNameInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput"></a>

```java
public java.lang.Boolean|IResolvable getActionDestructiveRequiresNameInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `clusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="clusterMaxShardsPerNodeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput"></a>

```java
public java.lang.Number getClusterMaxShardsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveriesInput();
```

- *Type:* java.lang.Number

---

##### `enableSecurityAuditInput`<sup>Optional</sup> <a name="enableSecurityAuditInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecurityAuditInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `httpMaxContentLengthBytesInput`<sup>Optional</sup> <a name="httpMaxContentLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput"></a>

```java
public java.lang.Number getHttpMaxContentLengthBytesInput();
```

- *Type:* java.lang.Number

---

##### `httpMaxHeaderSizeBytesInput`<sup>Optional</sup> <a name="httpMaxHeaderSizeBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput"></a>

```java
public java.lang.Number getHttpMaxHeaderSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `httpMaxInitialLineLengthBytesInput`<sup>Optional</sup> <a name="httpMaxInitialLineLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput"></a>

```java
public java.lang.Number getHttpMaxInitialLineLengthBytesInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indicesFielddataCacheSizePercentageInput`<sup>Optional</sup> <a name="indicesFielddataCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput"></a>

```java
public java.lang.Number getIndicesFielddataCacheSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryIndexBufferSizePercentageInput`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMaxIndexBufferSizeMbInput`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMinIndexBufferSizeMbInput`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSizeMbInput();
```

- *Type:* java.lang.Number

---

##### `indicesQueriesCacheSizePercentageInput`<sup>Optional</sup> <a name="indicesQueriesCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput"></a>

```java
public java.lang.Number getIndicesQueriesCacheSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `indicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCountInput();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunksInput();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxMbPerSecInput`<sup>Optional</sup> <a name="indicesRecoveryMaxMbPerSecInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput"></a>

```java
public java.lang.Number getIndicesRecoveryMaxMbPerSecInput();
```

- *Type:* java.lang.Number

---

##### `ismEnabledInput`<sup>Optional</sup> <a name="ismEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsmEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryEnabledInput`<sup>Optional</sup> <a name="ismHistoryEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsmHistoryEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryMaxAgeHoursInput`<sup>Optional</sup> <a name="ismHistoryMaxAgeHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput"></a>

```java
public java.lang.Number getIsmHistoryMaxAgeHoursInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryMaxDocsInput`<sup>Optional</sup> <a name="ismHistoryMaxDocsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput"></a>

```java
public java.lang.Number getIsmHistoryMaxDocsInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverCheckPeriodHoursInput`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverRetentionPeriodDaysInput`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodDaysInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `overrideMainResponseVersionInput`<sup>Optional</sup> <a name="overrideMainResponseVersionInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getOverrideMainResponseVersionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesEnabledInput`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPluginsAlertingFilterByBackendRolesEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reindexRemoteWhitelistInput`<sup>Optional</sup> <a name="reindexRemoteWhitelistInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="scriptMaxCompilationsRateInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput"></a>

```java
public java.lang.String getScriptMaxCompilationsRateInput();
```

- *Type:* java.lang.String

---

##### `searchMaxBucketsInput`<sup>Optional</sup> <a name="searchMaxBucketsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput"></a>

```java
public java.lang.Number getSearchMaxBucketsInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="threadPoolForceMergeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput"></a>

```java
public java.lang.Number getThreadPoolForceMergeSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="threadPoolGetQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolGetQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetSizeInput`<sup>Optional</sup> <a name="threadPoolGetSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput"></a>

```java
public java.lang.Number getThreadPoolGetSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchSizeInput`<sup>Optional</sup> <a name="threadPoolSearchSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="threadPoolWriteQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteSizeInput`<sup>Optional</sup> <a name="threadPoolWriteSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput"></a>

```java
public java.lang.Number getThreadPoolWriteSizeInput();
```

- *Type:* java.lang.Number

---

##### `actionAutoCreateIndexEnabled`<sup>Required</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionAutoCreateIndexEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `actionDestructiveRequiresName`<sup>Required</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName"></a>

```java
public java.lang.Boolean|IResolvable getActionDestructiveRequiresName();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterMaxShardsPerNode`<sup>Required</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode"></a>

```java
public java.lang.Number getClusterMaxShardsPerNode();
```

- *Type:* java.lang.Number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveries();
```

- *Type:* java.lang.Number

---

##### `enableSecurityAudit`<sup>Required</sup> <a name="enableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecurityAudit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `httpMaxContentLengthBytes`<sup>Required</sup> <a name="httpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes"></a>

```java
public java.lang.Number getHttpMaxContentLengthBytes();
```

- *Type:* java.lang.Number

---

##### `httpMaxHeaderSizeBytes`<sup>Required</sup> <a name="httpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes"></a>

```java
public java.lang.Number getHttpMaxHeaderSizeBytes();
```

- *Type:* java.lang.Number

---

##### `httpMaxInitialLineLengthBytes`<sup>Required</sup> <a name="httpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes"></a>

```java
public java.lang.Number getHttpMaxInitialLineLengthBytes();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indicesFielddataCacheSizePercentage`<sup>Required</sup> <a name="indicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage"></a>

```java
public java.lang.Number getIndicesFielddataCacheSizePercentage();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryIndexBufferSizePercentage`<sup>Required</sup> <a name="indicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSizePercentage();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMaxIndexBufferSizeMb`<sup>Required</sup> <a name="indicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSizeMb();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMinIndexBufferSizeMb`<sup>Required</sup> <a name="indicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSizeMb();
```

- *Type:* java.lang.Number

---

##### `indicesQueriesCacheSizePercentage`<sup>Required</sup> <a name="indicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage"></a>

```java
public java.lang.Number getIndicesQueriesCacheSizePercentage();
```

- *Type:* java.lang.Number

---

##### `indicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCount();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunks();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxMbPerSec`<sup>Required</sup> <a name="indicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec"></a>

```java
public java.lang.Number getIndicesRecoveryMaxMbPerSec();
```

- *Type:* java.lang.Number

---

##### `ismEnabled`<sup>Required</sup> <a name="ismEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsmEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryEnabled`<sup>Required</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsmHistoryEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryMaxAgeHours`<sup>Required</sup> <a name="ismHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours"></a>

```java
public java.lang.Number getIsmHistoryMaxAgeHours();
```

- *Type:* java.lang.Number

---

##### `ismHistoryMaxDocs`<sup>Required</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs"></a>

```java
public java.lang.Number getIsmHistoryMaxDocs();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverCheckPeriodHours`<sup>Required</sup> <a name="ismHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriodHours();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverRetentionPeriodDays`<sup>Required</sup> <a name="ismHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

##### `overrideMainResponseVersion`<sup>Required</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion"></a>

```java
public java.lang.Boolean|IResolvable getOverrideMainResponseVersion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesEnabled`<sup>Required</sup> <a name="pluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPluginsAlertingFilterByBackendRolesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reindexRemoteWhitelist`<sup>Required</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptMaxCompilationsRate`<sup>Required</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate"></a>

```java
public java.lang.String getScriptMaxCompilationsRate();
```

- *Type:* java.lang.String

---

##### `searchMaxBuckets`<sup>Required</sup> <a name="searchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets"></a>

```java
public java.lang.Number getSearchMaxBuckets();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeSize`<sup>Required</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolForceMergeSize`<sup>Required</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize"></a>

```java
public java.lang.Number getThreadPoolForceMergeSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetQueueSize`<sup>Required</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize"></a>

```java
public java.lang.Number getThreadPoolGetQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetSize`<sup>Required</sup> <a name="threadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize"></a>

```java
public java.lang.Number getThreadPoolGetSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchQueueSize`<sup>Required</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchSize`<sup>Required</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize"></a>

```java
public java.lang.Number getThreadPoolSearchSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledSize`<sup>Required</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteQueueSize`<sup>Required</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteSize`<sup>Required</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize"></a>

```java
public java.lang.Number getThreadPoolWriteSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOpensearchConfigConfig <a name="DatabaseOpensearchConfigConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_opensearch_config.DatabaseOpensearchConfigConfig;

DatabaseOpensearchConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .actionAutoCreateIndexEnabled(java.lang.Boolean|IResolvable)
//  .actionDestructiveRequiresName(java.lang.Boolean|IResolvable)
//  .clusterMaxShardsPerNode(java.lang.Number)
//  .clusterRoutingAllocationNodeConcurrentRecoveries(java.lang.Number)
//  .enableSecurityAudit(java.lang.Boolean|IResolvable)
//  .httpMaxContentLengthBytes(java.lang.Number)
//  .httpMaxHeaderSizeBytes(java.lang.Number)
//  .httpMaxInitialLineLengthBytes(java.lang.Number)
//  .id(java.lang.String)
//  .indicesFielddataCacheSizePercentage(java.lang.Number)
//  .indicesMemoryIndexBufferSizePercentage(java.lang.Number)
//  .indicesMemoryMaxIndexBufferSizeMb(java.lang.Number)
//  .indicesMemoryMinIndexBufferSizeMb(java.lang.Number)
//  .indicesQueriesCacheSizePercentage(java.lang.Number)
//  .indicesQueryBoolMaxClauseCount(java.lang.Number)
//  .indicesRecoveryMaxConcurrentFileChunks(java.lang.Number)
//  .indicesRecoveryMaxMbPerSec(java.lang.Number)
//  .ismEnabled(java.lang.Boolean|IResolvable)
//  .ismHistoryEnabled(java.lang.Boolean|IResolvable)
//  .ismHistoryMaxAgeHours(java.lang.Number)
//  .ismHistoryMaxDocs(java.lang.Number)
//  .ismHistoryRolloverCheckPeriodHours(java.lang.Number)
//  .ismHistoryRolloverRetentionPeriodDays(java.lang.Number)
//  .overrideMainResponseVersion(java.lang.Boolean|IResolvable)
//  .pluginsAlertingFilterByBackendRolesEnabled(java.lang.Boolean|IResolvable)
//  .reindexRemoteWhitelist(java.util.List<java.lang.String>)
//  .scriptMaxCompilationsRate(java.lang.String)
//  .searchMaxBuckets(java.lang.Number)
//  .threadPoolAnalyzeQueueSize(java.lang.Number)
//  .threadPoolAnalyzeSize(java.lang.Number)
//  .threadPoolForceMergeSize(java.lang.Number)
//  .threadPoolGetQueueSize(java.lang.Number)
//  .threadPoolGetSize(java.lang.Number)
//  .threadPoolSearchQueueSize(java.lang.Number)
//  .threadPoolSearchSize(java.lang.Number)
//  .threadPoolSearchThrottledQueueSize(java.lang.Number)
//  .threadPoolSearchThrottledSize(java.lang.Number)
//  .threadPoolWriteQueueSize(java.lang.Number)
//  .threadPoolWriteSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes">httpMaxContentLengthBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes">httpMaxHeaderSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes">httpMaxInitialLineLengthBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage">indicesFielddataCacheSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage">indicesMemoryIndexBufferSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb">indicesMemoryMaxIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb">indicesMemoryMinIndexBufferSizeMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage">indicesQueriesCacheSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec">indicesRecoveryMaxMbPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled">ismEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours">ismHistoryMaxAgeHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours">ismHistoryRolloverCheckPeriodHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays">ismHistoryRolloverRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled">pluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `actionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionAutoCreateIndexEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `actionDestructiveRequiresName`<sup>Optional</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName"></a>

```java
public java.lang.Boolean|IResolvable getActionDestructiveRequiresName();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `clusterMaxShardsPerNode`<sup>Optional</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode"></a>

```java
public java.lang.Number getClusterMaxShardsPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `enableSecurityAudit`<sup>Optional</sup> <a name="enableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecurityAudit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `httpMaxContentLengthBytes`<sup>Optional</sup> <a name="httpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes"></a>

```java
public java.lang.Number getHttpMaxContentLengthBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `httpMaxHeaderSizeBytes`<sup>Optional</sup> <a name="httpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes"></a>

```java
public java.lang.Number getHttpMaxHeaderSizeBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `httpMaxInitialLineLengthBytes`<sup>Optional</sup> <a name="httpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes"></a>

```java
public java.lang.Number getHttpMaxInitialLineLengthBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indicesFielddataCacheSizePercentage`<sup>Optional</sup> <a name="indicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage"></a>

```java
public java.lang.Number getIndicesFielddataCacheSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `indicesMemoryIndexBufferSizePercentage`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `indicesMemoryMaxIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `indicesMemoryMinIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSizeMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `indicesQueriesCacheSizePercentage`<sup>Optional</sup> <a name="indicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage"></a>

```java
public java.lang.Number getIndicesQueriesCacheSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `indicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `indicesRecoveryMaxMbPerSec`<sup>Optional</sup> <a name="indicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec"></a>

```java
public java.lang.Number getIndicesRecoveryMaxMbPerSec();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `ismEnabled`<sup>Optional</sup> <a name="ismEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsmEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `ismHistoryEnabled`<sup>Optional</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsmHistoryEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `ismHistoryMaxAgeHours`<sup>Optional</sup> <a name="ismHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours"></a>

```java
public java.lang.Number getIsmHistoryMaxAgeHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `ismHistoryMaxDocs`<sup>Optional</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs"></a>

```java
public java.lang.Number getIsmHistoryMaxDocs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `ismHistoryRolloverCheckPeriodHours`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriodHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `ismHistoryRolloverRetentionPeriodDays`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriodDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `overrideMainResponseVersion`<sup>Optional</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion"></a>

```java
public java.lang.Boolean|IResolvable getOverrideMainResponseVersion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `pluginsAlertingFilterByBackendRolesEnabled`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPluginsAlertingFilterByBackendRolesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `scriptMaxCompilationsRate`<sup>Optional</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate"></a>

```java
public java.lang.String getScriptMaxCompilationsRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `searchMaxBuckets`<sup>Optional</sup> <a name="searchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets"></a>

```java
public java.lang.Number getSearchMaxBuckets();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `threadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `threadPoolAnalyzeSize`<sup>Optional</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize"></a>

```java
public java.lang.Number getThreadPoolForceMergeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `threadPoolGetQueueSize`<sup>Optional</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize"></a>

```java
public java.lang.Number getThreadPoolGetQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `threadPoolGetSize`<sup>Optional</sup> <a name="threadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize"></a>

```java
public java.lang.Number getThreadPoolGetSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `threadPoolSearchQueueSize`<sup>Optional</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `threadPoolSearchSize`<sup>Optional</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize"></a>

```java
public java.lang.Number getThreadPoolSearchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `threadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `threadPoolSearchThrottledSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `threadPoolWriteQueueSize`<sup>Optional</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `threadPoolWriteSize`<sup>Optional</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize"></a>

```java
public java.lang.Number getThreadPoolWriteSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---



