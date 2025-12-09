# `genaiIndexingJobCancel` Submodule <a name="`genaiIndexingJobCancel` Submodule" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiIndexingJobCancel <a name="GenaiIndexingJobCancel" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel digitalocean_genai_indexing_job_cancel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  uuid: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | The UUID of the indexing job to cancel. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.uuid"></a>

- *Type:* str

The UUID of the indexing job to cancel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#uuid GenaiIndexingJobCancel#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenaiIndexingJobCancel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenaiIndexingJobCancel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiIndexingJobCancel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed">total_items_failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed">total_items_indexed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped">total_items_skipped</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `completed_datasources`<sup>Required</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_uuids`<sup>Required</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources`<sup>Required</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_items_failed`<sup>Required</sup> <a name="total_items_failed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed"></a>

```python
total_items_failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_items_indexed`<sup>Required</sup> <a name="total_items_indexed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed"></a>

```python
total_items_indexed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_items_skipped`<sup>Required</sup> <a name="total_items_skipped" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped"></a>

```python
total_items_skipped: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiIndexingJobCancelConfig <a name="GenaiIndexingJobCancelConfig" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_indexing_job_cancel

genaiIndexingJobCancel.GenaiIndexingJobCancelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  uuid: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid">uuid</a></code> | <code>str</code> | The UUID of the indexing job to cancel. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

The UUID of the indexing job to cancel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#uuid GenaiIndexingJobCancel#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



