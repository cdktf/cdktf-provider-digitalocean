# `dataDigitaloceanPartnerAttachmentServiceKey` Submodule <a name="`dataDigitaloceanPartnerAttachmentServiceKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachmentServiceKey <a name="DataDigitaloceanPartnerAttachmentServiceKey" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key digitalocean_partner_attachment_service_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attachment_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.attachmentId">attachment_id</a></code> | <code>str</code> | The ID of the Partner Attachment for which to retrieve the service key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.attachmentId"></a>

- *Type:* str

The ID of the Partner Attachment for which to retrieve the service key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#attachment_id DataDigitaloceanPartnerAttachmentServiceKey#attachment_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanPartnerAttachmentServiceKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanPartnerAttachmentServiceKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachmentServiceKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput">attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `attachment_id_input`<sup>Optional</sup> <a name="attachment_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput"></a>

```python
attachment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentServiceKeyConfig <a name="DataDigitaloceanPartnerAttachmentServiceKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment_service_key

dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attachment_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId">attachment_id</a></code> | <code>str</code> | The ID of the Partner Attachment for which to retrieve the service key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

The ID of the Partner Attachment for which to retrieve the service key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#attachment_id DataDigitaloceanPartnerAttachmentServiceKey#attachment_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



