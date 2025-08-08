# `databaseOpensearchConfig` Submodule <a name="`databaseOpensearchConfig` Submodule" id="@cdktf/provider-digitalocean.databaseOpensearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOpensearchConfig <a name="DatabaseOpensearchConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfig(
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
  action_auto_create_index_enabled: typing.Union[bool, IResolvable] = None,
  action_destructive_requires_name: typing.Union[bool, IResolvable] = None,
  cluster_max_shards_per_node: typing.Union[int, float] = None,
  cluster_routing_allocation_node_concurrent_recoveries: typing.Union[int, float] = None,
  enable_security_audit: typing.Union[bool, IResolvable] = None,
  http_max_content_length_bytes: typing.Union[int, float] = None,
  http_max_header_size_bytes: typing.Union[int, float] = None,
  http_max_initial_line_length_bytes: typing.Union[int, float] = None,
  id: str = None,
  indices_fielddata_cache_size_percentage: typing.Union[int, float] = None,
  indices_memory_index_buffer_size_percentage: typing.Union[int, float] = None,
  indices_memory_max_index_buffer_size_mb: typing.Union[int, float] = None,
  indices_memory_min_index_buffer_size_mb: typing.Union[int, float] = None,
  indices_queries_cache_size_percentage: typing.Union[int, float] = None,
  indices_query_bool_max_clause_count: typing.Union[int, float] = None,
  indices_recovery_max_concurrent_file_chunks: typing.Union[int, float] = None,
  indices_recovery_max_mb_per_sec: typing.Union[int, float] = None,
  ism_enabled: typing.Union[bool, IResolvable] = None,
  ism_history_enabled: typing.Union[bool, IResolvable] = None,
  ism_history_max_age_hours: typing.Union[int, float] = None,
  ism_history_max_docs: typing.Union[int, float] = None,
  ism_history_rollover_check_period_hours: typing.Union[int, float] = None,
  ism_history_rollover_retention_period_days: typing.Union[int, float] = None,
  override_main_response_version: typing.Union[bool, IResolvable] = None,
  plugins_alerting_filter_by_backend_roles_enabled: typing.Union[bool, IResolvable] = None,
  reindex_remote_whitelist: typing.List[str] = None,
  script_max_compilations_rate: str = None,
  search_max_buckets: typing.Union[int, float] = None,
  thread_pool_analyze_queue_size: typing.Union[int, float] = None,
  thread_pool_analyze_size: typing.Union[int, float] = None,
  thread_pool_force_merge_size: typing.Union[int, float] = None,
  thread_pool_get_queue_size: typing.Union[int, float] = None,
  thread_pool_get_size: typing.Union[int, float] = None,
  thread_pool_search_queue_size: typing.Union[int, float] = None,
  thread_pool_search_size: typing.Union[int, float] = None,
  thread_pool_search_throttled_queue_size: typing.Union[int, float] = None,
  thread_pool_search_throttled_size: typing.Union[int, float] = None,
  thread_pool_write_queue_size: typing.Union[int, float] = None,
  thread_pool_write_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionAutoCreateIndexEnabled">action_auto_create_index_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionDestructiveRequiresName">action_destructive_requires_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterMaxShardsPerNode">cluster_max_shards_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterRoutingAllocationNodeConcurrentRecoveries">cluster_routing_allocation_node_concurrent_recoveries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.enableSecurityAudit">enable_security_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxContentLengthBytes">http_max_content_length_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxHeaderSizeBytes">http_max_header_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxInitialLineLengthBytes">http_max_initial_line_length_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesFielddataCacheSizePercentage">indices_fielddata_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryIndexBufferSizePercentage">indices_memory_index_buffer_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMaxIndexBufferSizeMb">indices_memory_max_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMinIndexBufferSizeMb">indices_memory_min_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueriesCacheSizePercentage">indices_queries_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueryBoolMaxClauseCount">indices_query_bool_max_clause_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxConcurrentFileChunks">indices_recovery_max_concurrent_file_chunks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxMbPerSec">indices_recovery_max_mb_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismEnabled">ism_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryEnabled">ism_history_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxAgeHours">ism_history_max_age_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxDocs">ism_history_max_docs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverCheckPeriodHours">ism_history_rollover_check_period_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverRetentionPeriodDays">ism_history_rollover_retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.overrideMainResponseVersion">override_main_response_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.pluginsAlertingFilterByBackendRolesEnabled">plugins_alerting_filter_by_backend_roles_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scriptMaxCompilationsRate">script_max_compilations_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.searchMaxBuckets">search_max_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeQueueSize">thread_pool_analyze_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeSize">thread_pool_analyze_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetQueueSize">thread_pool_get_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetSize">thread_pool_get_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchQueueSize">thread_pool_search_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchSize">thread_pool_search_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledQueueSize">thread_pool_search_throttled_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledSize">thread_pool_search_throttled_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteQueueSize">thread_pool_write_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteSize">thread_pool_write_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `action_auto_create_index_enabled`<sup>Optional</sup> <a name="action_auto_create_index_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionAutoCreateIndexEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `action_destructive_requires_name`<sup>Optional</sup> <a name="action_destructive_requires_name" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.actionDestructiveRequiresName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `cluster_max_shards_per_node`<sup>Optional</sup> <a name="cluster_max_shards_per_node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterMaxShardsPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `cluster_routing_allocation_node_concurrent_recoveries`<sup>Optional</sup> <a name="cluster_routing_allocation_node_concurrent_recoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `enable_security_audit`<sup>Optional</sup> <a name="enable_security_audit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.enableSecurityAudit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `http_max_content_length_bytes`<sup>Optional</sup> <a name="http_max_content_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxContentLengthBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `http_max_header_size_bytes`<sup>Optional</sup> <a name="http_max_header_size_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxHeaderSizeBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `http_max_initial_line_length_bytes`<sup>Optional</sup> <a name="http_max_initial_line_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.httpMaxInitialLineLengthBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices_fielddata_cache_size_percentage`<sup>Optional</sup> <a name="indices_fielddata_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesFielddataCacheSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `indices_memory_index_buffer_size_percentage`<sup>Optional</sup> <a name="indices_memory_index_buffer_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryIndexBufferSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `indices_memory_max_index_buffer_size_mb`<sup>Optional</sup> <a name="indices_memory_max_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMaxIndexBufferSizeMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `indices_memory_min_index_buffer_size_mb`<sup>Optional</sup> <a name="indices_memory_min_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesMemoryMinIndexBufferSizeMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `indices_queries_cache_size_percentage`<sup>Optional</sup> <a name="indices_queries_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueriesCacheSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `indices_query_bool_max_clause_count`<sup>Optional</sup> <a name="indices_query_bool_max_clause_count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesQueryBoolMaxClauseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `indices_recovery_max_concurrent_file_chunks`<sup>Optional</sup> <a name="indices_recovery_max_concurrent_file_chunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxConcurrentFileChunks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `indices_recovery_max_mb_per_sec`<sup>Optional</sup> <a name="indices_recovery_max_mb_per_sec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.indicesRecoveryMaxMbPerSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `ism_enabled`<sup>Optional</sup> <a name="ism_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `ism_history_enabled`<sup>Optional</sup> <a name="ism_history_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `ism_history_max_age_hours`<sup>Optional</sup> <a name="ism_history_max_age_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxAgeHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `ism_history_max_docs`<sup>Optional</sup> <a name="ism_history_max_docs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryMaxDocs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `ism_history_rollover_check_period_hours`<sup>Optional</sup> <a name="ism_history_rollover_check_period_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverCheckPeriodHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `ism_history_rollover_retention_period_days`<sup>Optional</sup> <a name="ism_history_rollover_retention_period_days" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.ismHistoryRolloverRetentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `override_main_response_version`<sup>Optional</sup> <a name="override_main_response_version" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.overrideMainResponseVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `plugins_alerting_filter_by_backend_roles_enabled`<sup>Optional</sup> <a name="plugins_alerting_filter_by_backend_roles_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.pluginsAlertingFilterByBackendRolesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `reindex_remote_whitelist`<sup>Optional</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.reindexRemoteWhitelist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `script_max_compilations_rate`<sup>Optional</sup> <a name="script_max_compilations_rate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scriptMaxCompilationsRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `search_max_buckets`<sup>Optional</sup> <a name="search_max_buckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.searchMaxBuckets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `thread_pool_analyze_queue_size`<sup>Optional</sup> <a name="thread_pool_analyze_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `thread_pool_analyze_size`<sup>Optional</sup> <a name="thread_pool_analyze_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolAnalyzeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `thread_pool_force_merge_size`<sup>Optional</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolForceMergeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `thread_pool_get_queue_size`<sup>Optional</sup> <a name="thread_pool_get_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `thread_pool_get_size`<sup>Optional</sup> <a name="thread_pool_get_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolGetSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `thread_pool_search_queue_size`<sup>Optional</sup> <a name="thread_pool_search_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `thread_pool_search_size`<sup>Optional</sup> <a name="thread_pool_search_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `thread_pool_search_throttled_queue_size`<sup>Optional</sup> <a name="thread_pool_search_throttled_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `thread_pool_search_throttled_size`<sup>Optional</sup> <a name="thread_pool_search_throttled_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolSearchThrottledSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `thread_pool_write_queue_size`<sup>Optional</sup> <a name="thread_pool_write_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `thread_pool_write_size`<sup>Optional</sup> <a name="thread_pool_write_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.threadPoolWriteSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled">reset_action_auto_create_index_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName">reset_action_destructive_requires_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode">reset_cluster_max_shards_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries">reset_cluster_routing_allocation_node_concurrent_recoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit">reset_enable_security_audit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes">reset_http_max_content_length_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes">reset_http_max_header_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes">reset_http_max_initial_line_length_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage">reset_indices_fielddata_cache_size_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage">reset_indices_memory_index_buffer_size_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb">reset_indices_memory_max_index_buffer_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb">reset_indices_memory_min_index_buffer_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage">reset_indices_queries_cache_size_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount">reset_indices_query_bool_max_clause_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks">reset_indices_recovery_max_concurrent_file_chunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec">reset_indices_recovery_max_mb_per_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled">reset_ism_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled">reset_ism_history_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours">reset_ism_history_max_age_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs">reset_ism_history_max_docs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours">reset_ism_history_rollover_check_period_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays">reset_ism_history_rollover_retention_period_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion">reset_override_main_response_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled">reset_plugins_alerting_filter_by_backend_roles_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist">reset_reindex_remote_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate">reset_script_max_compilations_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets">reset_search_max_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize">reset_thread_pool_analyze_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize">reset_thread_pool_analyze_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize">reset_thread_pool_force_merge_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize">reset_thread_pool_get_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize">reset_thread_pool_get_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize">reset_thread_pool_search_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize">reset_thread_pool_search_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize">reset_thread_pool_search_throttled_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize">reset_thread_pool_search_throttled_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize">reset_thread_pool_write_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize">reset_thread_pool_write_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_action_auto_create_index_enabled` <a name="reset_action_auto_create_index_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled"></a>

```python
def reset_action_auto_create_index_enabled() -> None
```

##### `reset_action_destructive_requires_name` <a name="reset_action_destructive_requires_name" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName"></a>

```python
def reset_action_destructive_requires_name() -> None
```

##### `reset_cluster_max_shards_per_node` <a name="reset_cluster_max_shards_per_node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode"></a>

```python
def reset_cluster_max_shards_per_node() -> None
```

##### `reset_cluster_routing_allocation_node_concurrent_recoveries` <a name="reset_cluster_routing_allocation_node_concurrent_recoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```python
def reset_cluster_routing_allocation_node_concurrent_recoveries() -> None
```

##### `reset_enable_security_audit` <a name="reset_enable_security_audit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit"></a>

```python
def reset_enable_security_audit() -> None
```

##### `reset_http_max_content_length_bytes` <a name="reset_http_max_content_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes"></a>

```python
def reset_http_max_content_length_bytes() -> None
```

##### `reset_http_max_header_size_bytes` <a name="reset_http_max_header_size_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes"></a>

```python
def reset_http_max_header_size_bytes() -> None
```

##### `reset_http_max_initial_line_length_bytes` <a name="reset_http_max_initial_line_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes"></a>

```python
def reset_http_max_initial_line_length_bytes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_indices_fielddata_cache_size_percentage` <a name="reset_indices_fielddata_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage"></a>

```python
def reset_indices_fielddata_cache_size_percentage() -> None
```

##### `reset_indices_memory_index_buffer_size_percentage` <a name="reset_indices_memory_index_buffer_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage"></a>

```python
def reset_indices_memory_index_buffer_size_percentage() -> None
```

##### `reset_indices_memory_max_index_buffer_size_mb` <a name="reset_indices_memory_max_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb"></a>

```python
def reset_indices_memory_max_index_buffer_size_mb() -> None
```

##### `reset_indices_memory_min_index_buffer_size_mb` <a name="reset_indices_memory_min_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb"></a>

```python
def reset_indices_memory_min_index_buffer_size_mb() -> None
```

##### `reset_indices_queries_cache_size_percentage` <a name="reset_indices_queries_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage"></a>

```python
def reset_indices_queries_cache_size_percentage() -> None
```

##### `reset_indices_query_bool_max_clause_count` <a name="reset_indices_query_bool_max_clause_count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount"></a>

```python
def reset_indices_query_bool_max_clause_count() -> None
```

##### `reset_indices_recovery_max_concurrent_file_chunks` <a name="reset_indices_recovery_max_concurrent_file_chunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```python
def reset_indices_recovery_max_concurrent_file_chunks() -> None
```

##### `reset_indices_recovery_max_mb_per_sec` <a name="reset_indices_recovery_max_mb_per_sec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec"></a>

```python
def reset_indices_recovery_max_mb_per_sec() -> None
```

##### `reset_ism_enabled` <a name="reset_ism_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled"></a>

```python
def reset_ism_enabled() -> None
```

##### `reset_ism_history_enabled` <a name="reset_ism_history_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled"></a>

```python
def reset_ism_history_enabled() -> None
```

##### `reset_ism_history_max_age_hours` <a name="reset_ism_history_max_age_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours"></a>

```python
def reset_ism_history_max_age_hours() -> None
```

##### `reset_ism_history_max_docs` <a name="reset_ism_history_max_docs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs"></a>

```python
def reset_ism_history_max_docs() -> None
```

##### `reset_ism_history_rollover_check_period_hours` <a name="reset_ism_history_rollover_check_period_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours"></a>

```python
def reset_ism_history_rollover_check_period_hours() -> None
```

##### `reset_ism_history_rollover_retention_period_days` <a name="reset_ism_history_rollover_retention_period_days" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays"></a>

```python
def reset_ism_history_rollover_retention_period_days() -> None
```

##### `reset_override_main_response_version` <a name="reset_override_main_response_version" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion"></a>

```python
def reset_override_main_response_version() -> None
```

##### `reset_plugins_alerting_filter_by_backend_roles_enabled` <a name="reset_plugins_alerting_filter_by_backend_roles_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled"></a>

```python
def reset_plugins_alerting_filter_by_backend_roles_enabled() -> None
```

##### `reset_reindex_remote_whitelist` <a name="reset_reindex_remote_whitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist"></a>

```python
def reset_reindex_remote_whitelist() -> None
```

##### `reset_script_max_compilations_rate` <a name="reset_script_max_compilations_rate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate"></a>

```python
def reset_script_max_compilations_rate() -> None
```

##### `reset_search_max_buckets` <a name="reset_search_max_buckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets"></a>

```python
def reset_search_max_buckets() -> None
```

##### `reset_thread_pool_analyze_queue_size` <a name="reset_thread_pool_analyze_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize"></a>

```python
def reset_thread_pool_analyze_queue_size() -> None
```

##### `reset_thread_pool_analyze_size` <a name="reset_thread_pool_analyze_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize"></a>

```python
def reset_thread_pool_analyze_size() -> None
```

##### `reset_thread_pool_force_merge_size` <a name="reset_thread_pool_force_merge_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize"></a>

```python
def reset_thread_pool_force_merge_size() -> None
```

##### `reset_thread_pool_get_queue_size` <a name="reset_thread_pool_get_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize"></a>

```python
def reset_thread_pool_get_queue_size() -> None
```

##### `reset_thread_pool_get_size` <a name="reset_thread_pool_get_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize"></a>

```python
def reset_thread_pool_get_size() -> None
```

##### `reset_thread_pool_search_queue_size` <a name="reset_thread_pool_search_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize"></a>

```python
def reset_thread_pool_search_queue_size() -> None
```

##### `reset_thread_pool_search_size` <a name="reset_thread_pool_search_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize"></a>

```python
def reset_thread_pool_search_size() -> None
```

##### `reset_thread_pool_search_throttled_queue_size` <a name="reset_thread_pool_search_throttled_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize"></a>

```python
def reset_thread_pool_search_throttled_queue_size() -> None
```

##### `reset_thread_pool_search_throttled_size` <a name="reset_thread_pool_search_throttled_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize"></a>

```python
def reset_thread_pool_search_throttled_size() -> None
```

##### `reset_thread_pool_write_queue_size` <a name="reset_thread_pool_write_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize"></a>

```python
def reset_thread_pool_write_queue_size() -> None
```

##### `reset_thread_pool_write_size` <a name="reset_thread_pool_write_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize"></a>

```python
def reset_thread_pool_write_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseOpensearchConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseOpensearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOpensearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput">action_auto_create_index_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput">action_destructive_requires_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput">cluster_max_shards_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">cluster_routing_allocation_node_concurrent_recoveries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput">enable_security_audit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput">http_max_content_length_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput">http_max_header_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput">http_max_initial_line_length_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput">indices_fielddata_cache_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput">indices_memory_index_buffer_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput">indices_memory_max_index_buffer_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput">indices_memory_min_index_buffer_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput">indices_queries_cache_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput">indices_query_bool_max_clause_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput">indices_recovery_max_concurrent_file_chunks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput">indices_recovery_max_mb_per_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput">ism_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput">ism_history_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput">ism_history_max_age_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput">ism_history_max_docs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput">ism_history_rollover_check_period_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput">ism_history_rollover_retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput">override_main_response_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput">plugins_alerting_filter_by_backend_roles_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput">reindex_remote_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput">script_max_compilations_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput">search_max_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput">thread_pool_analyze_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput">thread_pool_analyze_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput">thread_pool_force_merge_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput">thread_pool_get_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput">thread_pool_get_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput">thread_pool_search_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput">thread_pool_search_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput">thread_pool_search_throttled_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput">thread_pool_search_throttled_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput">thread_pool_write_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput">thread_pool_write_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled">action_auto_create_index_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName">action_destructive_requires_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode">cluster_max_shards_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">cluster_routing_allocation_node_concurrent_recoveries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit">enable_security_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes">http_max_content_length_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes">http_max_header_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes">http_max_initial_line_length_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage">indices_fielddata_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage">indices_memory_index_buffer_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb">indices_memory_max_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb">indices_memory_min_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage">indices_queries_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount">indices_query_bool_max_clause_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks">indices_recovery_max_concurrent_file_chunks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec">indices_recovery_max_mb_per_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled">ism_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled">ism_history_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours">ism_history_max_age_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs">ism_history_max_docs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours">ism_history_rollover_check_period_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays">ism_history_rollover_retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion">override_main_response_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled">plugins_alerting_filter_by_backend_roles_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate">script_max_compilations_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets">search_max_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize">thread_pool_analyze_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize">thread_pool_analyze_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize">thread_pool_get_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize">thread_pool_get_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize">thread_pool_search_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize">thread_pool_search_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize">thread_pool_search_throttled_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize">thread_pool_search_throttled_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize">thread_pool_write_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize">thread_pool_write_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_auto_create_index_enabled_input`<sup>Optional</sup> <a name="action_auto_create_index_enabled_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput"></a>

```python
action_auto_create_index_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action_destructive_requires_name_input`<sup>Optional</sup> <a name="action_destructive_requires_name_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput"></a>

```python
action_destructive_requires_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_max_shards_per_node_input`<sup>Optional</sup> <a name="cluster_max_shards_per_node_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput"></a>

```python
cluster_max_shards_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_routing_allocation_node_concurrent_recoveries_input`<sup>Optional</sup> <a name="cluster_routing_allocation_node_concurrent_recoveries_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```python
cluster_routing_allocation_node_concurrent_recoveries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_security_audit_input`<sup>Optional</sup> <a name="enable_security_audit_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput"></a>

```python
enable_security_audit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_max_content_length_bytes_input`<sup>Optional</sup> <a name="http_max_content_length_bytes_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput"></a>

```python
http_max_content_length_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_max_header_size_bytes_input`<sup>Optional</sup> <a name="http_max_header_size_bytes_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput"></a>

```python
http_max_header_size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_max_initial_line_length_bytes_input`<sup>Optional</sup> <a name="http_max_initial_line_length_bytes_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput"></a>

```python
http_max_initial_line_length_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `indices_fielddata_cache_size_percentage_input`<sup>Optional</sup> <a name="indices_fielddata_cache_size_percentage_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput"></a>

```python
indices_fielddata_cache_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_index_buffer_size_percentage_input`<sup>Optional</sup> <a name="indices_memory_index_buffer_size_percentage_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput"></a>

```python
indices_memory_index_buffer_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_max_index_buffer_size_mb_input`<sup>Optional</sup> <a name="indices_memory_max_index_buffer_size_mb_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput"></a>

```python
indices_memory_max_index_buffer_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_min_index_buffer_size_mb_input`<sup>Optional</sup> <a name="indices_memory_min_index_buffer_size_mb_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput"></a>

```python
indices_memory_min_index_buffer_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_queries_cache_size_percentage_input`<sup>Optional</sup> <a name="indices_queries_cache_size_percentage_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput"></a>

```python
indices_queries_cache_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_query_bool_max_clause_count_input`<sup>Optional</sup> <a name="indices_query_bool_max_clause_count_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput"></a>

```python
indices_query_bool_max_clause_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_recovery_max_concurrent_file_chunks_input`<sup>Optional</sup> <a name="indices_recovery_max_concurrent_file_chunks_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```python
indices_recovery_max_concurrent_file_chunks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_recovery_max_mb_per_sec_input`<sup>Optional</sup> <a name="indices_recovery_max_mb_per_sec_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput"></a>

```python
indices_recovery_max_mb_per_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_enabled_input`<sup>Optional</sup> <a name="ism_enabled_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput"></a>

```python
ism_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ism_history_enabled_input`<sup>Optional</sup> <a name="ism_history_enabled_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput"></a>

```python
ism_history_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ism_history_max_age_hours_input`<sup>Optional</sup> <a name="ism_history_max_age_hours_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput"></a>

```python
ism_history_max_age_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_max_docs_input`<sup>Optional</sup> <a name="ism_history_max_docs_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput"></a>

```python
ism_history_max_docs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_rollover_check_period_hours_input`<sup>Optional</sup> <a name="ism_history_rollover_check_period_hours_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput"></a>

```python
ism_history_rollover_check_period_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_rollover_retention_period_days_input`<sup>Optional</sup> <a name="ism_history_rollover_retention_period_days_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput"></a>

```python
ism_history_rollover_retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `override_main_response_version_input`<sup>Optional</sup> <a name="override_main_response_version_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput"></a>

```python
override_main_response_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plugins_alerting_filter_by_backend_roles_enabled_input`<sup>Optional</sup> <a name="plugins_alerting_filter_by_backend_roles_enabled_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput"></a>

```python
plugins_alerting_filter_by_backend_roles_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reindex_remote_whitelist_input`<sup>Optional</sup> <a name="reindex_remote_whitelist_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput"></a>

```python
reindex_remote_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_max_compilations_rate_input`<sup>Optional</sup> <a name="script_max_compilations_rate_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput"></a>

```python
script_max_compilations_rate_input: str
```

- *Type:* str

---

##### `search_max_buckets_input`<sup>Optional</sup> <a name="search_max_buckets_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput"></a>

```python
search_max_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_analyze_queue_size_input`<sup>Optional</sup> <a name="thread_pool_analyze_queue_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput"></a>

```python
thread_pool_analyze_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_analyze_size_input`<sup>Optional</sup> <a name="thread_pool_analyze_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput"></a>

```python
thread_pool_analyze_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_force_merge_size_input`<sup>Optional</sup> <a name="thread_pool_force_merge_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput"></a>

```python
thread_pool_force_merge_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_get_queue_size_input`<sup>Optional</sup> <a name="thread_pool_get_queue_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput"></a>

```python
thread_pool_get_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_get_size_input`<sup>Optional</sup> <a name="thread_pool_get_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput"></a>

```python
thread_pool_get_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_queue_size_input`<sup>Optional</sup> <a name="thread_pool_search_queue_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput"></a>

```python
thread_pool_search_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_size_input`<sup>Optional</sup> <a name="thread_pool_search_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput"></a>

```python
thread_pool_search_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_throttled_queue_size_input`<sup>Optional</sup> <a name="thread_pool_search_throttled_queue_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput"></a>

```python
thread_pool_search_throttled_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_throttled_size_input`<sup>Optional</sup> <a name="thread_pool_search_throttled_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput"></a>

```python
thread_pool_search_throttled_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_write_queue_size_input`<sup>Optional</sup> <a name="thread_pool_write_queue_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput"></a>

```python
thread_pool_write_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_write_size_input`<sup>Optional</sup> <a name="thread_pool_write_size_input" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput"></a>

```python
thread_pool_write_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_auto_create_index_enabled`<sup>Required</sup> <a name="action_auto_create_index_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled"></a>

```python
action_auto_create_index_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action_destructive_requires_name`<sup>Required</sup> <a name="action_destructive_requires_name" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName"></a>

```python
action_destructive_requires_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_max_shards_per_node`<sup>Required</sup> <a name="cluster_max_shards_per_node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode"></a>

```python
cluster_max_shards_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_routing_allocation_node_concurrent_recoveries`<sup>Required</sup> <a name="cluster_routing_allocation_node_concurrent_recoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```python
cluster_routing_allocation_node_concurrent_recoveries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_security_audit`<sup>Required</sup> <a name="enable_security_audit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit"></a>

```python
enable_security_audit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_max_content_length_bytes`<sup>Required</sup> <a name="http_max_content_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes"></a>

```python
http_max_content_length_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_max_header_size_bytes`<sup>Required</sup> <a name="http_max_header_size_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes"></a>

```python
http_max_header_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_max_initial_line_length_bytes`<sup>Required</sup> <a name="http_max_initial_line_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes"></a>

```python
http_max_initial_line_length_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `indices_fielddata_cache_size_percentage`<sup>Required</sup> <a name="indices_fielddata_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage"></a>

```python
indices_fielddata_cache_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_index_buffer_size_percentage`<sup>Required</sup> <a name="indices_memory_index_buffer_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```python
indices_memory_index_buffer_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_max_index_buffer_size_mb`<sup>Required</sup> <a name="indices_memory_max_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```python
indices_memory_max_index_buffer_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_memory_min_index_buffer_size_mb`<sup>Required</sup> <a name="indices_memory_min_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```python
indices_memory_min_index_buffer_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_queries_cache_size_percentage`<sup>Required</sup> <a name="indices_queries_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage"></a>

```python
indices_queries_cache_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_query_bool_max_clause_count`<sup>Required</sup> <a name="indices_query_bool_max_clause_count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount"></a>

```python
indices_query_bool_max_clause_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_recovery_max_concurrent_file_chunks`<sup>Required</sup> <a name="indices_recovery_max_concurrent_file_chunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```python
indices_recovery_max_concurrent_file_chunks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indices_recovery_max_mb_per_sec`<sup>Required</sup> <a name="indices_recovery_max_mb_per_sec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec"></a>

```python
indices_recovery_max_mb_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_enabled`<sup>Required</sup> <a name="ism_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled"></a>

```python
ism_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ism_history_enabled`<sup>Required</sup> <a name="ism_history_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled"></a>

```python
ism_history_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ism_history_max_age_hours`<sup>Required</sup> <a name="ism_history_max_age_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours"></a>

```python
ism_history_max_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_max_docs`<sup>Required</sup> <a name="ism_history_max_docs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs"></a>

```python
ism_history_max_docs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_rollover_check_period_hours`<sup>Required</sup> <a name="ism_history_rollover_check_period_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```python
ism_history_rollover_check_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ism_history_rollover_retention_period_days`<sup>Required</sup> <a name="ism_history_rollover_retention_period_days" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```python
ism_history_rollover_retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `override_main_response_version`<sup>Required</sup> <a name="override_main_response_version" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion"></a>

```python
override_main_response_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plugins_alerting_filter_by_backend_roles_enabled`<sup>Required</sup> <a name="plugins_alerting_filter_by_backend_roles_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```python
plugins_alerting_filter_by_backend_roles_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reindex_remote_whitelist`<sup>Required</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist"></a>

```python
reindex_remote_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_max_compilations_rate`<sup>Required</sup> <a name="script_max_compilations_rate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate"></a>

```python
script_max_compilations_rate: str
```

- *Type:* str

---

##### `search_max_buckets`<sup>Required</sup> <a name="search_max_buckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets"></a>

```python
search_max_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_analyze_queue_size`<sup>Required</sup> <a name="thread_pool_analyze_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize"></a>

```python
thread_pool_analyze_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_analyze_size`<sup>Required</sup> <a name="thread_pool_analyze_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize"></a>

```python
thread_pool_analyze_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_force_merge_size`<sup>Required</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize"></a>

```python
thread_pool_force_merge_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_get_queue_size`<sup>Required</sup> <a name="thread_pool_get_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize"></a>

```python
thread_pool_get_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_get_size`<sup>Required</sup> <a name="thread_pool_get_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize"></a>

```python
thread_pool_get_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_queue_size`<sup>Required</sup> <a name="thread_pool_search_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize"></a>

```python
thread_pool_search_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_size`<sup>Required</sup> <a name="thread_pool_search_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize"></a>

```python
thread_pool_search_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_throttled_queue_size`<sup>Required</sup> <a name="thread_pool_search_throttled_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize"></a>

```python
thread_pool_search_throttled_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_search_throttled_size`<sup>Required</sup> <a name="thread_pool_search_throttled_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize"></a>

```python
thread_pool_search_throttled_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_write_queue_size`<sup>Required</sup> <a name="thread_pool_write_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize"></a>

```python
thread_pool_write_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thread_pool_write_size`<sup>Required</sup> <a name="thread_pool_write_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize"></a>

```python
thread_pool_write_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOpensearchConfigConfig <a name="DatabaseOpensearchConfigConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_opensearch_config

databaseOpensearchConfig.DatabaseOpensearchConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  action_auto_create_index_enabled: typing.Union[bool, IResolvable] = None,
  action_destructive_requires_name: typing.Union[bool, IResolvable] = None,
  cluster_max_shards_per_node: typing.Union[int, float] = None,
  cluster_routing_allocation_node_concurrent_recoveries: typing.Union[int, float] = None,
  enable_security_audit: typing.Union[bool, IResolvable] = None,
  http_max_content_length_bytes: typing.Union[int, float] = None,
  http_max_header_size_bytes: typing.Union[int, float] = None,
  http_max_initial_line_length_bytes: typing.Union[int, float] = None,
  id: str = None,
  indices_fielddata_cache_size_percentage: typing.Union[int, float] = None,
  indices_memory_index_buffer_size_percentage: typing.Union[int, float] = None,
  indices_memory_max_index_buffer_size_mb: typing.Union[int, float] = None,
  indices_memory_min_index_buffer_size_mb: typing.Union[int, float] = None,
  indices_queries_cache_size_percentage: typing.Union[int, float] = None,
  indices_query_bool_max_clause_count: typing.Union[int, float] = None,
  indices_recovery_max_concurrent_file_chunks: typing.Union[int, float] = None,
  indices_recovery_max_mb_per_sec: typing.Union[int, float] = None,
  ism_enabled: typing.Union[bool, IResolvable] = None,
  ism_history_enabled: typing.Union[bool, IResolvable] = None,
  ism_history_max_age_hours: typing.Union[int, float] = None,
  ism_history_max_docs: typing.Union[int, float] = None,
  ism_history_rollover_check_period_hours: typing.Union[int, float] = None,
  ism_history_rollover_retention_period_days: typing.Union[int, float] = None,
  override_main_response_version: typing.Union[bool, IResolvable] = None,
  plugins_alerting_filter_by_backend_roles_enabled: typing.Union[bool, IResolvable] = None,
  reindex_remote_whitelist: typing.List[str] = None,
  script_max_compilations_rate: str = None,
  search_max_buckets: typing.Union[int, float] = None,
  thread_pool_analyze_queue_size: typing.Union[int, float] = None,
  thread_pool_analyze_size: typing.Union[int, float] = None,
  thread_pool_force_merge_size: typing.Union[int, float] = None,
  thread_pool_get_queue_size: typing.Union[int, float] = None,
  thread_pool_get_size: typing.Union[int, float] = None,
  thread_pool_search_queue_size: typing.Union[int, float] = None,
  thread_pool_search_size: typing.Union[int, float] = None,
  thread_pool_search_throttled_queue_size: typing.Union[int, float] = None,
  thread_pool_search_throttled_size: typing.Union[int, float] = None,
  thread_pool_write_queue_size: typing.Union[int, float] = None,
  thread_pool_write_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled">action_auto_create_index_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName">action_destructive_requires_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode">cluster_max_shards_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">cluster_routing_allocation_node_concurrent_recoveries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit">enable_security_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes">http_max_content_length_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes">http_max_header_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes">http_max_initial_line_length_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage">indices_fielddata_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage">indices_memory_index_buffer_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb">indices_memory_max_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb">indices_memory_min_index_buffer_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage">indices_queries_cache_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount">indices_query_bool_max_clause_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks">indices_recovery_max_concurrent_file_chunks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec">indices_recovery_max_mb_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled">ism_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled">ism_history_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours">ism_history_max_age_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs">ism_history_max_docs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours">ism_history_rollover_check_period_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays">ism_history_rollover_retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion">override_main_response_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled">plugins_alerting_filter_by_backend_roles_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate">script_max_compilations_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets">search_max_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize">thread_pool_analyze_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize">thread_pool_analyze_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize">thread_pool_get_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize">thread_pool_get_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize">thread_pool_search_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize">thread_pool_search_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize">thread_pool_search_throttled_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize">thread_pool_search_throttled_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize">thread_pool_write_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize">thread_pool_write_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `action_auto_create_index_enabled`<sup>Optional</sup> <a name="action_auto_create_index_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled"></a>

```python
action_auto_create_index_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `action_destructive_requires_name`<sup>Optional</sup> <a name="action_destructive_requires_name" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName"></a>

```python
action_destructive_requires_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `cluster_max_shards_per_node`<sup>Optional</sup> <a name="cluster_max_shards_per_node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode"></a>

```python
cluster_max_shards_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `cluster_routing_allocation_node_concurrent_recoveries`<sup>Optional</sup> <a name="cluster_routing_allocation_node_concurrent_recoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```python
cluster_routing_allocation_node_concurrent_recoveries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `enable_security_audit`<sup>Optional</sup> <a name="enable_security_audit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit"></a>

```python
enable_security_audit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `http_max_content_length_bytes`<sup>Optional</sup> <a name="http_max_content_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes"></a>

```python
http_max_content_length_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `http_max_header_size_bytes`<sup>Optional</sup> <a name="http_max_header_size_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes"></a>

```python
http_max_header_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `http_max_initial_line_length_bytes`<sup>Optional</sup> <a name="http_max_initial_line_length_bytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes"></a>

```python
http_max_initial_line_length_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices_fielddata_cache_size_percentage`<sup>Optional</sup> <a name="indices_fielddata_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage"></a>

```python
indices_fielddata_cache_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `indices_memory_index_buffer_size_percentage`<sup>Optional</sup> <a name="indices_memory_index_buffer_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```python
indices_memory_index_buffer_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `indices_memory_max_index_buffer_size_mb`<sup>Optional</sup> <a name="indices_memory_max_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```python
indices_memory_max_index_buffer_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `indices_memory_min_index_buffer_size_mb`<sup>Optional</sup> <a name="indices_memory_min_index_buffer_size_mb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```python
indices_memory_min_index_buffer_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `indices_queries_cache_size_percentage`<sup>Optional</sup> <a name="indices_queries_cache_size_percentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage"></a>

```python
indices_queries_cache_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `indices_query_bool_max_clause_count`<sup>Optional</sup> <a name="indices_query_bool_max_clause_count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount"></a>

```python
indices_query_bool_max_clause_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `indices_recovery_max_concurrent_file_chunks`<sup>Optional</sup> <a name="indices_recovery_max_concurrent_file_chunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```python
indices_recovery_max_concurrent_file_chunks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `indices_recovery_max_mb_per_sec`<sup>Optional</sup> <a name="indices_recovery_max_mb_per_sec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec"></a>

```python
indices_recovery_max_mb_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `ism_enabled`<sup>Optional</sup> <a name="ism_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled"></a>

```python
ism_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `ism_history_enabled`<sup>Optional</sup> <a name="ism_history_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled"></a>

```python
ism_history_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `ism_history_max_age_hours`<sup>Optional</sup> <a name="ism_history_max_age_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours"></a>

```python
ism_history_max_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `ism_history_max_docs`<sup>Optional</sup> <a name="ism_history_max_docs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs"></a>

```python
ism_history_max_docs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `ism_history_rollover_check_period_hours`<sup>Optional</sup> <a name="ism_history_rollover_check_period_hours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```python
ism_history_rollover_check_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `ism_history_rollover_retention_period_days`<sup>Optional</sup> <a name="ism_history_rollover_retention_period_days" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```python
ism_history_rollover_retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `override_main_response_version`<sup>Optional</sup> <a name="override_main_response_version" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion"></a>

```python
override_main_response_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `plugins_alerting_filter_by_backend_roles_enabled`<sup>Optional</sup> <a name="plugins_alerting_filter_by_backend_roles_enabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```python
plugins_alerting_filter_by_backend_roles_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `reindex_remote_whitelist`<sup>Optional</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist"></a>

```python
reindex_remote_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `script_max_compilations_rate`<sup>Optional</sup> <a name="script_max_compilations_rate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate"></a>

```python
script_max_compilations_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `search_max_buckets`<sup>Optional</sup> <a name="search_max_buckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets"></a>

```python
search_max_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `thread_pool_analyze_queue_size`<sup>Optional</sup> <a name="thread_pool_analyze_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize"></a>

```python
thread_pool_analyze_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `thread_pool_analyze_size`<sup>Optional</sup> <a name="thread_pool_analyze_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize"></a>

```python
thread_pool_analyze_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `thread_pool_force_merge_size`<sup>Optional</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize"></a>

```python
thread_pool_force_merge_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `thread_pool_get_queue_size`<sup>Optional</sup> <a name="thread_pool_get_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize"></a>

```python
thread_pool_get_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `thread_pool_get_size`<sup>Optional</sup> <a name="thread_pool_get_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize"></a>

```python
thread_pool_get_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `thread_pool_search_queue_size`<sup>Optional</sup> <a name="thread_pool_search_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize"></a>

```python
thread_pool_search_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `thread_pool_search_size`<sup>Optional</sup> <a name="thread_pool_search_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize"></a>

```python
thread_pool_search_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `thread_pool_search_throttled_queue_size`<sup>Optional</sup> <a name="thread_pool_search_throttled_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize"></a>

```python
thread_pool_search_throttled_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `thread_pool_search_throttled_size`<sup>Optional</sup> <a name="thread_pool_search_throttled_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize"></a>

```python
thread_pool_search_throttled_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `thread_pool_write_queue_size`<sup>Optional</sup> <a name="thread_pool_write_queue_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize"></a>

```python
thread_pool_write_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `thread_pool_write_size`<sup>Optional</sup> <a name="thread_pool_write_size" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize"></a>

```python
thread_pool_write_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---



