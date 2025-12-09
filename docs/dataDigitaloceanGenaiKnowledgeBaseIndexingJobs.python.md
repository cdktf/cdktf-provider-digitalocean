# `dataDigitaloceanGenaiKnowledgeBaseIndexingJobs` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBaseIndexingJobs` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBaseIndexingJobs <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobs" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs digitalocean_genai_knowledge_base_indexing_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  knowledge_base_uuid: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#id DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.knowledgeBaseUuid"></a>

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#id DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseIndexingJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseIndexingJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseIndexingJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiKnowledgeBaseIndexingJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseIndexingJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.jobs">jobs</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.knowledgeBaseUuidInput">knowledge_base_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.jobs"></a>

```python
jobs: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.meta"></a>

```python
meta: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `knowledge_base_uuid_input`<sup>Optional</sup> <a name="knowledge_base_uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.knowledgeBaseUuidInput"></a>

```python
knowledge_base_uuid_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  knowledge_base_uuid: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#id DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_knowledge_base_indexing_jobs#id DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs()
```


### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsFailed">total_items_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsIndexed">total_items_indexed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsSkipped">total_items_skipped</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_datasources`<sup>Required</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_uuids`<sup>Required</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources`<sup>Required</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_items_failed`<sup>Required</sup> <a name="total_items_failed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsFailed"></a>

```python
total_items_failed: str
```

- *Type:* str

---

##### `total_items_indexed`<sup>Required</sup> <a name="total_items_indexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsIndexed"></a>

```python
total_items_indexed: str
```

- *Type:* str

---

##### `total_items_skipped`<sup>Required</sup> <a name="total_items_skipped" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.totalItemsSkipped"></a>

```python
total_items_skipped: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs</a>

---


### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base_indexing_jobs

dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.page">page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.pages">pages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.page"></a>

```python
page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.pages"></a>

```python
pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseIndexingJobs.DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta">DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta</a>

---



