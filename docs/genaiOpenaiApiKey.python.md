# `genaiOpenaiApiKey` Submodule <a name="`genaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiOpenaiApiKey <a name="GenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  name: str,
  id: str = None,
  model: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | The OpenAI API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.model">model</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]</code> | model block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.apiKey"></a>

- *Type:* str

The OpenAI API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.name"></a>

- *Type:* str

A name for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.model"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]

model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel">put_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel">reset_model</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_model` <a name="put_model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel"></a>

```python
def put_model(
  value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_model` <a name="reset_model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel"></a>

```python
def reset_model() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenaiOpenaiApiKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model">model</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput">model_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model"></a>

```python
model: GenaiOpenaiApiKeyModelList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput"></a>

```python
model_input: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiOpenaiApiKeyConfig <a name="GenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  name: str,
  id: str = None,
  model: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey">api_key</a></code> | <code>str</code> | The OpenAI API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name">name</a></code> | <code>str</code> | A name for the API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model">model</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]</code> | model block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The OpenAI API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model"></a>

```python
model: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]

model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}

---

### GenaiOpenaiApiKeyModel <a name="GenaiOpenaiApiKeyModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModel(
  agreement: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelAgreement]] = None,
  inference_name: str = None,
  inference_version: str = None,
  is_foundational: typing.Union[bool, IResolvable] = None,
  name: str = None,
  parent_uuid: str = None,
  provider: str = None,
  upload_complete: typing.Union[bool, IResolvable] = None,
  url: str = None,
  usecases: typing.List[str] = None,
  versions: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelVersions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement">agreement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]</code> | agreement block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName">inference_name</a></code> | <code>str</code> | Inference name of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion">inference_version</a></code> | <code>str</code> | Infernce version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational">is_foundational</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the Model Base is foundational. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name">name</a></code> | <code>str</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid">parent_uuid</a></code> | <code>str</code> | Parent UUID of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider">provider</a></code> | <code>str</code> | Provider of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete">upload_complete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the Model upload is complete. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url">url</a></code> | <code>str</code> | URL of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases">usecases</a></code> | <code>typing.List[str]</code> | List of Usecases for the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions">versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]</code> | versions block. |

---

##### `agreement`<sup>Optional</sup> <a name="agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement"></a>

```python
agreement: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelAgreement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]

agreement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#agreement GenaiOpenaiApiKey#agreement}

---

##### `inference_name`<sup>Optional</sup> <a name="inference_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName"></a>

```python
inference_name: str
```

- *Type:* str

Inference name of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#inference_name GenaiOpenaiApiKey#inference_name}

---

##### `inference_version`<sup>Optional</sup> <a name="inference_version" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion"></a>

```python
inference_version: str
```

- *Type:* str

Infernce version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#inference_version GenaiOpenaiApiKey#inference_version}

---

##### `is_foundational`<sup>Optional</sup> <a name="is_foundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational"></a>

```python
is_foundational: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the Model Base is foundational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#is_foundational GenaiOpenaiApiKey#is_foundational}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `parent_uuid`<sup>Optional</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

Parent UUID of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#parent_uuid GenaiOpenaiApiKey#parent_uuid}

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider"></a>

```python
provider: str
```

- *Type:* str

Provider of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#provider GenaiOpenaiApiKey#provider}

---

##### `upload_complete`<sup>Optional</sup> <a name="upload_complete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete"></a>

```python
upload_complete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the Model upload is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#upload_complete GenaiOpenaiApiKey#upload_complete}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url"></a>

```python
url: str
```

- *Type:* str

URL of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `usecases`<sup>Optional</sup> <a name="usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases"></a>

```python
usecases: typing.List[str]
```

- *Type:* typing.List[str]

List of Usecases for the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#usecases GenaiOpenaiApiKey#usecases}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions"></a>

```python
versions: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#versions GenaiOpenaiApiKey#versions}

---

### GenaiOpenaiApiKeyModelAgreement <a name="GenaiOpenaiApiKeyModelAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement(
  description: str = None,
  name: str = None,
  url: str = None,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description">description</a></code> | <code>str</code> | Description of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name">name</a></code> | <code>str</code> | Name of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url">url</a></code> | <code>str</code> | URL of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid">uuid</a></code> | <code>str</code> | UUID of the agreement. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#description GenaiOpenaiApiKey#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url"></a>

```python
url: str
```

- *Type:* str

URL of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#uuid GenaiOpenaiApiKey#uuid}

---

### GenaiOpenaiApiKeyModelVersions <a name="GenaiOpenaiApiKeyModelVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions(
  major: typing.Union[int, float] = None,
  minor: typing.Union[int, float] = None,
  patch: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major">major</a></code> | <code>typing.Union[int, float]</code> | Major version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor">minor</a></code> | <code>typing.Union[int, float]</code> | Minor version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch">patch</a></code> | <code>typing.Union[int, float]</code> | Patch version of the model. |

---

##### `major`<sup>Optional</sup> <a name="major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major"></a>

```python
major: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Major version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#major GenaiOpenaiApiKey#major}

---

##### `minor`<sup>Optional</sup> <a name="minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor"></a>

```python
minor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minor version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#minor GenaiOpenaiApiKey#minor}

---

##### `patch`<sup>Optional</sup> <a name="patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch"></a>

```python
patch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Patch version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/resources/genai_openai_api_key#patch GenaiOpenaiApiKey#patch}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiOpenaiApiKeyModelAgreementList <a name="GenaiOpenaiApiKeyModelAgreementList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiOpenaiApiKeyModelAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelAgreement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]

---


### GenaiOpenaiApiKeyModelAgreementOutputReference <a name="GenaiOpenaiApiKeyModelAgreementOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenaiOpenaiApiKeyModelAgreement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]

---


### GenaiOpenaiApiKeyModelList <a name="GenaiOpenaiApiKeyModelList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiOpenaiApiKeyModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]]

---


### GenaiOpenaiApiKeyModelOutputReference <a name="GenaiOpenaiApiKeyModelOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement">put_agreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement">reset_agreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName">reset_inference_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion">reset_inference_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational">reset_is_foundational</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid">reset_parent_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider">reset_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete">reset_upload_complete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases">reset_usecases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions">reset_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agreement` <a name="put_agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement"></a>

```python
def put_agreement(
  value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelAgreement]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]

---

##### `put_versions` <a name="put_versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions"></a>

```python
def put_versions(
  value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]

---

##### `reset_agreement` <a name="reset_agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement"></a>

```python
def reset_agreement() -> None
```

##### `reset_inference_name` <a name="reset_inference_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName"></a>

```python
def reset_inference_name() -> None
```

##### `reset_inference_version` <a name="reset_inference_version" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion"></a>

```python
def reset_inference_version() -> None
```

##### `reset_is_foundational` <a name="reset_is_foundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational"></a>

```python
def reset_is_foundational() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_uuid` <a name="reset_parent_uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid"></a>

```python
def reset_parent_uuid() -> None
```

##### `reset_provider` <a name="reset_provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider"></a>

```python
def reset_provider() -> None
```

##### `reset_upload_complete` <a name="reset_upload_complete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete"></a>

```python
def reset_upload_complete() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_usecases` <a name="reset_usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases"></a>

```python
def reset_usecases() -> None
```

##### `reset_versions` <a name="reset_versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions"></a>

```python
def reset_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement">agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput">agreement_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput">inference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput">inference_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput">is_foundational_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput">parent_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput">upload_complete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput">usecases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput">versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName">inference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion">inference_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational">is_foundational</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid">parent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete">upload_complete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases">usecases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement"></a>

```python
agreement: GenaiOpenaiApiKeyModelAgreementList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions"></a>

```python
versions: GenaiOpenaiApiKeyModelVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a>

---

##### `agreement_input`<sup>Optional</sup> <a name="agreement_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput"></a>

```python
agreement_input: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelAgreement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>]]

---

##### `inference_name_input`<sup>Optional</sup> <a name="inference_name_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput"></a>

```python
inference_name_input: str
```

- *Type:* str

---

##### `inference_version_input`<sup>Optional</sup> <a name="inference_version_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput"></a>

```python
inference_version_input: str
```

- *Type:* str

---

##### `is_foundational_input`<sup>Optional</sup> <a name="is_foundational_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput"></a>

```python
is_foundational_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_uuid_input`<sup>Optional</sup> <a name="parent_uuid_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput"></a>

```python
parent_uuid_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `upload_complete_input`<sup>Optional</sup> <a name="upload_complete_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput"></a>

```python
upload_complete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `usecases_input`<sup>Optional</sup> <a name="usecases_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput"></a>

```python
usecases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput"></a>

```python
versions_input: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]

---

##### `inference_name`<sup>Required</sup> <a name="inference_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName"></a>

```python
inference_name: str
```

- *Type:* str

---

##### `inference_version`<sup>Required</sup> <a name="inference_version" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion"></a>

```python
inference_version: str
```

- *Type:* str

---

##### `is_foundational`<sup>Required</sup> <a name="is_foundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational"></a>

```python
is_foundational: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_uuid`<sup>Required</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `upload_complete`<sup>Required</sup> <a name="upload_complete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete"></a>

```python
upload_complete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `usecases`<sup>Required</sup> <a name="usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases"></a>

```python
usecases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenaiOpenaiApiKeyModel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>]

---


### GenaiOpenaiApiKeyModelVersionsList <a name="GenaiOpenaiApiKeyModelVersionsList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiOpenaiApiKeyModelVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GenaiOpenaiApiKeyModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]]

---


### GenaiOpenaiApiKeyModelVersionsOutputReference <a name="GenaiOpenaiApiKeyModelVersionsOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_openai_api_key

genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor">reset_major</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor">reset_minor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch">reset_patch</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_major` <a name="reset_major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor"></a>

```python
def reset_major() -> None
```

##### `reset_minor` <a name="reset_minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor"></a>

```python
def reset_minor() -> None
```

##### `reset_patch` <a name="reset_patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch"></a>

```python
def reset_patch() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput">major_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput">minor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput">patch_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major">major</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor">minor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch">patch</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `major_input`<sup>Optional</sup> <a name="major_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput"></a>

```python
major_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minor_input`<sup>Optional</sup> <a name="minor_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput"></a>

```python
minor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_input`<sup>Optional</sup> <a name="patch_input" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput"></a>

```python
patch_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major"></a>

```python
major: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor"></a>

```python
minor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch"></a>

```python
patch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenaiOpenaiApiKeyModelVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>]

---



