# `dataDigitaloceanSpacesKey` Submodule <a name="`dataDigitaloceanSpacesKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesKey <a name="DataDigitaloceanSpacesKey" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key digitalocean_spaces_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | The access key for the Spaces key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#id DataDigitaloceanSpacesKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.accessKey"></a>

- *Type:* str

The access key for the Spaces key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#access_key DataDigitaloceanSpacesKey#access_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#id DataDigitaloceanSpacesKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanSpacesKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanSpacesKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanSpacesKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList">DataDigitaloceanSpacesKeyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.grant"></a>

```python
grant: DataDigitaloceanSpacesKeyGrantList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList">DataDigitaloceanSpacesKeyGrantList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesKeyConfig <a name="DataDigitaloceanSpacesKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.accessKey">access_key</a></code> | <code>str</code> | The access key for the Spaces key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#id DataDigitaloceanSpacesKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The access key for the Spaces key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#access_key DataDigitaloceanSpacesKey#access_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/spaces_key#id DataDigitaloceanSpacesKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanSpacesKeyGrant <a name="DataDigitaloceanSpacesKeyGrant" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrant()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanSpacesKeyGrantList <a name="DataDigitaloceanSpacesKeyGrantList" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanSpacesKeyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanSpacesKeyGrantOutputReference <a name="DataDigitaloceanSpacesKeyGrantOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_key

dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrant">DataDigitaloceanSpacesKeyGrant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrantOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanSpacesKeyGrant
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesKey.DataDigitaloceanSpacesKeyGrant">DataDigitaloceanSpacesKeyGrant</a>

---



