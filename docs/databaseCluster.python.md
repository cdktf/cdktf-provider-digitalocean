# `databaseCluster` Submodule <a name="`databaseCluster` Submodule" id="@cdktf/provider-digitalocean.databaseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCluster <a name="DatabaseCluster" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster digitalocean_database_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  name: str,
  node_count: typing.Union[int, float],
  region: str,
  size: str,
  backup_restore: DatabaseClusterBackupRestore = None,
  eviction_policy: str = None,
  id: str = None,
  maintenance_window: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]] = None,
  private_network_uuid: str = None,
  project_id: str = None,
  sql_mode: str = None,
  storage_size_mib: str = None,
  tags: typing.List[str] = None,
  timeouts: DatabaseClusterTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#engine DatabaseCluster#engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#name DatabaseCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#node_count DatabaseCluster#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#region DatabaseCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#size DatabaseCluster#size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.backupRestore">backup_restore</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a></code> | backup_restore block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#eviction_policy DatabaseCluster#eviction_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#id DatabaseCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.privateNetworkUuid">private_network_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#private_network_uuid DatabaseCluster#private_network_uuid}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#project_id DatabaseCluster#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.sqlMode">sql_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#sql_mode DatabaseCluster#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.storageSizeMib">storage_size_mib</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#storage_size_mib DatabaseCluster#storage_size_mib}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#tags DatabaseCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#version DatabaseCluster#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#engine DatabaseCluster#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#name DatabaseCluster#name}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#node_count DatabaseCluster#node_count}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#region DatabaseCluster#region}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#size DatabaseCluster#size}.

---

##### `backup_restore`<sup>Optional</sup> <a name="backup_restore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.backupRestore"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a>

backup_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#backup_restore DatabaseCluster#backup_restore}

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.evictionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#eviction_policy DatabaseCluster#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#id DatabaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#maintenance_window DatabaseCluster#maintenance_window}

---

##### `private_network_uuid`<sup>Optional</sup> <a name="private_network_uuid" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.privateNetworkUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#private_network_uuid DatabaseCluster#private_network_uuid}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#project_id DatabaseCluster#project_id}.

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.sqlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#sql_mode DatabaseCluster#sql_mode}.

---

##### `storage_size_mib`<sup>Optional</sup> <a name="storage_size_mib" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.storageSizeMib"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#storage_size_mib DatabaseCluster#storage_size_mib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#tags DatabaseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#timeouts DatabaseCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#version DatabaseCluster#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putBackupRestore">put_backup_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetBackupRestore">reset_backup_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetEvictionPolicy">reset_eviction_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetPrivateNetworkUuid">reset_private_network_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetSqlMode">reset_sql_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetStorageSizeMib">reset_storage_size_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_restore` <a name="put_backup_restore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putBackupRestore"></a>

```python
def put_backup_restore(
  database_name: str,
  backup_created_at: str = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putBackupRestore.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#database_name DatabaseCluster#database_name}.

---

###### `backup_created_at`<sup>Optional</sup> <a name="backup_created_at" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putBackupRestore.parameter.backupCreatedAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#backup_created_at DatabaseCluster#backup_created_at}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  value: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#create DatabaseCluster#create}.

---

##### `reset_backup_restore` <a name="reset_backup_restore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetBackupRestore"></a>

```python
def reset_backup_restore() -> None
```

##### `reset_eviction_policy` <a name="reset_eviction_policy" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetEvictionPolicy"></a>

```python
def reset_eviction_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_private_network_uuid` <a name="reset_private_network_uuid" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetPrivateNetworkUuid"></a>

```python
def reset_private_network_uuid() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_sql_mode` <a name="reset_sql_mode" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetSqlMode"></a>

```python
def reset_sql_mode() -> None
```

##### `reset_storage_size_mib` <a name="reset_storage_size_mib" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetStorageSizeMib"></a>

```python
def reset_storage_size_mib() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.backupRestore">backup_restore</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference">DatabaseClusterBackupRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList">DatabaseClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateHost">private_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateUri">private_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference">DatabaseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiDatabase">ui_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiHost">ui_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiPassword">ui_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiPort">ui_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiUri">ui_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiUser">ui_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.backupRestoreInput">backup_restore_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.evictionPolicyInput">eviction_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateNetworkUuidInput">private_network_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sqlModeInput">sql_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.storageSizeMibInput">storage_size_mib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateNetworkUuid">private_network_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.storageSizeMib">storage_size_mib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_restore`<sup>Required</sup> <a name="backup_restore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.backupRestore"></a>

```python
backup_restore: DatabaseClusterBackupRestoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference">DatabaseClusterBackupRestoreOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseClusterMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList">DatabaseClusterMaintenanceWindowList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_host`<sup>Required</sup> <a name="private_host" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateHost"></a>

```python
private_host: str
```

- *Type:* str

---

##### `private_uri`<sup>Required</sup> <a name="private_uri" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateUri"></a>

```python
private_uri: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.timeouts"></a>

```python
timeouts: DatabaseClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference">DatabaseClusterTimeoutsOutputReference</a>

---

##### `ui_database`<sup>Required</sup> <a name="ui_database" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiDatabase"></a>

```python
ui_database: str
```

- *Type:* str

---

##### `ui_host`<sup>Required</sup> <a name="ui_host" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiHost"></a>

```python
ui_host: str
```

- *Type:* str

---

##### `ui_password`<sup>Required</sup> <a name="ui_password" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiPassword"></a>

```python
ui_password: str
```

- *Type:* str

---

##### `ui_port`<sup>Required</sup> <a name="ui_port" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiPort"></a>

```python
ui_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ui_uri`<sup>Required</sup> <a name="ui_uri" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiUri"></a>

```python
ui_uri: str
```

- *Type:* str

---

##### `ui_user`<sup>Required</sup> <a name="ui_user" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uiUser"></a>

```python
ui_user: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `backup_restore_input`<sup>Optional</sup> <a name="backup_restore_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.backupRestoreInput"></a>

```python
backup_restore_input: DatabaseClusterBackupRestore
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a>

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `eviction_policy_input`<sup>Optional</sup> <a name="eviction_policy_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.evictionPolicyInput"></a>

```python
eviction_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_network_uuid_input`<sup>Optional</sup> <a name="private_network_uuid_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateNetworkUuidInput"></a>

```python
private_network_uuid_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `sql_mode_input`<sup>Optional</sup> <a name="sql_mode_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sqlModeInput"></a>

```python
sql_mode_input: str
```

- *Type:* str

---

##### `storage_size_mib_input`<sup>Optional</sup> <a name="storage_size_mib_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.storageSizeMibInput"></a>

```python
storage_size_mib_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `eviction_policy`<sup>Required</sup> <a name="eviction_policy" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_network_uuid`<sup>Required</sup> <a name="private_network_uuid" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.privateNetworkUuid"></a>

```python
private_network_uuid: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `storage_size_mib`<sup>Required</sup> <a name="storage_size_mib" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.storageSizeMib"></a>

```python
storage_size_mib: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseClusterBackupRestore <a name="DatabaseClusterBackupRestore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterBackupRestore(
  database_name: str,
  backup_created_at: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#database_name DatabaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore.property.backupCreatedAt">backup_created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#backup_created_at DatabaseCluster#backup_created_at}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#database_name DatabaseCluster#database_name}.

---

##### `backup_created_at`<sup>Optional</sup> <a name="backup_created_at" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore.property.backupCreatedAt"></a>

```python
backup_created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#backup_created_at DatabaseCluster#backup_created_at}.

---

### DatabaseClusterConfig <a name="DatabaseClusterConfig" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  name: str,
  node_count: typing.Union[int, float],
  region: str,
  size: str,
  backup_restore: DatabaseClusterBackupRestore = None,
  eviction_policy: str = None,
  id: str = None,
  maintenance_window: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]] = None,
  private_network_uuid: str = None,
  project_id: str = None,
  sql_mode: str = None,
  storage_size_mib: str = None,
  tags: typing.List[str] = None,
  timeouts: DatabaseClusterTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#engine DatabaseCluster#engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#name DatabaseCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#node_count DatabaseCluster#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#region DatabaseCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#size DatabaseCluster#size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.backupRestore">backup_restore</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a></code> | backup_restore block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#eviction_policy DatabaseCluster#eviction_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#id DatabaseCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.privateNetworkUuid">private_network_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#private_network_uuid DatabaseCluster#private_network_uuid}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#project_id DatabaseCluster#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.sqlMode">sql_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#sql_mode DatabaseCluster#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.storageSizeMib">storage_size_mib</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#storage_size_mib DatabaseCluster#storage_size_mib}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#tags DatabaseCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#version DatabaseCluster#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#engine DatabaseCluster#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#name DatabaseCluster#name}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#node_count DatabaseCluster#node_count}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#region DatabaseCluster#region}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#size DatabaseCluster#size}.

---

##### `backup_restore`<sup>Optional</sup> <a name="backup_restore" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.backupRestore"></a>

```python
backup_restore: DatabaseClusterBackupRestore
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a>

backup_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#backup_restore DatabaseCluster#backup_restore}

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#eviction_policy DatabaseCluster#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#id DatabaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#maintenance_window DatabaseCluster#maintenance_window}

---

##### `private_network_uuid`<sup>Optional</sup> <a name="private_network_uuid" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.privateNetworkUuid"></a>

```python
private_network_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#private_network_uuid DatabaseCluster#private_network_uuid}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#project_id DatabaseCluster#project_id}.

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#sql_mode DatabaseCluster#sql_mode}.

---

##### `storage_size_mib`<sup>Optional</sup> <a name="storage_size_mib" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.storageSizeMib"></a>

```python
storage_size_mib: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#storage_size_mib DatabaseCluster#storage_size_mib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#tags DatabaseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.timeouts"></a>

```python
timeouts: DatabaseClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#timeouts DatabaseCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#version DatabaseCluster#version}.

---

### DatabaseClusterMaintenanceWindow <a name="DatabaseClusterMaintenanceWindow" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterMaintenanceWindow(
  day: str,
  hour: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#day DatabaseCluster#day}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow.property.hour">hour</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#hour DatabaseCluster#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#day DatabaseCluster#day}.

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow.property.hour"></a>

```python
hour: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#hour DatabaseCluster#hour}.

---

### DatabaseClusterTimeouts <a name="DatabaseClusterTimeouts" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#create DatabaseCluster#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/database_cluster#create DatabaseCluster#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseClusterBackupRestoreOutputReference <a name="DatabaseClusterBackupRestoreOutputReference" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterBackupRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.resetBackupCreatedAt">reset_backup_created_at</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_created_at` <a name="reset_backup_created_at" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.resetBackupCreatedAt"></a>

```python
def reset_backup_created_at() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.backupCreatedAtInput">backup_created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.backupCreatedAt">backup_created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_created_at_input`<sup>Optional</sup> <a name="backup_created_at_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.backupCreatedAtInput"></a>

```python
backup_created_at_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `backup_created_at`<sup>Required</sup> <a name="backup_created_at" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.backupCreatedAt"></a>

```python
backup_created_at: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestoreOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseClusterBackupRestore
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterBackupRestore">DatabaseClusterBackupRestore</a>

---


### DatabaseClusterMaintenanceWindowList <a name="DatabaseClusterMaintenanceWindowList" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseClusterMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseClusterMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]]

---


### DatabaseClusterMaintenanceWindowOutputReference <a name="DatabaseClusterMaintenanceWindowOutputReference" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.hourInput">hour_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.hourInput"></a>

```python
hour_input: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.hour"></a>

```python
hour: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseClusterMaintenanceWindow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterMaintenanceWindow">DatabaseClusterMaintenanceWindow</a>]

---


### DatabaseClusterTimeoutsOutputReference <a name="DatabaseClusterTimeoutsOutputReference" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_cluster

databaseCluster.DatabaseClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseCluster.DatabaseClusterTimeouts">DatabaseClusterTimeouts</a>]

---



