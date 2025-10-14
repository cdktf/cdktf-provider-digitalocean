# `dataDigitaloceanGenaiOpenaiApiKeys` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKeys` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys digitalocean_genai_openai_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter] = None,
  id: str = None,
  sort: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.sort">sort</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]</code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.filter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#filter DataDigitaloceanGenaiOpenaiApiKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.sort"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#sort DataDigitaloceanGenaiOpenaiApiKeys#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort">put_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort">reset_sort</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]

---

##### `put_sort` <a name="put_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort"></a>

```python
def put_sort(
  value: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort"></a>

```python
def reset_sort() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiOpenaiApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys">openai_api_keys</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput">sort_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter"></a>

```python
filter: DataDigitaloceanGenaiOpenaiApiKeysFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a>

---

##### `openai_api_keys`<sup>Required</sup> <a name="openai_api_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys"></a>

```python
openai_api_keys: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort"></a>

```python
sort: DataDigitaloceanGenaiOpenaiApiKeysSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput"></a>

```python
sort_input: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeysConfig <a name="DataDigitaloceanGenaiOpenaiApiKeysConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter] = None,
  id: str = None,
  sort: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort">sort</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#filter DataDigitaloceanGenaiOpenaiApiKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort"></a>

```python
sort: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#sort DataDigitaloceanGenaiOpenaiApiKeys#sort}

---

### DataDigitaloceanGenaiOpenaiApiKeysFilter <a name="DataDigitaloceanGenaiOpenaiApiKeysFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter(
  key: str,
  values: typing.List[str],
  all: bool | IResolvable = None,
  match_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all">all</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy">match_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}.

---

##### `match_by`<sup>Optional</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}.

---

### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys()
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels()
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement()
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions()
```


### DataDigitaloceanGenaiOpenaiApiKeysSort <a name="DataDigitaloceanGenaiOpenaiApiKeysSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort(
  key: str,
  direction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeysFilterList <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>]

---


### DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy">reset_match_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_match_by` <a name="reset_match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy"></a>

```python
def reset_match_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput">all_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput">match_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all">all</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy">match_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput"></a>

```python
all_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_by_input`<sup>Optional</sup> <a name="match_by_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput"></a>

```python
match_by_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_by`<sup>Required</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter">DataDigitaloceanGenaiOpenaiApiKeysFilter</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName">inference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion">inference_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational">is_foundational</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid">parent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete">upload_complete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases">usecases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement"></a>

```python
agreement: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `inference_name`<sup>Required</sup> <a name="inference_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName"></a>

```python
inference_name: str
```

- *Type:* str

---

##### `inference_version`<sup>Required</sup> <a name="inference_version" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion"></a>

```python
inference_version: str
```

- *Type:* str

---

##### `is_foundational`<sup>Required</sup> <a name="is_foundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational"></a>

```python
is_foundational: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_uuid`<sup>Required</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `upload_complete`<sup>Required</sup> <a name="upload_complete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete"></a>

```python
upload_complete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases"></a>

```python
usecases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions"></a>

```python
versions: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major">major</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor">minor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch">patch</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major"></a>

```python
major: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor"></a>

```python
minor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch"></a>

```python
patch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models">models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models"></a>

```python
models: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysSortList <a name="DataDigitaloceanGenaiOpenaiApiKeysSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDigitaloceanGenaiOpenaiApiKeysSort]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>]

---


### DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_keys

dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection">reset_direction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDigitaloceanGenaiOpenaiApiKeysSort
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort">DataDigitaloceanGenaiOpenaiApiKeysSort</a>

---



