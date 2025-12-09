# `databaseOnlineMigration` Submodule <a name="`databaseOnlineMigration` Submodule" id="@cdktf/provider-digitalocean.databaseOnlineMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOnlineMigration <a name="DatabaseOnlineMigration" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration digitalocean_database_online_migration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  source: DatabaseOnlineMigrationSource,
  disable_ssl: bool | IResolvable = None,
  ignore_dbs: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.disableSsl">disable_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.ignoreDbs">ignore_dbs</a></code> | <code>typing.List[str]</code> | The list of databases to be ignored during the migration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `disable_ssl`<sup>Optional</sup> <a name="disable_ssl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.disableSsl"></a>

- *Type:* bool | cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.ignoreDbs"></a>

- *Type:* typing.List[str]

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl">reset_disable_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs">reset_ignore_dbs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource"></a>

```python
def put_source(
  db_name: str,
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str
) -> None
```

###### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.dbName"></a>

- *Type:* str

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.host"></a>

- *Type:* str

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.password"></a>

- *Type:* str

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.username"></a>

- *Type:* str

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

##### `reset_disable_ssl` <a name="reset_disable_ssl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl"></a>

```python
def reset_disable_ssl() -> None
```

##### `reset_ignore_dbs` <a name="reset_ignore_dbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs"></a>

```python
def reset_ignore_dbs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseOnlineMigration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseOnlineMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOnlineMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput">disable_ssl_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput">ignore_dbs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl">disable_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs">ignore_dbs</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source"></a>

```python
source: DatabaseOnlineMigrationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `disable_ssl_input`<sup>Optional</sup> <a name="disable_ssl_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput"></a>

```python
disable_ssl_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ignore_dbs_input`<sup>Optional</sup> <a name="ignore_dbs_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput"></a>

```python
ignore_dbs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput"></a>

```python
source_input: DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `disable_ssl`<sup>Required</sup> <a name="disable_ssl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl"></a>

```python
disable_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ignore_dbs`<sup>Required</sup> <a name="ignore_dbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs"></a>

```python
ignore_dbs: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOnlineMigrationConfig <a name="DatabaseOnlineMigrationConfig" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  source: DatabaseOnlineMigrationSource,
  disable_ssl: bool | IResolvable = None,
  ignore_dbs: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl">disable_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs">ignore_dbs</a></code> | <code>typing.List[str]</code> | The list of databases to be ignored during the migration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source"></a>

```python
source: DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `disable_ssl`<sup>Optional</sup> <a name="disable_ssl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl"></a>

```python
disable_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs"></a>

```python
ignore_dbs: typing.List[str]
```

- *Type:* typing.List[str]

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

### DatabaseOnlineMigrationSource <a name="DatabaseOnlineMigrationSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigrationSource(
  db_name: str,
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName">db_name</a></code> | <code>str</code> | The name of the default database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host">host</a></code> | <code>str</code> | The FQDN pointing to the database cluster's current primary node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password">password</a></code> | <code>str</code> | The password of the database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the database cluster is listening. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username">username</a></code> | <code>str</code> | The default user of the database. |

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host"></a>

```python
host: str
```

- *Type:* str

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username"></a>

```python
username: str
```

- *Type:* str

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOnlineMigrationSourceOutputReference <a name="DatabaseOnlineMigrationSourceOutputReference" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_online_migration

databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---



