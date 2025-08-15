# `dataDigitaloceanSpacesBuckets` Submodule <a name="`dataDigitaloceanSpacesBuckets` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesBuckets <a name="DataDigitaloceanSpacesBuckets" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets digitalocean_spaces_buckets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]] = None,
  id: str = None,
  sort: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#id DataDigitaloceanSpacesBuckets#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.sort">sort</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]</code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#filter DataDigitaloceanSpacesBuckets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#id DataDigitaloceanSpacesBuckets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.Initializer.parameter.sort"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#sort DataDigitaloceanSpacesBuckets#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putSort">put_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetSort">reset_sort</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]

---

##### `put_sort` <a name="put_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putSort"></a>

```python
def put_sort(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.putSort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.resetSort"></a>

```python
def reset_sort() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesBuckets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanSpacesBuckets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanSpacesBuckets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanSpacesBuckets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesBuckets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList">DataDigitaloceanSpacesBucketsBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList">DataDigitaloceanSpacesBucketsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList">DataDigitaloceanSpacesBucketsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.sortInput">sort_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.buckets"></a>

```python
buckets: DataDigitaloceanSpacesBucketsBucketsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList">DataDigitaloceanSpacesBucketsBucketsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.filter"></a>

```python
filter: DataDigitaloceanSpacesBucketsFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList">DataDigitaloceanSpacesBucketsFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.sort"></a>

```python
sort: DataDigitaloceanSpacesBucketsSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList">DataDigitaloceanSpacesBucketsSortList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.sortInput"></a>

```python
sort_input: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBuckets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesBucketsBuckets <a name="DataDigitaloceanSpacesBucketsBuckets" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBuckets()
```


### DataDigitaloceanSpacesBucketsConfig <a name="DataDigitaloceanSpacesBucketsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]] = None,
  id: str = None,
  sort: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#id DataDigitaloceanSpacesBuckets#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.sort">sort</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#filter DataDigitaloceanSpacesBuckets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#id DataDigitaloceanSpacesBuckets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsConfig.property.sort"></a>

```python
sort: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#sort DataDigitaloceanSpacesBuckets#sort}

---

### DataDigitaloceanSpacesBucketsFilter <a name="DataDigitaloceanSpacesBucketsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter(
  key: str,
  values: typing.List[str],
  all: typing.Union[bool, IResolvable] = None,
  match_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#key DataDigitaloceanSpacesBuckets#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#values DataDigitaloceanSpacesBuckets#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#all DataDigitaloceanSpacesBuckets#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.matchBy">match_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#match_by DataDigitaloceanSpacesBuckets#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#key DataDigitaloceanSpacesBuckets#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#values DataDigitaloceanSpacesBuckets#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#all DataDigitaloceanSpacesBuckets#all}.

---

##### `match_by`<sup>Optional</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#match_by DataDigitaloceanSpacesBuckets#match_by}.

---

### DataDigitaloceanSpacesBucketsSort <a name="DataDigitaloceanSpacesBucketsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort(
  key: str,
  direction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#key DataDigitaloceanSpacesBuckets#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#direction DataDigitaloceanSpacesBuckets#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#key DataDigitaloceanSpacesBuckets#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/spaces_buckets#direction DataDigitaloceanSpacesBuckets#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanSpacesBucketsBucketsList <a name="DataDigitaloceanSpacesBucketsBucketsList" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanSpacesBucketsBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanSpacesBucketsBucketsOutputReference <a name="DataDigitaloceanSpacesBucketsBucketsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBuckets">DataDigitaloceanSpacesBucketsBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanSpacesBucketsBuckets
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsBuckets">DataDigitaloceanSpacesBucketsBuckets</a>

---


### DataDigitaloceanSpacesBucketsFilterList <a name="DataDigitaloceanSpacesBucketsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanSpacesBucketsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]]

---


### DataDigitaloceanSpacesBucketsFilterOutputReference <a name="DataDigitaloceanSpacesBucketsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resetMatchBy">reset_match_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_match_by` <a name="reset_match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.resetMatchBy"></a>

```python
def reset_match_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.matchByInput">match_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.matchBy">match_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_by_input`<sup>Optional</sup> <a name="match_by_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.matchByInput"></a>

```python
match_by_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_by`<sup>Required</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanSpacesBucketsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsFilter">DataDigitaloceanSpacesBucketsFilter</a>]

---


### DataDigitaloceanSpacesBucketsSortList <a name="DataDigitaloceanSpacesBucketsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanSpacesBucketsSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanSpacesBucketsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]]

---


### DataDigitaloceanSpacesBucketsSortOutputReference <a name="DataDigitaloceanSpacesBucketsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_buckets

dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.resetDirection">reset_direction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanSpacesBucketsSort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBuckets.DataDigitaloceanSpacesBucketsSort">DataDigitaloceanSpacesBucketsSort</a>]

---



