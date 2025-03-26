# `dropletAutoscale` Submodule <a name="`dropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DropletAutoscale <a name="DropletAutoscale" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscale(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: DropletAutoscaleConfigA,
  droplet_template: DropletAutoscaleDropletTemplate,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dropletTemplate">droplet_template</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | droplet_template block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Droplet autoscale pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#config DropletAutoscale#config}

---

##### `droplet_template`<sup>Required</sup> <a name="droplet_template" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.dropletTemplate"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

droplet_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.name"></a>

- *Type:* str

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#name DropletAutoscale#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate">put_droplet_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig"></a>

```python
def put_config(
  cooldown_minutes: typing.Union[int, float] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_memory_utilization: typing.Union[int, float] = None,
  target_number_instances: typing.Union[int, float] = None
) -> None
```

###### `cooldown_minutes`<sup>Optional</sup> <a name="cooldown_minutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.cooldownMinutes"></a>

- *Type:* typing.Union[int, float]

Cooldown duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#cooldown_minutes DropletAutoscale#cooldown_minutes}

---

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Max number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#max_instances DropletAutoscale#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Min number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#min_instances DropletAutoscale#min_instances}

---

###### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.targetCpuUtilization"></a>

- *Type:* typing.Union[int, float]

CPU target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_cpu_utilization DropletAutoscale#target_cpu_utilization}

---

###### `target_memory_utilization`<sup>Optional</sup> <a name="target_memory_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.targetMemoryUtilization"></a>

- *Type:* typing.Union[int, float]

Memory target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_memory_utilization DropletAutoscale#target_memory_utilization}

---

###### `target_number_instances`<sup>Optional</sup> <a name="target_number_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.targetNumberInstances"></a>

- *Type:* typing.Union[int, float]

Target number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_number_instances DropletAutoscale#target_number_instances}

---

##### `put_droplet_template` <a name="put_droplet_template" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate"></a>

```python
def put_droplet_template(
  image: str,
  region: str,
  size: str,
  ssh_keys: typing.List[str],
  ipv6: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  tags: typing.List[str] = None,
  user_data: str = None,
  vpc_uuid: str = None,
  with_droplet_agent: typing.Union[bool, IResolvable] = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.image"></a>

- *Type:* str

Droplet image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#image DropletAutoscale#image}

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.region"></a>

- *Type:* str

Droplet region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#region DropletAutoscale#region}

---

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.size"></a>

- *Type:* str

Droplet size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#size DropletAutoscale#size}

---

###### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Droplet SSH keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#ssh_keys DropletAutoscale#ssh_keys}

---

###### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.ipv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable droplet IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#ipv6 DropletAutoscale#ipv6}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.projectId"></a>

- *Type:* str

Droplet project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#project_id DropletAutoscale#project_id}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.tags"></a>

- *Type:* typing.List[str]

Droplet tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#tags DropletAutoscale#tags}

---

###### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.userData"></a>

- *Type:* str

Droplet user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#user_data DropletAutoscale#user_data}

---

###### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.vpcUuid"></a>

- *Type:* str

Droplet VPC UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#vpc_uuid DropletAutoscale#vpc_uuid}

---

###### `with_droplet_agent`<sup>Optional</sup> <a name="with_droplet_agent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.withDropletAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable droplet agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#with_droplet_agent DropletAutoscale#with_droplet_agent}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscale.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscale.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscale.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscale.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DropletAutoscale to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization">current_utilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate">droplet_template</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput">droplet_template_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config"></a>

```python
config: DropletAutoscaleConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `current_utilization`<sup>Required</sup> <a name="current_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization"></a>

```python
current_utilization: DropletAutoscaleCurrentUtilizationList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a>

---

##### `droplet_template`<sup>Required</sup> <a name="droplet_template" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate"></a>

```python
droplet_template: DropletAutoscaleDropletTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput"></a>

```python
config_input: DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---

##### `droplet_template_input`<sup>Optional</sup> <a name="droplet_template_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput"></a>

```python
droplet_template_input: DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DropletAutoscaleConfig <a name="DropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: DropletAutoscaleConfigA,
  droplet_template: DropletAutoscaleDropletTemplate,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate">droplet_template</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | droplet_template block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name">name</a></code> | <code>str</code> | Name of the Droplet autoscale pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config"></a>

```python
config: DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#config DropletAutoscale#config}

---

##### `droplet_template`<sup>Required</sup> <a name="droplet_template" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate"></a>

```python
droplet_template: DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

droplet_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#name DropletAutoscale#name}

---

### DropletAutoscaleConfigA <a name="DropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleConfigA(
  cooldown_minutes: typing.Union[int, float] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_memory_utilization: typing.Union[int, float] = None,
  target_number_instances: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes">cooldown_minutes</a></code> | <code>typing.Union[int, float]</code> | Cooldown duration. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Max number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Min number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | CPU target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization">target_memory_utilization</a></code> | <code>typing.Union[int, float]</code> | Memory target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances">target_number_instances</a></code> | <code>typing.Union[int, float]</code> | Target number of members. |

---

##### `cooldown_minutes`<sup>Optional</sup> <a name="cooldown_minutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes"></a>

```python
cooldown_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Cooldown duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#cooldown_minutes DropletAutoscale#cooldown_minutes}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#max_instances DropletAutoscale#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#min_instances DropletAutoscale#min_instances}

---

##### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_cpu_utilization DropletAutoscale#target_cpu_utilization}

---

##### `target_memory_utilization`<sup>Optional</sup> <a name="target_memory_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization"></a>

```python
target_memory_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_memory_utilization DropletAutoscale#target_memory_utilization}

---

##### `target_number_instances`<sup>Optional</sup> <a name="target_number_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances"></a>

```python
target_number_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#target_number_instances DropletAutoscale#target_number_instances}

---

### DropletAutoscaleCurrentUtilization <a name="DropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleCurrentUtilization()
```


### DropletAutoscaleDropletTemplate <a name="DropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleDropletTemplate(
  image: str,
  region: str,
  size: str,
  ssh_keys: typing.List[str],
  ipv6: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  tags: typing.List[str] = None,
  user_data: str = None,
  vpc_uuid: str = None,
  with_droplet_agent: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image">image</a></code> | <code>str</code> | Droplet image. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region">region</a></code> | <code>str</code> | Droplet region. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size">size</a></code> | <code>str</code> | Droplet size. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Droplet SSH keys. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6">ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable droplet IPv6. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId">project_id</a></code> | <code>str</code> | Droplet project ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags">tags</a></code> | <code>typing.List[str]</code> | Droplet tags. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData">user_data</a></code> | <code>str</code> | Droplet user data. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | Droplet VPC UUID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent">with_droplet_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable droplet agent. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image"></a>

```python
image: str
```

- *Type:* str

Droplet image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#image DropletAutoscale#image}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

Droplet region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#region DropletAutoscale#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size"></a>

```python
size: str
```

- *Type:* str

Droplet size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#size DropletAutoscale#size}

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Droplet SSH keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#ssh_keys DropletAutoscale#ssh_keys}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6"></a>

```python
ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable droplet IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#ipv6 DropletAutoscale#ipv6}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Droplet project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#project_id DropletAutoscale#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Droplet tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#tags DropletAutoscale#tags}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Droplet user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#user_data DropletAutoscale#user_data}

---

##### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

Droplet VPC UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#vpc_uuid DropletAutoscale#vpc_uuid}

---

##### `with_droplet_agent`<sup>Optional</sup> <a name="with_droplet_agent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent"></a>

```python
with_droplet_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable droplet agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/droplet_autoscale#with_droplet_agent DropletAutoscale#with_droplet_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DropletAutoscaleConfigAOutputReference <a name="DropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes">reset_cooldown_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization">reset_target_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization">reset_target_memory_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances">reset_target_number_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_minutes` <a name="reset_cooldown_minutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes"></a>

```python
def reset_cooldown_minutes() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_target_cpu_utilization` <a name="reset_target_cpu_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization"></a>

```python
def reset_target_cpu_utilization() -> None
```

##### `reset_target_memory_utilization` <a name="reset_target_memory_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization"></a>

```python
def reset_target_memory_utilization() -> None
```

##### `reset_target_number_instances` <a name="reset_target_number_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances"></a>

```python
def reset_target_number_instances() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput">cooldown_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput">target_cpu_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput">target_memory_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput">target_number_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes">cooldown_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">target_memory_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances">target_number_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_minutes_input`<sup>Optional</sup> <a name="cooldown_minutes_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput"></a>

```python
cooldown_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization_input`<sup>Optional</sup> <a name="target_cpu_utilization_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput"></a>

```python
target_cpu_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_memory_utilization_input`<sup>Optional</sup> <a name="target_memory_utilization_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput"></a>

```python
target_memory_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_number_instances_input`<sup>Optional</sup> <a name="target_number_instances_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput"></a>

```python
target_number_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_minutes`<sup>Required</sup> <a name="cooldown_minutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```python
cooldown_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization`<sup>Required</sup> <a name="target_cpu_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_memory_utilization`<sup>Required</sup> <a name="target_memory_utilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```python
target_memory_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_number_instances`<sup>Required</sup> <a name="target_number_instances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```python
target_number_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---


### DropletAutoscaleCurrentUtilizationList <a name="DropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleCurrentUtilizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DropletAutoscaleCurrentUtilizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DropletAutoscaleCurrentUtilizationOutputReference <a name="DropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: DropletAutoscaleCurrentUtilization
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a>

---


### DropletAutoscaleDropletTemplateOutputReference <a name="DropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import droplet_autoscale

dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid">reset_vpc_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent">reset_with_droplet_agent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_vpc_uuid` <a name="reset_vpc_uuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid"></a>

```python
def reset_vpc_uuid() -> None
```

##### `reset_with_droplet_agent` <a name="reset_with_droplet_agent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent"></a>

```python
def reset_with_droplet_agent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput">vpc_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput">with_droplet_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6">ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">with_droplet_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input"></a>

```python
ipv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vpc_uuid_input`<sup>Optional</sup> <a name="vpc_uuid_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput"></a>

```python
vpc_uuid_input: str
```

- *Type:* str

---

##### `with_droplet_agent_input`<sup>Optional</sup> <a name="with_droplet_agent_input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput"></a>

```python
with_droplet_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```python
ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

##### `with_droplet_agent`<sup>Required</sup> <a name="with_droplet_agent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```python
with_droplet_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---



