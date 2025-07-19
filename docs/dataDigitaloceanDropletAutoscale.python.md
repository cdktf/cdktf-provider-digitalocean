# `dataDigitaloceanDropletAutoscale` Submodule <a name="`dataDigitaloceanDropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDropletAutoscale <a name="DataDigitaloceanDropletAutoscale" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id">id</a></code> | <code>str</code> | ID of the Droplet autoscale pool. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Droplet autoscale pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id"></a>

- *Type:* str

ID of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale#id DataDigitaloceanDropletAutoscale#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.name"></a>

- *Type:* str

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale#name DataDigitaloceanDropletAutoscale#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanDropletAutoscale to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanDropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization">current_utilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate">droplet_template</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config"></a>

```python
config: DataDigitaloceanDropletAutoscaleConfigAList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `current_utilization`<sup>Required</sup> <a name="current_utilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization"></a>

```python
current_utilization: DataDigitaloceanDropletAutoscaleCurrentUtilizationList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a>

---

##### `droplet_template`<sup>Required</sup> <a name="droplet_template" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate"></a>

```python
droplet_template: DataDigitaloceanDropletAutoscaleDropletTemplateList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletAutoscaleConfig <a name="DataDigitaloceanDropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id">id</a></code> | <code>str</code> | ID of the Droplet autoscale pool. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name">name</a></code> | <code>str</code> | Name of the Droplet autoscale pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale#id DataDigitaloceanDropletAutoscale#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/droplet_autoscale#name DataDigitaloceanDropletAutoscale#name}

---

### DataDigitaloceanDropletAutoscaleConfigA <a name="DataDigitaloceanDropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA()
```


### DataDigitaloceanDropletAutoscaleCurrentUtilization <a name="DataDigitaloceanDropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization()
```


### DataDigitaloceanDropletAutoscaleDropletTemplate <a name="DataDigitaloceanDropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDropletAutoscaleConfigAList <a name="DataDigitaloceanDropletAutoscaleConfigAList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletAutoscaleConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanDropletAutoscaleConfigAOutputReference <a name="DataDigitaloceanDropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes">cooldown_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">target_memory_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances">target_number_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_minutes`<sup>Required</sup> <a name="cooldown_minutes" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```python
cooldown_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization`<sup>Required</sup> <a name="target_cpu_utilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_memory_utilization`<sup>Required</sup> <a name="target_memory_utilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```python
target_memory_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_number_instances`<sup>Required</sup> <a name="target_number_instances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```python
target_number_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanDropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a>

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationList <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanDropletAutoscaleCurrentUtilization
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a>

---


### DataDigitaloceanDropletAutoscaleDropletTemplateList <a name="DataDigitaloceanDropletAutoscaleDropletTemplateList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference <a name="DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_droplet_autoscale

dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6">ipv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">with_droplet_agent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```python
ipv6: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

##### `with_droplet_agent`<sup>Required</sup> <a name="with_droplet_agent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```python
with_droplet_agent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanDropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a>

---



