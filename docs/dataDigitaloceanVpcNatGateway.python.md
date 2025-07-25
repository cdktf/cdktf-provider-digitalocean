# `dataDigitaloceanVpcNatGateway` Submodule <a name="`dataDigitaloceanVpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanVpcNatGateway <a name="DataDigitaloceanVpcNatGateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway(
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
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | ID of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the VPC NAT Gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id"></a>

- *Type:* str

ID of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#id DataDigitaloceanVpcNatGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#name DataDigitaloceanVpcNatGateway#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanVpcNatGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanVpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanVpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses">egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds">icmp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds">tcp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds">udp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs">vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `egresses`<sup>Required</sup> <a name="egresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses"></a>

```python
egresses: DataDigitaloceanVpcNatGatewayEgressesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a>

---

##### `icmp_timeout_seconds`<sup>Required</sup> <a name="icmp_timeout_seconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds"></a>

```python
icmp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tcp_timeout_seconds`<sup>Required</sup> <a name="tcp_timeout_seconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds"></a>

```python
tcp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `udp_timeout_seconds`<sup>Required</sup> <a name="udp_timeout_seconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds"></a>

```python
udp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs"></a>

```python
vpcs: DataDigitaloceanVpcNatGatewayVpcsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanVpcNatGatewayConfig <a name="DataDigitaloceanVpcNatGatewayConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig(
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
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id">id</a></code> | <code>str</code> | ID of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the VPC NAT Gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#id DataDigitaloceanVpcNatGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#name DataDigitaloceanVpcNatGateway#name}

---

### DataDigitaloceanVpcNatGatewayEgresses <a name="DataDigitaloceanVpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses()
```


### DataDigitaloceanVpcNatGatewayEgressesPublicGateways <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways()
```


### DataDigitaloceanVpcNatGatewayVpcs <a name="DataDigitaloceanVpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanVpcNatGatewayEgressesList <a name="DataDigitaloceanVpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanVpcNatGatewayEgressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanVpcNatGatewayEgressesOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways">public_gateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_gateways`<sup>Required</sup> <a name="public_gateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```python
public_gateways: DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanVpcNatGatewayEgresses
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a>

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanVpcNatGatewayEgressesPublicGateways
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a>

---


### DataDigitaloceanVpcNatGatewayVpcsList <a name="DataDigitaloceanVpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanVpcNatGatewayVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanVpcNatGatewayVpcsOutputReference <a name="DataDigitaloceanVpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_vpc_nat_gateway

dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway">default_gateway</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_gateway`<sup>Required</sup> <a name="default_gateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```python
default_gateway: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanVpcNatGatewayVpcs
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a>

---



