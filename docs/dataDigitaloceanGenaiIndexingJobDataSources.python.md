# `dataDigitaloceanGenaiIndexingJobDataSources` Submodule <a name="`dataDigitaloceanGenaiIndexingJobDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJobDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources digitalocean_genai_indexing_job_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  indexing_job_uuid: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.indexingJobUuid">indexing_job_uuid</a></code> | <code>str</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `indexing_job_uuid`<sup>Required</sup> <a name="indexing_job_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.indexingJobUuid"></a>

- *Type:* str

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#indexing_job_uuid DataDigitaloceanGenaiIndexingJobDataSources#indexing_job_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJobDataSources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiIndexingJobDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJobDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources">indexed_data_sources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput">indexing_job_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid">indexing_job_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `indexed_data_sources`<sup>Required</sup> <a name="indexed_data_sources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources"></a>

```python
indexed_data_sources: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `indexing_job_uuid_input`<sup>Optional</sup> <a name="indexing_job_uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput"></a>

```python
indexing_job_uuid_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `indexing_job_uuid`<sup>Required</sup> <a name="indexing_job_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid"></a>

```python
indexing_job_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesConfig <a name="DataDigitaloceanGenaiIndexingJobDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  indexing_job_uuid: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid">indexing_job_uuid</a></code> | <code>str</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `indexing_job_uuid`<sup>Required</sup> <a name="indexing_job_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid"></a>

```python
indexing_job_uuid: str
```

- *Type:* str

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#indexing_job_uuid DataDigitaloceanGenaiIndexingJobDataSources#indexing_job_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_indexing_job_data_sources

dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt">completed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid">data_source_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg">error_msg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount">failed_item_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount">indexed_file_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount">indexed_item_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount">removed_item_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount">skipped_item_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes">total_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed">total_bytes_indexed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount">total_file_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_at`<sup>Required</sup> <a name="completed_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt"></a>

```python
completed_at: str
```

- *Type:* str

---

##### `data_source_uuid`<sup>Required</sup> <a name="data_source_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid"></a>

```python
data_source_uuid: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `error_msg`<sup>Required</sup> <a name="error_msg" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg"></a>

```python
error_msg: str
```

- *Type:* str

---

##### `failed_item_count`<sup>Required</sup> <a name="failed_item_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount"></a>

```python
failed_item_count: str
```

- *Type:* str

---

##### `indexed_file_count`<sup>Required</sup> <a name="indexed_file_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount"></a>

```python
indexed_file_count: str
```

- *Type:* str

---

##### `indexed_item_count`<sup>Required</sup> <a name="indexed_item_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount"></a>

```python
indexed_item_count: str
```

- *Type:* str

---

##### `removed_item_count`<sup>Required</sup> <a name="removed_item_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount"></a>

```python
removed_item_count: str
```

- *Type:* str

---

##### `skipped_item_count`<sup>Required</sup> <a name="skipped_item_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount"></a>

```python
skipped_item_count: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `total_bytes`<sup>Required</sup> <a name="total_bytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes"></a>

```python
total_bytes: str
```

- *Type:* str

---

##### `total_bytes_indexed`<sup>Required</sup> <a name="total_bytes_indexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed"></a>

```python
total_bytes_indexed: str
```

- *Type:* str

---

##### `total_file_count`<sup>Required</sup> <a name="total_file_count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount"></a>

```python
total_file_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a>

---



