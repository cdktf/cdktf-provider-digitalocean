# `dataDigitaloceanGenaiAgentVersions` Submodule <a name="`dataDigitaloceanGenaiAgentVersions` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiAgentVersions <a name="DataDigitaloceanGenaiAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions digitalocean_genai_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]] = None,
  id: str = None,
  sort: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.sort">sort</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]</code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.agentId"></a>

- *Type:* str

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.sort"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort">put_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort">reset_sort</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]

---

##### `put_sort` <a name="put_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort"></a>

```python
def put_sort(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort"></a>

```python
def reset_sort() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiAgentVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions">agent_versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput">sort_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_versions`<sup>Required</sup> <a name="agent_versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions"></a>

```python
agent_versions: DataDigitaloceanGenaiAgentVersionsAgentVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter"></a>

```python
filter: DataDigitaloceanGenaiAgentVersionsFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort"></a>

```python
sort: DataDigitaloceanGenaiAgentVersionsSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput"></a>

```python
sort_input: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions()
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents()
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions()
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails()
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases()
```


### DataDigitaloceanGenaiAgentVersionsConfig <a name="DataDigitaloceanGenaiAgentVersionsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]] = None,
  id: str = None,
  sort: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId">agent_id</a></code> | <code>str</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort">sort</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]</code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort"></a>

```python
sort: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

### DataDigitaloceanGenaiAgentVersionsFilter <a name="DataDigitaloceanGenaiAgentVersionsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter(
  key: str,
  values: typing.List[str],
  all: typing.Union[bool, IResolvable] = None,
  match_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy">match_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}.

---

##### `match_by`<sup>Optional</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}.

---

### DataDigitaloceanGenaiAgentVersionsSort <a name="DataDigitaloceanGenaiAgentVersionsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort(
  key: str,
  direction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid">child_agent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase">if_case</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName">route_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `child_agent_uuid`<sup>Required</sup> <a name="child_agent_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid"></a>

```python
child_agent_uuid: str
```

- *Type:* str

---

##### `if_case`<sup>Required</sup> <a name="if_case" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase"></a>

```python
if_case: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `route_name`<sup>Required</sup> <a name="route_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName"></a>

```python
route_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName">faas_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace">faas_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `faas_name`<sup>Required</sup> <a name="faas_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName"></a>

```python
faas_name: str
```

- *Type:* str

---

##### `faas_namespace`<sup>Required</sup> <a name="faas_namespace" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace"></a>

```python
faas_namespace: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid">agent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents">attached_child_agents</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions">attached_functions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails">attached_guardrails</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases">attached_knowledge_bases</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback">can_rollback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail">created_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied">currently_applied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k">k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations">provide_citations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod">retrieval_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction">trigger_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash">version_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_uuid`<sup>Required</sup> <a name="agent_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid"></a>

```python
agent_uuid: str
```

- *Type:* str

---

##### `attached_child_agents`<sup>Required</sup> <a name="attached_child_agents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents"></a>

```python
attached_child_agents: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a>

---

##### `attached_functions`<sup>Required</sup> <a name="attached_functions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions"></a>

```python
attached_functions: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a>

---

##### `attached_guardrails`<sup>Required</sup> <a name="attached_guardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails"></a>

```python
attached_guardrails: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a>

---

##### `attached_knowledge_bases`<sup>Required</sup> <a name="attached_knowledge_bases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases"></a>

```python
attached_knowledge_bases: DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a>

---

##### `can_rollback`<sup>Required</sup> <a name="can_rollback" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback"></a>

```python
can_rollback: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by_email`<sup>Required</sup> <a name="created_by_email" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail"></a>

```python
created_by_email: str
```

- *Type:* str

---

##### `currently_applied`<sup>Required</sup> <a name="currently_applied" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied"></a>

```python
currently_applied: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `k`<sup>Required</sup> <a name="k" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k"></a>

```python
k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provide_citations`<sup>Required</sup> <a name="provide_citations" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations"></a>

```python
provide_citations: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retrieval_method`<sup>Required</sup> <a name="retrieval_method" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod"></a>

```python
retrieval_method: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_action`<sup>Required</sup> <a name="trigger_action" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction"></a>

```python
trigger_action: str
```

- *Type:* str

---

##### `version_hash`<sup>Required</sup> <a name="version_hash" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash"></a>

```python
version_hash: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiAgentVersionsAgentVersions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a>

---


### DataDigitaloceanGenaiAgentVersionsFilterList <a name="DataDigitaloceanGenaiAgentVersionsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]]

---


### DataDigitaloceanGenaiAgentVersionsFilterOutputReference <a name="DataDigitaloceanGenaiAgentVersionsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy">reset_match_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_match_by` <a name="reset_match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy"></a>

```python
def reset_match_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput">match_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy">match_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_by_input`<sup>Optional</sup> <a name="match_by_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput"></a>

```python
match_by_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_by`<sup>Required</sup> <a name="match_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy"></a>

```python
match_by: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanGenaiAgentVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>]

---


### DataDigitaloceanGenaiAgentVersionsSortList <a name="DataDigitaloceanGenaiAgentVersionsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiAgentVersionsSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiAgentVersionsSort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]]

---


### DataDigitaloceanGenaiAgentVersionsSortOutputReference <a name="DataDigitaloceanGenaiAgentVersionsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_agent_versions

dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection">reset_direction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanGenaiAgentVersionsSort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>]

---



