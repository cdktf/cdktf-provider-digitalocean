# `dataDigitaloceanSpacesBucketObjects` Submodule <a name="`dataDigitaloceanSpacesBucketObjects` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesBucketObjects <a name="DataDigitaloceanSpacesBucketObjects" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects digitalocean_spaces_bucket_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  region: str,
  delimiter: str = None,
  encoding_type: str = None,
  id: str = None,
  max_keys: typing.Union[int, float] = None,
  prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.encodingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_keys`<sup>Optional</sup> <a name="max_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.maxKeys"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetEncodingType">reset_encoding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetMaxKeys">reset_max_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_encoding_type` <a name="reset_encoding_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetEncodingType"></a>

```python
def reset_encoding_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_keys` <a name="reset_max_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetMaxKeys"></a>

```python
def reset_max_keys() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetPrefix"></a>

```python
def reset_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObjects resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObjects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanSpacesBucketObjects to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanSpacesBucketObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesBucketObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.commonPrefixes">common_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingTypeInput">encoding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeysInput">max_keys_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingType">encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `common_prefixes`<sup>Required</sup> <a name="common_prefixes" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.commonPrefixes"></a>

```python
common_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `encoding_type_input`<sup>Optional</sup> <a name="encoding_type_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingTypeInput"></a>

```python
encoding_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_keys_input`<sup>Optional</sup> <a name="max_keys_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeysInput"></a>

```python
max_keys_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `encoding_type`<sup>Required</sup> <a name="encoding_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_keys`<sup>Required</sup> <a name="max_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeys"></a>

```python
max_keys: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesBucketObjectsConfig <a name="DataDigitaloceanSpacesBucketObjectsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_spaces_bucket_objects

dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  region: str,
  delimiter: str = None,
  encoding_type: str = None,
  id: str = None,
  max_keys: typing.Union[int, float] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_keys`<sup>Optional</sup> <a name="max_keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.maxKeys"></a>

```python
max_keys: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.1/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}.

---



