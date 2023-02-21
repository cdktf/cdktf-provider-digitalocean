# `volume` Submodule <a name="`volume` Submodule" id="@cdktf/provider-digitalocean.volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Volume <a name="Volume" id="@cdktf/provider-digitalocean.volume.Volume"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/volume digitalocean_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.volume.Volume.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import volume

volume.Volume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  size: typing.Union[int, float],
  description: str = None,
  filesystem_type: str = None,
  id: str = None,
  initial_filesystem_label: str = None,
  initial_filesystem_type: str = None,
  snapshot_id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#name Volume#name}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#region Volume#region}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#size Volume#size}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#description Volume#description}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.filesystemType">filesystem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#filesystem_type Volume#filesystem_type}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.initialFilesystemLabel">initial_filesystem_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_label Volume#initial_filesystem_label}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.initialFilesystemType">initial_filesystem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_type Volume#initial_filesystem_type}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#snapshot_id Volume#snapshot_id}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#tags Volume#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#name Volume#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#region Volume#region}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#size Volume#size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#description Volume#description}.

---

##### `filesystem_type`<sup>Optional</sup> <a name="filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.filesystemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#filesystem_type Volume#filesystem_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_filesystem_label`<sup>Optional</sup> <a name="initial_filesystem_label" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.initialFilesystemLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_label Volume#initial_filesystem_label}.

---

##### `initial_filesystem_type`<sup>Optional</sup> <a name="initial_filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.initialFilesystemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_type Volume#initial_filesystem_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#snapshot_id Volume#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.volume.Volume.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#tags Volume#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetFilesystemType">reset_filesystem_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetInitialFilesystemLabel">reset_initial_filesystem_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetInitialFilesystemType">reset_initial_filesystem_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.volume.Volume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.volume.Volume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.volume.Volume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.volume.Volume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.volume.Volume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.volume.Volume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.volume.Volume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.volume.Volume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.volume.Volume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-digitalocean.volume.Volume.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filesystem_type` <a name="reset_filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.resetFilesystemType"></a>

```python
def reset_filesystem_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.volume.Volume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_filesystem_label` <a name="reset_initial_filesystem_label" id="@cdktf/provider-digitalocean.volume.Volume.resetInitialFilesystemLabel"></a>

```python
def reset_initial_filesystem_label() -> None
```

##### `reset_initial_filesystem_type` <a name="reset_initial_filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.resetInitialFilesystemType"></a>

```python
def reset_initial_filesystem_type() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-digitalocean.volume.Volume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.volume.Volume.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.volume.Volume.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import volume

volume.Volume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.volume.Volume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import volume

volume.Volume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.volume.Volume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import volume

volume.Volume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.filesystemLabel">filesystem_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.filesystemTypeInput">filesystem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemLabelInput">initial_filesystem_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemTypeInput">initial_filesystem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.filesystemType">filesystem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemLabel">initial_filesystem_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemType">initial_filesystem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.volume.Volume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.volume.Volume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.volume.Volume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.volume.Volume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.volume.Volume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.volume.Volume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.volume.Volume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.volume.Volume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.volume.Volume.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.volume.Volume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.volume.Volume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.volume.Volume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.volume.Volume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.volume.Volume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `droplet_ids`<sup>Required</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.volume.Volume.property.dropletIds"></a>

```python
droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `filesystem_label`<sup>Required</sup> <a name="filesystem_label" id="@cdktf/provider-digitalocean.volume.Volume.property.filesystemLabel"></a>

```python
filesystem_label: str
```

- *Type:* str

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.volume.Volume.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-digitalocean.volume.Volume.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filesystem_type_input`<sup>Optional</sup> <a name="filesystem_type_input" id="@cdktf/provider-digitalocean.volume.Volume.property.filesystemTypeInput"></a>

```python
filesystem_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.volume.Volume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_filesystem_label_input`<sup>Optional</sup> <a name="initial_filesystem_label_input" id="@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemLabelInput"></a>

```python
initial_filesystem_label_input: str
```

- *Type:* str

---

##### `initial_filesystem_type_input`<sup>Optional</sup> <a name="initial_filesystem_type_input" id="@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemTypeInput"></a>

```python
initial_filesystem_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.volume.Volume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.volume.Volume.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-digitalocean.volume.Volume.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-digitalocean.volume.Volume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.volume.Volume.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.volume.Volume.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filesystem_type`<sup>Required</sup> <a name="filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.property.filesystemType"></a>

```python
filesystem_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.volume.Volume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_filesystem_label`<sup>Required</sup> <a name="initial_filesystem_label" id="@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemLabel"></a>

```python
initial_filesystem_label: str
```

- *Type:* str

---

##### `initial_filesystem_type`<sup>Required</sup> <a name="initial_filesystem_type" id="@cdktf/provider-digitalocean.volume.Volume.property.initialFilesystemType"></a>

```python
initial_filesystem_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.volume.Volume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.volume.Volume.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.volume.Volume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-digitalocean.volume.Volume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.volume.Volume.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.Volume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.volume.Volume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-digitalocean.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.volume.VolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import volume

volume.VolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  size: typing.Union[int, float],
  description: str = None,
  filesystem_type: str = None,
  id: str = None,
  initial_filesystem_label: str = None,
  initial_filesystem_type: str = None,
  snapshot_id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#name Volume#name}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#region Volume#region}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#size Volume#size}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#description Volume#description}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.filesystemType">filesystem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#filesystem_type Volume#filesystem_type}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.initialFilesystemLabel">initial_filesystem_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_label Volume#initial_filesystem_label}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.initialFilesystemType">initial_filesystem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_type Volume#initial_filesystem_type}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#snapshot_id Volume#snapshot_id}. |
| <code><a href="#@cdktf/provider-digitalocean.volume.VolumeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#tags Volume#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#name Volume#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#region Volume#region}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#size Volume#size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#description Volume#description}.

---

##### `filesystem_type`<sup>Optional</sup> <a name="filesystem_type" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.filesystemType"></a>

```python
filesystem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#filesystem_type Volume#filesystem_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_filesystem_label`<sup>Optional</sup> <a name="initial_filesystem_label" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.initialFilesystemLabel"></a>

```python
initial_filesystem_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_label Volume#initial_filesystem_label}.

---

##### `initial_filesystem_type`<sup>Optional</sup> <a name="initial_filesystem_type" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.initialFilesystemType"></a>

```python
initial_filesystem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#initial_filesystem_type Volume#initial_filesystem_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#snapshot_id Volume#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.volume.VolumeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/volume#tags Volume#tags}.

---



