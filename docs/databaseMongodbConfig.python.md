# `databaseMongodbConfig` Submodule <a name="`databaseMongodbConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMongodbConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMongodbConfig <a name="DatabaseMongodbConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config digitalocean_database_mongodb_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfig(
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
  default_read_concern: str = None,
  default_write_concern: str = None,
  id: str = None,
  slow_op_threshold_ms: typing.Union[int, float] = None,
  transaction_lifetime_limit_seconds: typing.Union[int, float] = None,
  verbosity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultReadConcern">default_read_concern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultWriteConcern">default_write_concern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.slowOpThresholdMs">slow_op_threshold_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.transactionLifetimeLimitSeconds">transaction_lifetime_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.verbosity">verbosity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `default_read_concern`<sup>Optional</sup> <a name="default_read_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultReadConcern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `default_write_concern`<sup>Optional</sup> <a name="default_write_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.defaultWriteConcern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `slow_op_threshold_ms`<sup>Optional</sup> <a name="slow_op_threshold_ms" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.slowOpThresholdMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `transaction_lifetime_limit_seconds`<sup>Optional</sup> <a name="transaction_lifetime_limit_seconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.transactionLifetimeLimitSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.verbosity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern">reset_default_read_concern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern">reset_default_write_concern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs">reset_slow_op_threshold_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds">reset_transaction_lifetime_limit_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity">reset_verbosity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_read_concern` <a name="reset_default_read_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern"></a>

```python
def reset_default_read_concern() -> None
```

##### `reset_default_write_concern` <a name="reset_default_write_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern"></a>

```python
def reset_default_write_concern() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_slow_op_threshold_ms` <a name="reset_slow_op_threshold_ms" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs"></a>

```python
def reset_slow_op_threshold_ms() -> None
```

##### `reset_transaction_lifetime_limit_seconds` <a name="reset_transaction_lifetime_limit_seconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds"></a>

```python
def reset_transaction_lifetime_limit_seconds() -> None
```

##### `reset_verbosity` <a name="reset_verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity"></a>

```python
def reset_verbosity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseMongodbConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseMongodbConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMongodbConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput">default_read_concern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput">default_write_concern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput">slow_op_threshold_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput">transaction_lifetime_limit_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput">verbosity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern">default_read_concern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern">default_write_concern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs">slow_op_threshold_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds">transaction_lifetime_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity">verbosity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `default_read_concern_input`<sup>Optional</sup> <a name="default_read_concern_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput"></a>

```python
default_read_concern_input: str
```

- *Type:* str

---

##### `default_write_concern_input`<sup>Optional</sup> <a name="default_write_concern_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput"></a>

```python
default_write_concern_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `slow_op_threshold_ms_input`<sup>Optional</sup> <a name="slow_op_threshold_ms_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput"></a>

```python
slow_op_threshold_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transaction_lifetime_limit_seconds_input`<sup>Optional</sup> <a name="transaction_lifetime_limit_seconds_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput"></a>

```python
transaction_lifetime_limit_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verbosity_input`<sup>Optional</sup> <a name="verbosity_input" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput"></a>

```python
verbosity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `default_read_concern`<sup>Required</sup> <a name="default_read_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern"></a>

```python
default_read_concern: str
```

- *Type:* str

---

##### `default_write_concern`<sup>Required</sup> <a name="default_write_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern"></a>

```python
default_write_concern: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `slow_op_threshold_ms`<sup>Required</sup> <a name="slow_op_threshold_ms" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs"></a>

```python
slow_op_threshold_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transaction_lifetime_limit_seconds`<sup>Required</sup> <a name="transaction_lifetime_limit_seconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds"></a>

```python
transaction_lifetime_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity"></a>

```python
verbosity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMongodbConfigConfig <a name="DatabaseMongodbConfigConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import database_mongodb_config

databaseMongodbConfig.DatabaseMongodbConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  default_read_concern: str = None,
  default_write_concern: str = None,
  id: str = None,
  slow_op_threshold_ms: typing.Union[int, float] = None,
  transaction_lifetime_limit_seconds: typing.Union[int, float] = None,
  verbosity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern">default_read_concern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern">default_write_concern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs">slow_op_threshold_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds">transaction_lifetime_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity">verbosity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `default_read_concern`<sup>Optional</sup> <a name="default_read_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern"></a>

```python
default_read_concern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `default_write_concern`<sup>Optional</sup> <a name="default_write_concern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern"></a>

```python
default_write_concern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `slow_op_threshold_ms`<sup>Optional</sup> <a name="slow_op_threshold_ms" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs"></a>

```python
slow_op_threshold_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `transaction_lifetime_limit_seconds`<sup>Optional</sup> <a name="transaction_lifetime_limit_seconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds"></a>

```python
transaction_lifetime_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity"></a>

```python
verbosity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---



