# `genaiAgentRoute` Submodule <a name="`genaiAgentRoute` Submodule" id="@cdktf/provider-digitalocean.genaiAgentRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiAgentRoute <a name="GenaiAgentRoute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route digitalocean_genai_agent_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  child_agent_uuid: str,
  parent_agent_uuid: str,
  id: str = None,
  if_case: str = None,
  rollback: typing.Union[bool, IResolvable] = None,
  route_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.childAgentUuid">child_agent_uuid</a></code> | <code>str</code> | The UUID of the child agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.parentAgentUuid">parent_agent_uuid</a></code> | <code>str</code> | The UUID of the parent agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.ifCase">if_case</a></code> | <code>str</code> | if-case condition for the route. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.routeName">route_name</a></code> | <code>str</code> | A name for the route. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `child_agent_uuid`<sup>Required</sup> <a name="child_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.childAgentUuid"></a>

- *Type:* str

The UUID of the child agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}

---

##### `parent_agent_uuid`<sup>Required</sup> <a name="parent_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.parentAgentUuid"></a>

- *Type:* str

The UUID of the parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_case`<sup>Optional</sup> <a name="if_case" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.ifCase"></a>

- *Type:* str

if-case condition for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.rollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}.

---

##### `route_name`<sup>Optional</sup> <a name="route_name" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.routeName"></a>

- *Type:* str

A name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase">reset_if_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback">reset_rollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName">reset_route_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_if_case` <a name="reset_if_case" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase"></a>

```python
def reset_if_case() -> None
```

##### `reset_rollback` <a name="reset_rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback"></a>

```python
def reset_rollback() -> None
```

##### `reset_route_name` <a name="reset_route_name" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName"></a>

```python
def reset_route_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenaiAgentRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenaiAgentRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiAgentRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput">child_agent_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput">if_case_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput">parent_agent_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput">rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput">route_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid">child_agent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase">if_case</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid">parent_agent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName">route_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `child_agent_uuid_input`<sup>Optional</sup> <a name="child_agent_uuid_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput"></a>

```python
child_agent_uuid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `if_case_input`<sup>Optional</sup> <a name="if_case_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput"></a>

```python
if_case_input: str
```

- *Type:* str

---

##### `parent_agent_uuid_input`<sup>Optional</sup> <a name="parent_agent_uuid_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput"></a>

```python
parent_agent_uuid_input: str
```

- *Type:* str

---

##### `rollback_input`<sup>Optional</sup> <a name="rollback_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput"></a>

```python
rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_name_input`<sup>Optional</sup> <a name="route_name_input" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput"></a>

```python
route_name_input: str
```

- *Type:* str

---

##### `child_agent_uuid`<sup>Required</sup> <a name="child_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid"></a>

```python
child_agent_uuid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `if_case`<sup>Required</sup> <a name="if_case" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase"></a>

```python
if_case: str
```

- *Type:* str

---

##### `parent_agent_uuid`<sup>Required</sup> <a name="parent_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid"></a>

```python
parent_agent_uuid: str
```

- *Type:* str

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_name`<sup>Required</sup> <a name="route_name" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName"></a>

```python
route_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiAgentRouteConfig <a name="GenaiAgentRouteConfig" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_agent_route

genaiAgentRoute.GenaiAgentRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  child_agent_uuid: str,
  parent_agent_uuid: str,
  id: str = None,
  if_case: str = None,
  rollback: typing.Union[bool, IResolvable] = None,
  route_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid">child_agent_uuid</a></code> | <code>str</code> | The UUID of the child agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid">parent_agent_uuid</a></code> | <code>str</code> | The UUID of the parent agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase">if_case</a></code> | <code>str</code> | if-case condition for the route. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName">route_name</a></code> | <code>str</code> | A name for the route. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `child_agent_uuid`<sup>Required</sup> <a name="child_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid"></a>

```python
child_agent_uuid: str
```

- *Type:* str

The UUID of the child agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}

---

##### `parent_agent_uuid`<sup>Required</sup> <a name="parent_agent_uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid"></a>

```python
parent_agent_uuid: str
```

- *Type:* str

The UUID of the parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_case`<sup>Optional</sup> <a name="if_case" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase"></a>

```python
if_case: str
```

- *Type:* str

if-case condition for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}.

---

##### `route_name`<sup>Optional</sup> <a name="route_name" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName"></a>

```python
route_name: str
```

- *Type:* str

A name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}

---



