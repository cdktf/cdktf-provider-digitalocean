# `digitalocean_spaces_bucket_cors_configuration`

Refer to the Terraform Registory for docs: [`digitalocean_spaces_bucket_cors_configuration`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration).

# `spacesBucketCorsConfiguration` Submodule <a name="`spacesBucketCorsConfiguration` Submodule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketCorsConfiguration <a name="SpacesBucketCorsConfiguration" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration digitalocean_spaces_bucket_cors_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration(
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
  cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]],
  region: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule"></a>

```python
cors_rule: SpacesBucketCorsConfigurationCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketCorsConfigurationConfig <a name="SpacesBucketCorsConfigurationConfig" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]],
  region: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SpacesBucketCorsConfigurationCorsRule <a name="SpacesBucketCorsConfigurationCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule(
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  allowed_headers: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  id: str = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}.

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpacesBucketCorsConfigurationCorsRuleList <a name="SpacesBucketCorsConfigurationCorsRuleList" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpacesBucketCorsConfigurationCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpacesBucketCorsConfigurationCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]]

---


### SpacesBucketCorsConfigurationCorsRuleOutputReference <a name="SpacesBucketCorsConfigurationCorsRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket_cors_configuration

spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpacesBucketCorsConfigurationCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>]

---


