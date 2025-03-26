# `databaseKafkaTopic` Submodule <a name="`databaseKafkaTopic` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaTopic <a name="DatabaseKafkaTopic" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopic(
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
  name: str,
  config: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]] = None,
  id: str = None,
  partition_count: typing.Union[int, float] = None,
  replication_factor: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_count`<sup>Optional</sup> <a name="partition_count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.partitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `replication_factor`<sup>Optional</sup> <a name="replication_factor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.replicationFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount">reset_partition_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor">reset_replication_factor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig"></a>

```python
def put_config(
  value: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_count` <a name="reset_partition_count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount"></a>

```python
def reset_partition_count() -> None
```

##### `reset_replication_factor` <a name="reset_replication_factor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor"></a>

```python
def reset_replication_factor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseKafkaTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput">partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput">replication_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config"></a>

```python
config: DatabaseKafkaTopicConfigAList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_count_input`<sup>Optional</sup> <a name="partition_count_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput"></a>

```python
partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_factor_input`<sup>Optional</sup> <a name="replication_factor_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput"></a>

```python
replication_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaTopicConfig <a name="DatabaseKafkaTopicConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  config: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]] = None,
  id: str = None,
  partition_count: typing.Union[int, float] = None,
  replication_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config"></a>

```python
config: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_count`<sup>Optional</sup> <a name="partition_count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `replication_factor`<sup>Optional</sup> <a name="replication_factor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

### DatabaseKafkaTopicConfigA <a name="DatabaseKafkaTopicConfigA" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopicConfigA(
  cleanup_policy: str = None,
  compression_type: str = None,
  delete_retention_ms: str = None,
  file_delete_delay_ms: str = None,
  flush_messages: str = None,
  flush_ms: str = None,
  index_interval_bytes: str = None,
  max_compaction_lag_ms: str = None,
  max_message_bytes: str = None,
  message_down_conversion_enable: typing.Union[bool, IResolvable] = None,
  message_format_version: str = None,
  message_timestamp_difference_max_ms: str = None,
  message_timestamp_type: str = None,
  min_cleanable_dirty_ratio: typing.Union[int, float] = None,
  min_compaction_lag_ms: str = None,
  min_insync_replicas: typing.Union[int, float] = None,
  preallocate: typing.Union[bool, IResolvable] = None,
  retention_bytes: str = None,
  retention_ms: str = None,
  segment_bytes: str = None,
  segment_index_bytes: str = None,
  segment_jitter_ms: str = None,
  segment_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy">cleanup_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs">delete_retention_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs">file_delete_delay_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages">flush_messages</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs">flush_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes">index_interval_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs">max_compaction_lag_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes">max_message_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable">message_down_conversion_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion">message_format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs">message_timestamp_difference_max_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType">message_timestamp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio">min_cleanable_dirty_ratio</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs">min_compaction_lag_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas">min_insync_replicas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate">preallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes">retention_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs">retention_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes">segment_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes">segment_index_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs">segment_jitter_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs">segment_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}. |

---

##### `cleanup_policy`<sup>Optional</sup> <a name="cleanup_policy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy"></a>

```python
cleanup_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}.

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}.

---

##### `delete_retention_ms`<sup>Optional</sup> <a name="delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs"></a>

```python
delete_retention_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}.

---

##### `file_delete_delay_ms`<sup>Optional</sup> <a name="file_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs"></a>

```python
file_delete_delay_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}.

---

##### `flush_messages`<sup>Optional</sup> <a name="flush_messages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages"></a>

```python
flush_messages: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}.

---

##### `flush_ms`<sup>Optional</sup> <a name="flush_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs"></a>

```python
flush_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}.

---

##### `index_interval_bytes`<sup>Optional</sup> <a name="index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes"></a>

```python
index_interval_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}.

---

##### `max_compaction_lag_ms`<sup>Optional</sup> <a name="max_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs"></a>

```python
max_compaction_lag_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}.

---

##### `max_message_bytes`<sup>Optional</sup> <a name="max_message_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes"></a>

```python
max_message_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}.

---

##### `message_down_conversion_enable`<sup>Optional</sup> <a name="message_down_conversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable"></a>

```python
message_down_conversion_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}.

---

##### `message_format_version`<sup>Optional</sup> <a name="message_format_version" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion"></a>

```python
message_format_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}.

---

##### `message_timestamp_difference_max_ms`<sup>Optional</sup> <a name="message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs"></a>

```python
message_timestamp_difference_max_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}.

---

##### `message_timestamp_type`<sup>Optional</sup> <a name="message_timestamp_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType"></a>

```python
message_timestamp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}.

---

##### `min_cleanable_dirty_ratio`<sup>Optional</sup> <a name="min_cleanable_dirty_ratio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio"></a>

```python
min_cleanable_dirty_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}.

---

##### `min_compaction_lag_ms`<sup>Optional</sup> <a name="min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs"></a>

```python
min_compaction_lag_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}.

---

##### `min_insync_replicas`<sup>Optional</sup> <a name="min_insync_replicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas"></a>

```python
min_insync_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}.

---

##### `preallocate`<sup>Optional</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate"></a>

```python
preallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}.

---

##### `retention_bytes`<sup>Optional</sup> <a name="retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes"></a>

```python
retention_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}.

---

##### `retention_ms`<sup>Optional</sup> <a name="retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs"></a>

```python
retention_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}.

---

##### `segment_bytes`<sup>Optional</sup> <a name="segment_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes"></a>

```python
segment_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}.

---

##### `segment_index_bytes`<sup>Optional</sup> <a name="segment_index_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes"></a>

```python
segment_index_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}.

---

##### `segment_jitter_ms`<sup>Optional</sup> <a name="segment_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs"></a>

```python
segment_jitter_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}.

---

##### `segment_ms`<sup>Optional</sup> <a name="segment_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs"></a>

```python
segment_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseKafkaTopicConfigAList <a name="DatabaseKafkaTopicConfigAList" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopicConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseKafkaTopicConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseKafkaTopicConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]]

---


### DatabaseKafkaTopicConfigAOutputReference <a name="DatabaseKafkaTopicConfigAOutputReference" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_kafka_topic

databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy">reset_cleanup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs">reset_delete_retention_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs">reset_file_delete_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages">reset_flush_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs">reset_flush_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes">reset_index_interval_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs">reset_max_compaction_lag_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes">reset_max_message_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable">reset_message_down_conversion_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion">reset_message_format_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs">reset_message_timestamp_difference_max_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType">reset_message_timestamp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio">reset_min_cleanable_dirty_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs">reset_min_compaction_lag_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas">reset_min_insync_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate">reset_preallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes">reset_retention_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs">reset_retention_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes">reset_segment_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes">reset_segment_index_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs">reset_segment_jitter_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs">reset_segment_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cleanup_policy` <a name="reset_cleanup_policy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy"></a>

```python
def reset_cleanup_policy() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_delete_retention_ms` <a name="reset_delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs"></a>

```python
def reset_delete_retention_ms() -> None
```

##### `reset_file_delete_delay_ms` <a name="reset_file_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs"></a>

```python
def reset_file_delete_delay_ms() -> None
```

##### `reset_flush_messages` <a name="reset_flush_messages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages"></a>

```python
def reset_flush_messages() -> None
```

##### `reset_flush_ms` <a name="reset_flush_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs"></a>

```python
def reset_flush_ms() -> None
```

##### `reset_index_interval_bytes` <a name="reset_index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes"></a>

```python
def reset_index_interval_bytes() -> None
```

##### `reset_max_compaction_lag_ms` <a name="reset_max_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs"></a>

```python
def reset_max_compaction_lag_ms() -> None
```

##### `reset_max_message_bytes` <a name="reset_max_message_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes"></a>

```python
def reset_max_message_bytes() -> None
```

##### `reset_message_down_conversion_enable` <a name="reset_message_down_conversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable"></a>

```python
def reset_message_down_conversion_enable() -> None
```

##### `reset_message_format_version` <a name="reset_message_format_version" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion"></a>

```python
def reset_message_format_version() -> None
```

##### `reset_message_timestamp_difference_max_ms` <a name="reset_message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs"></a>

```python
def reset_message_timestamp_difference_max_ms() -> None
```

##### `reset_message_timestamp_type` <a name="reset_message_timestamp_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType"></a>

```python
def reset_message_timestamp_type() -> None
```

##### `reset_min_cleanable_dirty_ratio` <a name="reset_min_cleanable_dirty_ratio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio"></a>

```python
def reset_min_cleanable_dirty_ratio() -> None
```

##### `reset_min_compaction_lag_ms` <a name="reset_min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs"></a>

```python
def reset_min_compaction_lag_ms() -> None
```

##### `reset_min_insync_replicas` <a name="reset_min_insync_replicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas"></a>

```python
def reset_min_insync_replicas() -> None
```

##### `reset_preallocate` <a name="reset_preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate"></a>

```python
def reset_preallocate() -> None
```

##### `reset_retention_bytes` <a name="reset_retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes"></a>

```python
def reset_retention_bytes() -> None
```

##### `reset_retention_ms` <a name="reset_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs"></a>

```python
def reset_retention_ms() -> None
```

##### `reset_segment_bytes` <a name="reset_segment_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes"></a>

```python
def reset_segment_bytes() -> None
```

##### `reset_segment_index_bytes` <a name="reset_segment_index_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes"></a>

```python
def reset_segment_index_bytes() -> None
```

##### `reset_segment_jitter_ms` <a name="reset_segment_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs"></a>

```python
def reset_segment_jitter_ms() -> None
```

##### `reset_segment_ms` <a name="reset_segment_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs"></a>

```python
def reset_segment_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput">cleanup_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput">delete_retention_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput">file_delete_delay_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput">flush_messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput">flush_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput">index_interval_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput">max_compaction_lag_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput">max_message_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput">message_down_conversion_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput">message_format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput">message_timestamp_difference_max_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput">message_timestamp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput">min_cleanable_dirty_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput">min_compaction_lag_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput">min_insync_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput">preallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput">retention_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput">retention_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput">segment_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput">segment_index_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput">segment_jitter_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput">segment_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy">cleanup_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs">delete_retention_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs">file_delete_delay_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages">flush_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs">flush_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes">index_interval_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs">max_compaction_lag_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes">max_message_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable">message_down_conversion_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion">message_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs">message_timestamp_difference_max_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType">message_timestamp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio">min_cleanable_dirty_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs">min_compaction_lag_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas">min_insync_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate">preallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes">retention_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs">retention_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes">segment_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes">segment_index_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs">segment_jitter_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs">segment_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cleanup_policy_input`<sup>Optional</sup> <a name="cleanup_policy_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput"></a>

```python
cleanup_policy_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `delete_retention_ms_input`<sup>Optional</sup> <a name="delete_retention_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput"></a>

```python
delete_retention_ms_input: str
```

- *Type:* str

---

##### `file_delete_delay_ms_input`<sup>Optional</sup> <a name="file_delete_delay_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput"></a>

```python
file_delete_delay_ms_input: str
```

- *Type:* str

---

##### `flush_messages_input`<sup>Optional</sup> <a name="flush_messages_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput"></a>

```python
flush_messages_input: str
```

- *Type:* str

---

##### `flush_ms_input`<sup>Optional</sup> <a name="flush_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput"></a>

```python
flush_ms_input: str
```

- *Type:* str

---

##### `index_interval_bytes_input`<sup>Optional</sup> <a name="index_interval_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput"></a>

```python
index_interval_bytes_input: str
```

- *Type:* str

---

##### `max_compaction_lag_ms_input`<sup>Optional</sup> <a name="max_compaction_lag_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput"></a>

```python
max_compaction_lag_ms_input: str
```

- *Type:* str

---

##### `max_message_bytes_input`<sup>Optional</sup> <a name="max_message_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput"></a>

```python
max_message_bytes_input: str
```

- *Type:* str

---

##### `message_down_conversion_enable_input`<sup>Optional</sup> <a name="message_down_conversion_enable_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput"></a>

```python
message_down_conversion_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format_version_input`<sup>Optional</sup> <a name="message_format_version_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput"></a>

```python
message_format_version_input: str
```

- *Type:* str

---

##### `message_timestamp_difference_max_ms_input`<sup>Optional</sup> <a name="message_timestamp_difference_max_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput"></a>

```python
message_timestamp_difference_max_ms_input: str
```

- *Type:* str

---

##### `message_timestamp_type_input`<sup>Optional</sup> <a name="message_timestamp_type_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput"></a>

```python
message_timestamp_type_input: str
```

- *Type:* str

---

##### `min_cleanable_dirty_ratio_input`<sup>Optional</sup> <a name="min_cleanable_dirty_ratio_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput"></a>

```python
min_cleanable_dirty_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_compaction_lag_ms_input`<sup>Optional</sup> <a name="min_compaction_lag_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput"></a>

```python
min_compaction_lag_ms_input: str
```

- *Type:* str

---

##### `min_insync_replicas_input`<sup>Optional</sup> <a name="min_insync_replicas_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput"></a>

```python
min_insync_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preallocate_input`<sup>Optional</sup> <a name="preallocate_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput"></a>

```python
preallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_bytes_input`<sup>Optional</sup> <a name="retention_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput"></a>

```python
retention_bytes_input: str
```

- *Type:* str

---

##### `retention_ms_input`<sup>Optional</sup> <a name="retention_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput"></a>

```python
retention_ms_input: str
```

- *Type:* str

---

##### `segment_bytes_input`<sup>Optional</sup> <a name="segment_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput"></a>

```python
segment_bytes_input: str
```

- *Type:* str

---

##### `segment_index_bytes_input`<sup>Optional</sup> <a name="segment_index_bytes_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput"></a>

```python
segment_index_bytes_input: str
```

- *Type:* str

---

##### `segment_jitter_ms_input`<sup>Optional</sup> <a name="segment_jitter_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput"></a>

```python
segment_jitter_ms_input: str
```

- *Type:* str

---

##### `segment_ms_input`<sup>Optional</sup> <a name="segment_ms_input" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput"></a>

```python
segment_ms_input: str
```

- *Type:* str

---

##### `cleanup_policy`<sup>Required</sup> <a name="cleanup_policy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy"></a>

```python
cleanup_policy: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `delete_retention_ms`<sup>Required</sup> <a name="delete_retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs"></a>

```python
delete_retention_ms: str
```

- *Type:* str

---

##### `file_delete_delay_ms`<sup>Required</sup> <a name="file_delete_delay_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs"></a>

```python
file_delete_delay_ms: str
```

- *Type:* str

---

##### `flush_messages`<sup>Required</sup> <a name="flush_messages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages"></a>

```python
flush_messages: str
```

- *Type:* str

---

##### `flush_ms`<sup>Required</sup> <a name="flush_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs"></a>

```python
flush_ms: str
```

- *Type:* str

---

##### `index_interval_bytes`<sup>Required</sup> <a name="index_interval_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes"></a>

```python
index_interval_bytes: str
```

- *Type:* str

---

##### `max_compaction_lag_ms`<sup>Required</sup> <a name="max_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs"></a>

```python
max_compaction_lag_ms: str
```

- *Type:* str

---

##### `max_message_bytes`<sup>Required</sup> <a name="max_message_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes"></a>

```python
max_message_bytes: str
```

- *Type:* str

---

##### `message_down_conversion_enable`<sup>Required</sup> <a name="message_down_conversion_enable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable"></a>

```python
message_down_conversion_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format_version`<sup>Required</sup> <a name="message_format_version" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion"></a>

```python
message_format_version: str
```

- *Type:* str

---

##### `message_timestamp_difference_max_ms`<sup>Required</sup> <a name="message_timestamp_difference_max_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs"></a>

```python
message_timestamp_difference_max_ms: str
```

- *Type:* str

---

##### `message_timestamp_type`<sup>Required</sup> <a name="message_timestamp_type" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType"></a>

```python
message_timestamp_type: str
```

- *Type:* str

---

##### `min_cleanable_dirty_ratio`<sup>Required</sup> <a name="min_cleanable_dirty_ratio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio"></a>

```python
min_cleanable_dirty_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_compaction_lag_ms`<sup>Required</sup> <a name="min_compaction_lag_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs"></a>

```python
min_compaction_lag_ms: str
```

- *Type:* str

---

##### `min_insync_replicas`<sup>Required</sup> <a name="min_insync_replicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas"></a>

```python
min_insync_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preallocate`<sup>Required</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate"></a>

```python
preallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_bytes`<sup>Required</sup> <a name="retention_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes"></a>

```python
retention_bytes: str
```

- *Type:* str

---

##### `retention_ms`<sup>Required</sup> <a name="retention_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs"></a>

```python
retention_ms: str
```

- *Type:* str

---

##### `segment_bytes`<sup>Required</sup> <a name="segment_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes"></a>

```python
segment_bytes: str
```

- *Type:* str

---

##### `segment_index_bytes`<sup>Required</sup> <a name="segment_index_bytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes"></a>

```python
segment_index_bytes: str
```

- *Type:* str

---

##### `segment_jitter_ms`<sup>Required</sup> <a name="segment_jitter_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs"></a>

```python
segment_jitter_ms: str
```

- *Type:* str

---

##### `segment_ms`<sup>Required</sup> <a name="segment_ms" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs"></a>

```python
segment_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseKafkaTopicConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>]

---



