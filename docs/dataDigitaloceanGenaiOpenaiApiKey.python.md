# `dataDigitaloceanGenaiOpenaiApiKey` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKey <a name="DataDigitaloceanGenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  uuid: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | OpenAI API Key Uuid. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.uuid"></a>

- *Type:* str

OpenAI API Key Uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#uuid DataDigitaloceanGenaiOpenaiApiKey#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models">models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models"></a>

```python
models: DataDigitaloceanGenaiOpenaiApiKeyModelsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeyConfig <a name="DataDigitaloceanGenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  uuid: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid">uuid</a></code> | <code>str</code> | OpenAI API Key Uuid. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

OpenAI API Key Uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#uuid DataDigitaloceanGenaiOpenaiApiKey#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiOpenaiApiKeyModels <a name="DataDigitaloceanGenaiOpenaiApiKeyModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels()
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement()
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName">inference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion">inference_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational">is_foundational</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid">parent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete">upload_complete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases">usecases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement"></a>

```python
agreement: DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `inference_name`<sup>Required</sup> <a name="inference_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName"></a>

```python
inference_name: str
```

- *Type:* str

---

##### `inference_version`<sup>Required</sup> <a name="inference_version" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion"></a>

```python
inference_version: str
```

- *Type:* str

---

##### `is_foundational`<sup>Required</sup> <a name="is_foundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational"></a>

```python
is_foundational: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_uuid`<sup>Required</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `upload_complete`<sup>Required</sup> <a name="upload_complete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete"></a>

```python
upload_complete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases"></a>

```python
usecases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions"></a>

```python
versions: DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeyModels
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_openai_api_key

dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major">major</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor">minor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch">patch</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major"></a>

```python
major: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor"></a>

```python
minor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch"></a>

```python
patch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanGenaiOpenaiApiKeyModelsVersions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a>

---



