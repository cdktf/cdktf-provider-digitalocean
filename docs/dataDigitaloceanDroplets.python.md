# `dataDigitaloceanDroplets` Submodule <a name="`dataDigitaloceanDroplets` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDroplets <a name="DataDigitaloceanDroplets" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets digitalocean_droplets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDroplets(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataDigitaloceanDropletsFilter] = None,
  gpus: bool | IResolvable = None,
  id: str = None,
  sort: IResolvable | typing.List[DataDigitaloceanDropletsSort] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.gpus">gpus</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#gpus DataDigitaloceanDroplets#gpus}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#id DataDigitaloceanDroplets#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.sort">sort</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]</code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.filter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#filter DataDigitaloceanDroplets#filter}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.gpus"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#gpus DataDigitaloceanDroplets#gpus}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#id DataDigitaloceanDroplets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.Initializer.parameter.sort"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#sort DataDigitaloceanDroplets#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putSort">put_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetGpus">reset_gpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetSort">reset_sort</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataDigitaloceanDropletsFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]

---

##### `put_sort` <a name="put_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putSort"></a>

```python
def put_sort(
  value: IResolvable | typing.List[DataDigitaloceanDropletsSort]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.putSort.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_gpus` <a name="reset_gpus" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetGpus"></a>

```python
def reset_gpus() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.resetSort"></a>

```python
def reset_sort() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanDroplets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDroplets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDroplets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDroplets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDroplets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanDroplets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanDroplets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanDroplets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDroplets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.droplets">droplets</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList">DataDigitaloceanDropletsDropletsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList">DataDigitaloceanDropletsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList">DataDigitaloceanDropletsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.gpusInput">gpus_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.sortInput">sort_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.gpus">gpus</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `droplets`<sup>Required</sup> <a name="droplets" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.droplets"></a>

```python
droplets: DataDigitaloceanDropletsDropletsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList">DataDigitaloceanDropletsDropletsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.filter"></a>

```python
filter: DataDigitaloceanDropletsFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList">DataDigitaloceanDropletsFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.sort"></a>

```python
sort: DataDigitaloceanDropletsSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList">DataDigitaloceanDropletsSortList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataDigitaloceanDropletsFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]

---

##### `gpus_input`<sup>Optional</sup> <a name="gpus_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.gpusInput"></a>

```python
gpus_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.sortInput"></a>

```python
sort_input: IResolvable | typing.List[DataDigitaloceanDropletsSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.gpus"></a>

```python
gpus: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDroplets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletsConfig <a name="DataDigitaloceanDropletsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataDigitaloceanDropletsFilter] = None,
  gpus: bool | IResolvable = None,
  id: str = None,
  sort: IResolvable | typing.List[DataDigitaloceanDropletsSort] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.gpus">gpus</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#gpus DataDigitaloceanDroplets#gpus}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#id DataDigitaloceanDroplets#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.sort">sort</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataDigitaloceanDropletsFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#filter DataDigitaloceanDroplets#filter}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.gpus"></a>

```python
gpus: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#gpus DataDigitaloceanDroplets#gpus}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#id DataDigitaloceanDroplets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsConfig.property.sort"></a>

```python
sort: IResolvable | typing.List[DataDigitaloceanDropletsSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#sort DataDigitaloceanDroplets#sort}

---

### DataDigitaloceanDropletsDroplets <a name="DataDigitaloceanDropletsDroplets" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDroplets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDroplets.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsDroplets()
```


### DataDigitaloceanDropletsFilter <a name="DataDigitaloceanDropletsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter(
  key: str,
  values: typing.List[str],
  all: bool | IResolvable = None,
  match_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#key DataDigitaloceanDroplets#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#values DataDigitaloceanDroplets#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.all">all</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#all DataDigitaloceanDroplets#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.matchBy">match_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#match_by DataDigitaloceanDroplets#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#key DataDigitaloceanDroplets#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#values DataDigitaloceanDroplets#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#all DataDigitaloceanDroplets#all}.

---

##### `match_by`<sup>Optional</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#match_by DataDigitaloceanDroplets#match_by}.

---

### DataDigitaloceanDropletsSort <a name="DataDigitaloceanDropletsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsSort(
  key: str,
  direction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#key DataDigitaloceanDroplets#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#direction DataDigitaloceanDroplets#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#key DataDigitaloceanDroplets#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/droplets#direction DataDigitaloceanDroplets#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDropletsDropletsList <a name="DataDigitaloceanDropletsDropletsList" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletsDropletsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanDropletsDropletsOutputReference <a name="DataDigitaloceanDropletsDropletsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.backups">backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.disk">disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv4AddressPrivate">ipv4_address_private</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6">ipv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6AddressPrivate">ipv6_address_private</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.locked">locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.monitoring">monitoring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.priceHourly">price_hourly</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.priceMonthly">price_monthly</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.privateNetworking">private_networking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDroplets">DataDigitaloceanDropletsDroplets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.backups"></a>

```python
backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.disk"></a>

```python
disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv4_address_private`<sup>Required</sup> <a name="ipv4_address_private" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv4AddressPrivate"></a>

```python
ipv4_address_private: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6"></a>

```python
ipv6: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_address_private`<sup>Required</sup> <a name="ipv6_address_private" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.ipv6AddressPrivate"></a>

```python
ipv6_address_private: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.locked"></a>

```python
locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.monitoring"></a>

```python
monitoring: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `price_hourly`<sup>Required</sup> <a name="price_hourly" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.priceHourly"></a>

```python
price_hourly: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `price_monthly`<sup>Required</sup> <a name="price_monthly" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.priceMonthly"></a>

```python
price_monthly: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_networking`<sup>Required</sup> <a name="private_networking" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.privateNetworking"></a>

```python
private_networking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_ids`<sup>Required</sup> <a name="volume_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.volumeIds"></a>

```python
volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDropletsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanDropletsDroplets
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsDroplets">DataDigitaloceanDropletsDroplets</a>

---


### DataDigitaloceanDropletsFilterList <a name="DataDigitaloceanDropletsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDigitaloceanDropletsFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>]

---


### DataDigitaloceanDropletsFilterOutputReference <a name="DataDigitaloceanDropletsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resetMatchBy">reset_match_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_match_by` <a name="reset_match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.resetMatchBy"></a>

```python
def reset_match_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.allInput">all_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.matchByInput">match_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.all">all</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.matchBy">match_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.allInput"></a>

```python
all_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_by_input`<sup>Optional</sup> <a name="match_by_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.matchByInput"></a>

```python
match_by_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_by`<sup>Required</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDigitaloceanDropletsFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsFilter">DataDigitaloceanDropletsFilter</a>

---


### DataDigitaloceanDropletsSortList <a name="DataDigitaloceanDropletsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletsSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDigitaloceanDropletsSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>]

---


### DataDigitaloceanDropletsSortOutputReference <a name="DataDigitaloceanDropletsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplets

dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.resetDirection">reset_direction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSortOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDigitaloceanDropletsSort
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDroplets.DataDigitaloceanDropletsSort">DataDigitaloceanDropletsSort</a>

---



